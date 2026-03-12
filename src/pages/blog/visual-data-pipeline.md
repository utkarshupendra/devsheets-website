---
layout: ../../layouts/BlogLayout.astro
title: "Visual Data Pipeline: See Every Transformation"
description: "Understand your data transformations with a transparent, editable pipeline view."
pubDate: "2024-03-12"
readTime: "6 min read"
---

# Visual Data Pipeline: See Every Transformation

The hidden state problem in spreadsheets, solved.

## The Hidden State Problem

Open any Excel file that's been worked on by someone else (or yourself, 3 months ago):

- What filters are applied?
- Which columns are sorted?
- Has the data been pivoted?
- What transformations were done?

You have no idea. The state is hidden in menus and dialogs.

## The Pipeline View

DevSheets solves this with a visual pipeline that shows every transformation:

```
Source (1,247 rows)
    ↓
Filter (3 rules)
    ↓ 892 rows passed
Sort (2 rules)
    ↓ 892 rows
Pivot
    ↓ 45 groups
```

Every step is:
- **Visible** — See the entire flow
- **Editable** — Click to modify any step
- **Toggleable** — Turn steps on/off
- **Removable** — Delete steps you don't need

## How It Works

### 1. Source

The starting point. Shows:
- File name
- Total row count
- Column count

### 2. Filter Steps

Each filter shows:
- Number of rules
- How many rows passed
- The actual expressions

Click to edit, toggle, or remove.

### 3. Sort Steps

Multi-column sorts display:
- Columns being sorted
- Sort direction (↑ or ↓)
- Sort priority (1, 2, 3...)

### 4. Pivot Steps

Pivot transformations show:
- Row fields
- Value fields with aggregations
- Number of groups created

## Benefits

### 1. Transparency

See exactly what's happening to your data. No surprises.

### 2. Reproducibility

Share the pipeline with teammates. They can see and reproduce your analysis.

### 3. Debugging

When results look wrong, check the pipeline. See which step is causing the issue.

### 4. Iteration

Try different transformations. Toggle steps on/off to compare results.

### 5. Learning

Understand data transformations visually. Great for teaching and documentation.

## Real-World Example

Analyzing GitHub repository data:

```
Source (30 repos)
    ↓
Filter: language == "TypeScript"
    ↓ 12 repos
Filter: stars > 50000
    ↓ 8 repos
Sort: ↓ stars
    ↓ 8 repos (sorted)
Pivot: Row=license, Value=COUNT
    ↓ 3 groups
```

At a glance, you can see:
- Started with 30 repos
- Filtered to TypeScript repos (12 left)
- Further filtered to 50k+ stars (8 left)
- Sorted by stars descending
- Grouped by license (3 unique licenses)

## Comparison with Excel

| Feature | Excel | DevSheets |
|---------|-------|-----------|
| See filters | Hidden in menu | Visible in pipeline |
| See sorts | Hidden in dialog | Visual chips + pipeline |
| See pivots | Separate view | Step in pipeline |
| Edit steps | Re-open dialogs | Click in pipeline |
| Toggle steps | Delete and recreate | One-click toggle |
| Share analysis | Send file, hope they figure it out | Pipeline is self-documenting |

## It's Like Git Log for Data

Just as `git log` shows your commit history, the pipeline shows your data transformation history.

You can:
- See what was done
- When it was done
- Undo or modify steps
- Branch and experiment

## Try It

Experience transparent data transformations:

**[https://github.com/utkarshupendra/devsheets](https://github.com/utkarshupendra/devsheets)**

---

*No more hidden state. See your data's journey.*
