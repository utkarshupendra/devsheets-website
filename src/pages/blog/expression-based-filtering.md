---
layout: ../../layouts/BlogLayout.astro
title: "Expression-Based Filtering: Type Code, Not Click Menus"
description: "Learn how to filter data with code expressions instead of clicking through endless menus."
pubDate: "2024-03-12"
readTime: "4 min read"
---

# Expression-Based Filtering: Type Code, Not Click Menus

Stop clicking through Excel's filter menus. Start typing what you mean.

## The Problem

In Excel or Google Sheets, filtering data requires:
1. Click the Data menu
2. Click Filter
3. Click the column dropdown
4. Select the condition type
5. Enter the value
6. Click OK

For complex filters with multiple conditions, you repeat this process multiple times. And when you come back to the file later? Good luck remembering what filters you applied.

## The DevSheets Way

In DevSheets, you just type:

```
stars > 50000 && language == "TypeScript"
```

That's it. One line. Visible. Editable. Clear.

## All 15 Filter Operators

DevSheets supports a rich set of operators:

### Comparison Operators
- `==` — Equals
- `!=` — Not equals
- `>` — Greater than
- `<` — Less than
- `>=` — Greater than or equal
- `<=` — Less than or equal

### String Operators
- `contains` — Substring match
- `starts_with` — Prefix match
- `ends_with` — Suffix match
- `~` — Regex match

### List Operators
- `in` — Value in list
- `not in` — Value not in list

### Empty Checks
- `∅` — Is empty
- `!∅` — Is not empty

## Real-World Examples

### Filter GitHub Repos
```
stars > 50000 && language == "TypeScript" && license in ("MIT", "Apache")
```

### Analyze Logs
```
level == "ERROR" && timestamp > "2024-03-01" && message contains "timeout"
```

### Find Active Users
```
status == "active" && last_login > "2024-01-01" && email !∅
```

### Regex Matching
```
name ~ "^react-" && description contains "hooks"
```

## Visual Filter Chips

Every expression becomes a visual chip:

- **Toggle on/off** — Disable temporarily without deleting
- **Edit inline** — Click to modify
- **Remove** — One-click deletion
- **Always visible** — No hidden state

## Combining with Other Features

Filters work seamlessly with:
- **Sorting** — Multi-column sorts with visual chips
- **Pivots** — Filter before or after pivoting
- **Pipeline** — See filters as steps in your data flow
- **Undo/Redo** — Full history of filter changes

## Why This Matters

As developers, we think in code. We want to:
- **See** what's happening
- **Compose** operations
- **Reproduce** analysis
- **Share** logic

Expression-based filtering gives you all of this.

## Try It Yourself

Download DevSheets and experience the difference:

**[https://github.com/utkarshupendra/devsheets](https://github.com/utkarshupendra/devsheets)**

---

*No more menu diving. Just type what you mean.*
