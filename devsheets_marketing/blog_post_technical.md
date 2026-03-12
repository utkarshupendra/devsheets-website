# Building DevSheets: A Technical Deep Dive into Modern Desktop App Development

*How we built a developer-friendly spreadsheet using Electron, React, and TypeScript*

---

## Introduction

When we set out to build DevSheets, we had one goal: create a spreadsheet application that developers actually want to use. This meant solving fundamental UX problems in existing tools while maintaining the power and flexibility developers expect.

In this post, I'll walk through the technical architecture, key design decisions, and interesting challenges we solved along the way.

---

## Architecture Overview

DevSheets follows a layered architecture:

```
┌─────────────────────────────────────────┐
│         Electron Main Process           │
│    (File I/O, Native APIs, IPC)         │
└──────────────────┬──────────────────────┘
                   │ IPC
┌──────────────────▼──────────────────────┐
│       Electron Renderer Process         │
│  (React UI, State Management, Logic)    │
└─────────────────────────────────────────┘
```

---

## State Management with Zustand + Immer

One of our earliest decisions was choosing Zustand over Redux or Context API. Here's why:

### Why Zustand?

```typescript
// store.ts - Clean, minimal boilerplate
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface SheetState {
  sheets: Sheet[]
  activeSheetId: string | null
  theme: 'light' | 'dark'
  // ... more state
}

export const useSheetStore = create<SheetState>()(
  immer((set, get) => ({
    sheets: [],
    activeSheetId: null,
    theme: 'dark',
    
    // Actions are just functions
    addSheet: (sheet) => set((state) => {
      state.sheets.push(sheet)
    }),
    
    toggleTheme: () => set((state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    })
  }))
)
```

**Benefits:**
- Minimal boilerplate (no action types, no reducers)
- Immer enables mutable-like updates with immutable results
- Excellent TypeScript support
- Small bundle size (~1KB)

### Undo/Redo with Immer Patches

Implementing 50-step undo/redo was surprisingly elegant:

```typescript
import { enablePatches, applyPatches } from 'immer'
enablePatches()

interface HistoryState {
  past: Patch[][]
  present: State
  future: Patch[][]
}

// Each state change produces patches
const [nextState, patches, inversePatches] = produceWithPatches(
  currentState,
  (draft) => {
    // mutation
  }
)

// Undo: apply inverse patches
const undo = () => {
  const inversePatches = past.pop()
  present = applyPatches(present, inversePatches)
}
```

---

## The Filter Expression Engine

The heart of DevSheets is its expression-based filtering system. Here's how it works:

### Parser Design

```typescript
// Parse "stars > 50000 && language == 'TypeScript'"
// Into: AST (Abstract Syntax Tree)

interface FilterNode {
  type: 'comparison' | 'logical'
  operator: string
  left?: FilterNode | string
  right?: FilterNode | string | number
}

// Parsed result:
{
  type: 'logical',
  operator: '&&',
  left: {
    type: 'comparison',
    operator: '>',
    left: 'stars',
    right: 50000
  },
  right: {
    type: 'comparison',
    operator: '==',
    left: 'language',
    right: 'TypeScript'
  }
}
```

### Supported Operators

| Operator | Example | Description |
|----------|---------|-------------|
| `==` | `status == "active"` | Equals (case-insensitive) |
| `!=` | `type != "draft"` | Not equals |
| `>`, `<`, `>=`, `<=` | `price > 100` | Numeric comparison |
| `contains` | `name contains "test"` | Substring match |
| `starts_with` | `url starts_with "https"` | Prefix match |
| `ends_with` | `file ends_with ".csv"` | Suffix match |
| `~` | `email ~ ".*@gmail"` | Regex match |
| `in` | `lang in ("Go", "Rust")` | List membership |
| `∅` / `!∅` | `name ∅` | Empty/not empty |

### Autocomplete System

The filter bar provides intelligent autocomplete:

```typescript
// As user types: "stars > "
// Suggest: column values, operators, or literals

const getSuggestions = (input: string, cursorPosition: number) => {
  const context = parseContext(input, cursorPosition)
  
  if (context.expecting === 'column') {
    return columns.filter(c => c.name.startsWith(context.partial))
  }
  
  if (context.expecting === 'operator') {
    return getOperatorsForType(context.columnType)
  }
  
  if (context.expecting === 'value') {
    return getUniqueValues(context.columnName)
  }
}
```

---

## Virtualized Grid for Performance

Spreadsheets can have millions of cells. We use virtualization to render only visible cells:

```typescript
// Grid.tsx
import { useVirtualizer } from '@tanstack/react-virtual'

const Grid = ({ data, columns }) => {
  const parentRef = useRef<HTMLDivElement>(null)
  
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 28, // row height
    overscan: 5 // render 5 extra rows
  })
  
  const columnVirtualizer = useVirtualizer({
    count: columns.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100, // column width
    overscan: 3,
    horizontal: true
  })
  
  // Only render visible cells
  return (
    <div ref={parentRef}>
      {rowVirtualizer.getVirtualItems().map(row => (
        columnVirtualizer.getVirtualItems().map(col => (
          <Cell 
            key={`${row.index}-${col.index}`}
            value={data[row.index][columns[col.index].key]}
            style={{
              position: 'absolute',
              top: row.start,
              left: col.start,
              width: col.size,
              height: row.size
            }}
          />
        ))
      ))}
    </div>
  )
}
```

**Performance:** Handles 100,000+ rows at 60fps.

---

## Drag-and-Drop with @dnd-kit

The pivot builder uses @dnd-kit for smooth drag-and-drop:

```typescript
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'

const PivotBuilder = () => {
  const { rowFields, valueFields, addToRow, addToValue } = usePivotStore()
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="pivot-builder">
        <ColumnList /> {/* Draggable columns */}
        <DropZone id="rows" items={rowFields} />
        <DropZone id="values" items={valueFields} />
      </div>
    </DndContext>
  )
}

const DropZone = ({ id, items }) => {
  const { setNodeRef, isOver } = useDroppable({ id })
  
  return (
    <div 
      ref={setNodeRef}
      className={cn('drop-zone', isOver && 'drop-zone-active')}
    >
      {items.map(item => <DraggableField key={item.id} {...item} />)}
    </div>
  )
}
```

---

## File Format Support with SheetJS

DevSheets supports multiple formats via SheetJS:

```typescript
// fileManager.ts
import * as XLSX from 'xlsx'

export const loadFile = async (filePath: string): Promise<Sheet[]> => {
  const buffer = await fs.readFile(filePath)
  const workbook = XLSX.read(buffer, { type: 'buffer' })
  
  return workbook.SheetNames.map(name => {
    const worksheet = workbook.Sheets[name]
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
    
    return {
      name,
      data: parseRows(jsonData),
      columns: detectColumnTypes(jsonData[0], jsonData.slice(1))
    }
  })
}

export const saveFile = async (
  sheets: Sheet[], 
  filePath: string, 
  format: 'csv' | 'json' | 'xlsx'
): Promise<void> => {
  switch (format) {
    case 'csv':
      return saveAsCSV(sheets[0], filePath)
    case 'json':
      return saveAsJSON(sheets[0], filePath)
    case 'xlsx':
      return saveAsXLSX(sheets, filePath)
  }
}
```

---

## The Pipeline View: Visualizing Data Transformations

The pipeline view is one of DevSheets' unique features. Here's how it's implemented:

```typescript
interface PipelineStep {
  id: string
  type: 'source' | 'filter' | 'sort' | 'pivot'
  config: any
  inputRows: number
  outputRows: number
  enabled: boolean
}

const PipelineView = () => {
  const { pipeline, toggleStep, removeStep } = usePipelineStore()
  
  return (
    <div className="pipeline">
      {pipeline.map((step, index) => (
        <PipelineNode 
          key={step.id}
          step={step}
          onToggle={() => toggleStep(step.id)}
          onRemove={() => removeStep(step.id)}
        />
      ))}
    </div>
  )
}

const PipelineNode = ({ step, onToggle, onRemove }) => (
  <div className={cn('pipeline-node', !step.enabled && 'disabled')}>
    <div className="node-header">
      <span className="node-type">{step.type}</span>
      <button onClick={onToggle}>
        {step.enabled ? '✓' : '○'}
      </button>
      <button onClick={onRemove}>×</button>
    </div>
    <div className="node-stats">
      {step.outputRows} / {step.inputRows} rows
      {step.inputRows > 0 && (
        <span className="filter-rate">
          ({Math.round((step.outputRows / step.inputRows) * 100)}%)
        </span>
      )}
    </div>
  </div>
)
```

---

## IPC Communication in Electron

The main process handles file I/O via IPC:

```typescript
// electron/main.ts
import { ipcMain, dialog } from 'electron'

ipcMain.handle('file:open', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      { name: 'Spreadsheets', extensions: ['csv', 'tsv', 'json', 'xlsx', 'xls'] }
    ]
  })
  
  if (result.canceled) return null
  
  const filePath = result.filePaths[0]
  const sheets = await loadFile(filePath)
  return { filePath, sheets }
})

ipcMain.handle('file:save', async (event, { sheets, filePath, format }) => {
  if (!filePath) {
    const result = await dialog.showSaveDialog({
      filters: getFiltersForFormat(format)
    })
    if (result.canceled) return null
    filePath = result.filePath
  }
  
  await saveFile(sheets, filePath, format)
  return filePath
})
```

```typescript
// preload.ts - Secure context bridge
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('file:open'),
  saveFile: (args) => ipcRenderer.invoke('file:save', args),
  onThemeChange: (callback) => ipcRenderer.on('theme:change', callback)
})
```

---

## Theme System with Tailwind CSS

Dark/light mode is implemented using Tailwind's dark mode:

```typescript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic colors that work in both themes
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)'
        },
        border: 'var(--color-border)'
      }
    }
  }
}
```

```css
/* themes.css */
:root {
  --color-surface: #ffffff;
  --color-surface-elevated: #f8fafc;
  --color-border: #e2e8f0;
}

.dark {
  --color-surface: #0f172a;
  --color-surface-elevated: #1e293b;
  --color-border: #334155;
}
```

---

## Testing Strategy

We use a combination of testing approaches:

```typescript
// Unit tests for filter engine
describe('Filter Engine', () => {
  it('parses comparison expressions', () => {
    const ast = parseFilter('stars > 100')
    expect(ast).toEqual({
      type: 'comparison',
      operator: '>',
      left: 'stars',
      right: 100
    })
  })
  
  it('evaluates logical expressions', () => {
    const result = evaluateFilter(
      'a > 1 && b < 10',
      { a: 5, b: 5 }
    )
    expect(result).toBe(true)
  })
})

// Component tests with React Testing Library
describe('FilterBar', () => {
  it('shows autocomplete suggestions', async () => {
    render(<FilterBar columns={mockColumns} />)
    
    const input = screen.getByPlaceholderText('Filter...')
    await userEvent.type(input, 'sta')
    
    expect(screen.getByText('stars')).toBeVisible()
    expect(screen.getByText('status')).toBeVisible()
  })
})

// E2E tests with Playwright
test('full workflow', async ({ page }) => {
  await page.goto('http://localhost:5173')
  
  // Load sample data
  await page.click('text=Load Sample Data')
  
  // Apply filter
  await page.click('[data-testid="filter-bar"]')
  await page.fill('[data-testid="filter-input"]', 'stars > 50000')
  await page.press('[data-testid="filter-input"]', 'Enter')
  
  // Verify filtered results
  const rows = await page.locator('[data-testid="grid-row"]').count()
  expect(rows).toBeLessThan(30)
})
```

---

## Lessons Learned

### 1. Start Simple, Add Complexity Later

We initially built a full expression parser. It was overkill. We simplified to a more constrained but user-friendly syntax, then gradually added power features.

### 2. Virtualization is Essential

Without virtualization, the grid becomes unusable with >1000 rows. @tanstack/react-virtual made this straightforward.

### 3. IPC Design Matters

Early IPC design decisions are hard to change. We spent time designing a clean API surface that could evolve.

### 4. TypeScript Pays Off

The type safety catches so many bugs at compile time. The initial setup cost is worth it.

---

## Future Directions

- **Plugin system** — Allow custom functions and transformations
- **SQL interface** — Write actual SQL against your data
- **Charts** — Built-in visualization
- **Collaboration** — Real-time multi-user editing

---

## Try It Out

```bash
git clone https://github.com/utkarshupendra/devsheets.git
cd devsheets
npm install
npm run electron:dev
```

We'd love your feedback and contributions!

---

**GitHub:** [https://github.com/utkarshupendra/devsheets](https://github.com/utkarshupendra/devsheets)

*Built with Electron, React, TypeScript, and ❤️*
