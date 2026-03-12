# Product Hunt Launch Kit for DevSheets

---

## Product Information

### Name
DevSheets

### Tagline
A developer-friendly spreadsheet — filter with code, not clicks

### Description (Short - 60 characters)
A spreadsheet built for developers, not accountants

### Description (Medium - 260 characters)
DevSheets is a developer-friendly spreadsheet app. Filter with code expressions, see your data pipeline, and enjoy features like dark mode, command palette, and 50-step undo. Built with Electron + React. Free & open source.

### Description (Long)
DevSheets is a spreadsheet application built specifically for developers and data analysts who are tired of fighting Excel's hidden filters and endless menu clicks.

**Why DevSheets?**

Excel's sort, filter, and pivot features hide state and are hard to compose. DevSheets makes every data transformation visible, programmable, and inspectable.

**Key Features:**

✅ **Expression-based filters** — Type `stars > 50000 && language == "TypeScript"` instead of clicking through 7 menu items

✅ **15 filter operators** — equals, contains, regex, in lists, is_empty, and more

✅ **Editable filter chips** — Click any chip to toggle, edit value, or change operator inline

✅ **Visual sort chips** — See exactly which columns are sorted and in what order

✅ **Transparent pivot tables** — Drag-and-drop builder with live preview

✅ **Data pipeline view** — See your transformations as a composable pipeline

✅ **Multi-sheet support** — Open multiple files as tabs; add, rename, and remove sheets

✅ **Excel-like selection** — Click headers to select columns/rows, Shift+arrow to extend

✅ **Selection stats** — Sum, avg, min, max, count auto-calculated for any numeric selection

✅ **Copy/paste to Excel** — Seamless clipboard interop with Excel, Google Sheets, and other spreadsheets

✅ **Undo/redo** — 50-step history per sheet with ⌘Z / ⌘⇧Z

✅ **Dark & light themes** — Toggle instantly, persisted across sessions

✅ **Command palette** — ⌘K to access any action

✅ **Quick save** — ⌘S writes directly back to the original file (Electron)

**Tech Stack:**
- Desktop: Electron 28
- UI: React 18 + TypeScript
- State: Zustand + Immer
- Drag-and-drop: @dnd-kit
- Styling: Tailwind CSS
- Build: Vite
- Formats: CSV, TSV, JSON, XLSX/XLS (via SheetJS)

**Installation:**
```bash
git clone https://github.com/utkarshupendra/devsheets.git
cd devsheets
npm install
npm run electron:dev
```

DevSheets is free and open source under the MIT license.

---

## Maker Information

### Maker Name
Utkarsh Upendra

### Maker Role
Creator

### Maker Bio
Full-stack developer passionate about building tools that make developers more productive. DevSheets was born from frustration with existing spreadsheet tools when analyzing data.

### Maker Twitter
@utkarshupendra (if available, otherwise omit)

### Maker GitHub
https://github.com/utkarshupendra

---

## Gallery Images (5 images needed)

### Image 1: Hero/Main Screenshot
**Content:** Dark mode screenshot showing the main interface with sample data
**Elements to show:**
- Grid with data
- Filter chips below toolbar
- Pipeline view sidebar
- Dark theme

### Image 2: Filter Expression Demo
**Content:** Close-up of filter bar with expression being typed
**Text overlay:** "Filter with code, not clicks"
**Example:** `stars > 50000 && language == "TypeScript"`

### Image 3: Pipeline View
**Content:** Pipeline sidebar showing transformation steps
**Elements:**
- Source → Filter → Sort → Pivot flow
- Row counts at each step
- Toggle switches

### Image 4: Pivot Table Builder
**Content:** Pivot builder panel with drag-and-drop
**Elements:**
- Available columns
- Row Fields zone
- Value Fields zone
- Live preview

### Image 5: Light/Dark Theme Comparison
**Content:** Split screen showing both themes
**Text:** "Your preference, persisted"

---

## Thumbnail/Icon

**Requirements:**
- 240x240px minimum
- PNG or JPG
- Clear at small sizes

**Design suggestion:**
- Grid icon with code brackets
- Dark background with accent color
- Simple, recognizable

---

## Video (Optional but recommended)

**Length:** 30-60 seconds
**Content:**
1. Hook: "Tired of fighting Excel?" (3s)
2. Problem: Hidden filters, menu diving (5s)
3. Solution: DevSheets intro (3s)
4. Demo: Apply filter with expression (10s)
5. Demo: Show pipeline view (8s)
6. Demo: Pivot table (8s)
7. CTA: GitHub link (3s)

**Music:** Upbeat, tech-focused
**Captions:** Yes

---

## Launch Strategy

### Pre-Launch (1 week before)
- [ ] Post teaser on Twitter
- [ ] Share on Reddit r/javascript, r/webdev
- [ ] Email newsletter to existing contacts
- [ ] Prepare GitHub README with Product Hunt badge

### Launch Day
- [ ] Submit at 12:01 AM PT (best for global visibility)
- [ ] Post on Twitter with PH link
- [ ] Share on LinkedIn
- [ ] Post on Reddit
- [ ] Email subscribers
- [ ] Engage with every comment on PH

### Post-Launch (1 week after)
- [ ] Thank supporters
- [ ] Share results/metrics
- [ ] Write launch recap blog post
- [ ] Continue engaging with comments

---

## First Comment (Pinned)

```
Hi Product Hunt! 👋

I'm Utkarsh, the creator of DevSheets.

I built DevSheets because I was tired of fighting Excel when analyzing CSV exports, log files, and API responses. The hidden filter state, endless menu clicks, and lack of transparency made simple data exploration frustrating.

DevSheets is designed for developers who think in code:

• Filter with expressions: `stars > 50000 && language == "TypeScript"`
• See your data pipeline at a glance
• 50-step undo with full visibility
• Dark mode, command palette, and other dev-friendly features

It's built with Electron, React, TypeScript, and Tailwind CSS. Fully open source under MIT license.

I'd love your feedback! What features would make this more useful for your workflows?

GitHub: https://github.com/utkarshupendra/devsheets

Thanks for checking it out! 🙏
```

---

## Response Templates

### Positive Feedback
```
Thanks so much, [name]! Really glad you find it useful. If you have any feature requests or run into issues, feel free to open a GitHub issue. Would love to keep improving it! 🙏
```

### Feature Request
```
Great idea, [name]! I've added this to our roadmap. Would you mind opening a GitHub issue so we can track it and discuss implementation details? https://github.com/utkarshupendra/devsheets/issues
```

### Bug Report
```
Thanks for reporting this, [name]! Could you open a GitHub issue with the details? That'll help us track and fix it: https://github.com/utkarshupendra/devsheets/issues
```

### Comparison Question
```
Great question! DevSheets isn't trying to replace Excel for accounting/finance — it's designed for data exploration and analysis workflows that developers do daily. Excel is still king for financial modeling. DevSheets shines when you need transparency and programmability. Hope that helps!
```

---

## Categories

Primary: Developer Tools
Secondary: Productivity

---

## Topics/Tags

- spreadsheet
- data-analysis
- developer-tools
- electron
- react
- typescript
- open-source
- csv
- json
- productivity

---

## Pricing

Free / Open Source

---

## Website URL

https://github.com/utkarshupendra/devsheets

---

## Promo Code (N/A for free products)

N/A

---

## Hunter Information (If someone else hunts it)

If someone else is hunting DevSheets, provide them with:
- This entire document
- High-res screenshots
- Maker availability for Q&A
- Any specific messaging preferences
