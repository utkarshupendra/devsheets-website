---
layout: ../../layouts/BlogLayout.astro
title: "The Spreadsheet Built for Developers, Not Accountants"
description: "Why we built DevSheets and how it solves the hidden state problem in traditional spreadsheets."
pubDate: "2024-03-12"
readTime: "5 min read"
---

# The Spreadsheet Built for Developers, Not Accountants

*A developer-friendly alternative to Excel — where data transformations are visible, programmable, and inspectable.*

## The Problem with Excel for Developers

We've all been there. You need to analyze a CSV export from your database, filter some logs, or pivot API response data. You open Excel or Google Sheets, and suddenly you're fighting against:

- **Hidden state** — Where did that filter go? What was I sorting by?
- **Menu diving** — Click, click, click to accomplish what should be one line of code
- **No transparency** — Can't see the pipeline of transformations applied to your data
- **Limited programmability** — Complex logic requires VBA macros or add-ons

As developers, we think in code. We want to see what's happening. We want to compose operations. We want **transparency**.

## Introducing DevSheets

**DevSheets** is a desktop spreadsheet application built specifically for developers. It's not trying to replace Excel for your accounting team — it's designed for the workflows we actually care about: data analysis, log parsing, API data exploration, and quick transformations.

## What Makes DevSheets Different?

### 1. Expression-Based Filters

Instead of clicking through filter menus, just type what you want:

```
stars > 50000 && language == "TypeScript"
```

Or combine multiple conditions:

```
name contains "react" && status == "active" && created_at > "2024-01-01"
```

With **15 filter operators** including:
- `==`, `!=`, `>`, `<`, `>=`, `<=` — Numeric and equality comparisons
- `contains`, `starts_with`, `ends_with` — String matching
- `~` — Regex matching
- `in`, `not in` — List membership
- `∅` / `!∅` — Empty/not empty checks

### 2. Visual, Editable Filter Chips

Every filter becomes a visual chip that you can:
- **Toggle on/off** — Temporarily disable without losing the filter
- **Edit inline** — Click to change values or operators
- **Remove** — Clean up with one click

No more hunting through menus to see what's filtered.

### 3. Transparent Sort Indicators

See exactly which columns are sorted and in what order:

```
[↑ stars] [↓ created_at]
```

Multi-column sorts show priority numerically (1, 2, 3...). Click any chip to toggle direction or remove it.

### 4. Data Pipeline View

This is where DevSheets shines. Open the Pipeline panel to see your transformations as a composable flow:

```
Source (1,247 rows) → Filter (3 rules) → Sort (2 rules) → Pivot
                    ↓ 892 rows passed   ↓ 892 rows
```

Each step shows:
- How many rows enter
- How many pass through
- What the transformation does

Toggle or remove steps directly from the pipeline. It's like `git log` for your data.

### 5. Developer-First Features

- **Multi-sheet tabs** — Open multiple files, rename, add, remove
- **Excel-like selection** — Click headers for columns/rows, Shift+arrow to extend
- **Selection stats** — Sum, avg, min, max, count for any numeric selection
- **Copy/paste to Excel** — Seamless bidirectional clipboard
- **50-step undo/redo** — Per-sheet history
- **Command palette (⌘K)** — Access any action quickly
- **Dark & light themes** — Your preference, persisted

## Tech Stack

Built with modern tools developers love:

- **Desktop**: Electron 28
- **UI**: React 18 + TypeScript
- **State**: Zustand + Immer
- **Drag-and-drop**: @dnd-kit
- **Styling**: Tailwind CSS
- **Build**: Vite
- **Formats**: CSV, TSV, JSON, XLSX/XLS (via SheetJS)

## Getting Started

```bash
# Clone the repo
git clone https://github.com/utkarshupendra/devsheets.git
cd devsheets

# Install dependencies
npm install

# Run in development
npm run dev

# Run as Electron app
npm run electron:dev

# Package as native app
npm run electron:build
```

## Why Open Source?

DevSheets is MIT licensed because:
1. **Transparency** — See how your data is processed
2. **Extensibility** — Fork and add your own features
3. **Community** — Contributions welcome!

## Star the Repo!

If DevSheets looks useful, please give us a ⭐ on GitHub:

**[https://github.com/utkarshupendra/devsheets](https://github.com/utkarshupendra/devsheets)**

Your support helps us grow and prioritize new features!

---

*Built with ❤️ for developers who are tired of fighting Excel.*
