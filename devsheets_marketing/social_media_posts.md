# DevSheets Social Media Content Pack

## Twitter/X Posts

### Post 1 - Launch Announcement
```
🚀 Introducing DevSheets — A spreadsheet built for developers, not accountants.

Tired of fighting Excel's hidden filters and menu diving?

✅ Expression-based filtering
✅ Visual data pipeline
✅ 50-step undo/redo
✅ Dark mode
✅ Command palette (⌘K)

Free & open source.

⭐ Star the repo: https://github.com/utkarshupendra/devsheets

#opensource #developers #spreadsheet #dataanalysis
```

### Post 2 - Feature Highlight (Filtering)
```
Excel: Click 7 times to filter by "stars > 50000"

DevSheets: Just type it.

stars > 50000 && language == "TypeScript"

15 filter operators. Visual chips. Always visible.

No more hunting through menus.

https://github.com/utkarshupendra/devsheets

#devtools #productivity
```

### Post 3 - The Problem
```
Excel's sort/filter features hide state.

"Wait, what was I filtering by?"

DevSheets makes every transformation visible:
→ Source → Filter (3 rules) → Sort (2 rules) → Pivot

See your data pipeline. Edit any step. Toggle on/off.

Built for developers who think in code.

https://github.com/utkarshupendra/devsheets
```

### Post 4 - Tech Stack
```
DevSheets tech stack:

⚡ Electron 28
⚛️ React 18 + TypeScript
🗃️ Zustand + Immer
🎨 Tailwind CSS
📦 Vite
📊 SheetJS for formats

Modern tools. Clean architecture. Fully open source.

Fork it. Extend it. Make it yours.

https://github.com/utkarshupendra/devsheets
```

### Post 5 - Use Case (Log Analysis)
```
Analyzing logs in Excel: 😤

Analyzing logs in DevSheets: 😎

level == "ERROR" && timestamp > "2024-03-01"
message contains "timeout"

Expression-based filters. Regex support. Visual pipeline.

Your logs deserve better.

https://github.com/utkarshupendra/devsheets
```

### Post 6 - Comparison Thread
```
Excel vs DevSheets for developers 🧵

1/ Filtering
Excel: Click Data → Filter → Column → Condition → Value
DevSheets: Type "stars > 50000"

2/ Sorting
Excel: Hidden in Sort dialog
DevSheets: Visual chips always visible

3/ Undo
Excel: 100 steps (what changed?)
DevSheets: 50 steps (see the pipeline)

4/ Dark mode
Excel: ❌
DevSheets: ✅

⭐ https://github.com/utkarshupendra/devsheets
```

### Post 7 - GIF/Video Teaser
```
POV: You just discovered you can filter spreadsheets with code expressions

[attach demo video]

DevSheets — The spreadsheet for developers

https://github.com/utkarshupendra/devsheets
```

### Post 8 - Community Call
```
Calling all developers! 📢

What features would you want in a developer-focused spreadsheet?

DevSheets is open source and we'd love your input:

→ Expression-based filters ✅
→ Data pipeline view ✅
→ Command palette ✅
→ Plugin system? 🚧
→ SQL interface? 🚧

Comment below or open an issue!

https://github.com/utkarshupendra/devsheets
```

### Post 9 - Quick Start
```
Get DevSheets running in 30 seconds:

```bash
git clone https://github.com/utkarshupendra/devsheets.git
cd devsheets
npm install
npm run electron:dev
```

That's it. No signup. No cloud. Just code.

#opensource #electron #react
```

### Post 10 - Star Request
```
If DevSheets looks useful, please give us a ⭐ on GitHub!

It helps us:
→ Get discovered by more developers
→ Prioritize new features
→ Keep building open source tools

Every star counts. Thank you! 🙏

https://github.com/utkarshupendra/devsheets
```

---

## LinkedIn Posts

### Post 1 - Professional Launch
```
I'm excited to share DevSheets — a spreadsheet application I built specifically for developers and data analysts.

While Excel and Google Sheets are great for general use, they weren't designed for the workflows developers face daily: analyzing logs, exploring API responses, processing CSV exports, and transforming data.

DevSheets addresses these pain points with:

✅ Expression-based filtering (type code, not click menus)
✅ Visual data pipeline (see every transformation)
✅ 50-step undo/redo with full visibility
✅ Dark mode and command palette
✅ Support for CSV, JSON, XLSX, and more

Built with Electron, React, TypeScript, and Tailwind CSS. Fully open source under MIT license.

If you work with data as a developer, I'd love your feedback!

GitHub: https://github.com/utkarshupendra/devsheets

#opensource #developers #dataanalysis #electron #reactjs #typescript
```

### Post 2 - Problem/Solution
```
The Hidden State Problem in Spreadsheets

Have you ever opened an Excel file and wondered:
"What filters are applied? What was I sorting by?"

The transformations are hidden in menus, making it hard to understand your data's journey.

DevSheets solves this with a visual pipeline view:

Source (1,247 rows) → Filter (3 rules) → Sort (2 rules) → Pivot

Every step is visible, editable, and toggleable. You can see exactly how your data is transformed.

This is especially valuable for:
→ Log analysis
→ Data exploration
→ Reproducible analysis
→ Team collaboration

Check it out: https://github.com/utkarshupendra/devsheets

#dataanalysis #developerexperience #opensource
```

### Post 3 - Technical Deep Dive
```
Technical Architecture of DevSheets

I recently built DevSheets, a developer-focused spreadsheet app. Here's a look at the architecture:

🔧 Stack:
• Electron 28 for the desktop shell
• React 18 + TypeScript for the UI
• Zustand + Immer for state management
• @dnd-kit for drag-and-drop
• Tailwind CSS for styling
• Vite for fast builds

🎯 Key Technical Decisions:

1. Virtualization: Using @tanstack/react-virtual to handle 100k+ rows at 60fps

2. Expression Parser: Custom filter engine that parses expressions like "stars > 50000 && language == 'TypeScript'"

3. Undo/Redo: Leveraging Immer's patch system for efficient history management

4. IPC Design: Clean separation between main and renderer processes

The project is open source — feel free to explore the code and contribute!

https://github.com/utkarshupendra/devsheets

#electron #reactjs #typescript #opensource #webdevelopment
```

---

## Reddit Posts

### r/javascript
```
[Showoff Saturday] DevSheets — A spreadsheet built for developers

I built DevSheets because I was tired of fighting Excel when analyzing data. It's a desktop app with:

• Expression-based filters (type "stars > 50000" instead of clicking menus)
• Visual data pipeline (see every transformation)
• 50-step undo/redo
• Dark mode + command palette
• Support for CSV, JSON, XLSX

Built with Electron, React, TypeScript, Zustand, and Tailwind.

GitHub: https://github.com/utkarshupendra/devsheets

Would love your feedback!
```

### r/webdev
```
I built a developer-friendly spreadsheet using React + Electron

Hey r/webdev!

I've been working on DevSheets — a spreadsheet app designed for developers who are tired of Excel's hidden state and menu diving.

Key features:
✅ Filter with code expressions
✅ Visual transformation pipeline
✅ 50-step undo with full visibility
✅ Dark mode, command palette
✅ CSV/JSON/XLSX support

Tech stack:
⚛️ React 18 + TypeScript
📦 Electron 28
🗃️ Zustand + Immer
🎨 Tailwind CSS
⚡ Vite

The code is fully open source. I'd appreciate any stars, feedback, or contributions!

Demo: [GitHub link]

What do you think?
```

### r/programming
```
DevSheets — A spreadsheet where you filter with code instead of menus

I built DevSheets because Excel's filter/sort features hide state and are hard to compose. It's designed for developers who:

• Analyze logs and CSV exports
• Explore API response data
• Want to see their data transformation pipeline
• Prefer typing expressions over clicking menus

Example filter:
```
stars > 50000 && language == "TypeScript" && license in ("MIT", "Apache")
```

Features:
• 15 filter operators (includes regex, list membership, etc.)
• Visual sort/filter chips
• Data pipeline view
• 50-step undo/redo
• Dark mode
• Command palette

It's open source (MIT) and built with Electron + React + TypeScript.

GitHub: https://github.com/utkarshupendra/devsheets

Would love to hear what the community thinks!
```

### r/dataengineering
```
DevSheets — A spreadsheet for data exploration with visible transformations

Hey data engineers!

I built DevSheets as a lightweight tool for quick data exploration. It's not a replacement for your data stack, but it's great for:

• Quick CSV/JSON analysis
• Exploring API responses
• Log file analysis
• Ad-hoc data transformations

What makes it different:
→ Expression-based filtering (not GUI menus)
→ Visual pipeline showing all transformations
→ 50-step undo with visibility into what changed
→ Export to multiple formats

Example workflow:
1. Open a CSV export from your warehouse
2. Filter: `created_at > "2024-01-01" && status == "active"`
3. Pivot by category
4. Export cleaned data

It's open source and free. Check it out:

https://github.com/utkarshupendra/devsheets

Feedback welcome!
```

---

## Hacker News Post

```
Show HN: DevSheets – A spreadsheet built for developers, not accountants

I built DevSheets because I was frustrated with Excel's hidden filter state and menu-driven workflows when analyzing data.

DevSheets is a desktop spreadsheet app designed for developers:

• Filter with code expressions: stars > 50000 && language == "TypeScript"
• Visual data pipeline: see every transformation step
• 50-step undo/redo with full visibility
• Dark mode, command palette (⌘K)
• Supports CSV, TSV, JSON, XLSX

Tech stack: Electron, React, TypeScript, Zustand, Tailwind CSS

It's open source (MIT) and I'd love your feedback!

GitHub: https://github.com/utkarshupendra/devsheets
```

---

## Instagram/Facebook Posts

### Post 1 - Visual
```
[Image: Screenshot of DevSheets with dark mode, showing filter chips and pipeline]

DevSheets 🚀

The spreadsheet for developers

✅ Filter with code
✅ See your data pipeline
✅ Dark mode
✅ Free & open source

Link in bio!
```

### Post 2 - Before/After
```
[Split image: Excel menu diving vs DevSheets expression]

BEFORE: 7 clicks to filter in Excel 😤

AFTER: Just type it in DevSheets 😎

stars > 50000 && language == "TypeScript"

Get it free → link in bio
```

---

## Newsletter Blurb

```
DevSheets: A Developer-Friendly Spreadsheet

If you regularly work with CSV files, log data, or API responses, you know the pain of using Excel or Google Sheets. The filters hide state, the menus are endless, and you can't see what transformations have been applied.

DevSheets is a new open-source spreadsheet built specifically for developers. Key features include:

• Expression-based filtering — type "stars > 50000 && language == 'TypeScript'" instead of clicking through menus
• Visual data pipeline — see every transformation step and edit or toggle any of them
• 50-step undo/redo with full visibility
• Dark mode, command palette, and other developer-friendly features
• Support for CSV, TSV, JSON, and XLSX formats

Built with Electron, React, and TypeScript. Free and open source.

Check it out: https://github.com/utkarshupendra/devsheets
```

---

## Tag Suggestions

**Primary hashtags:**
#opensource #developers #spreadsheet #dataanalysis #electron #reactjs #typescript #productivity #devtools

**Secondary hashtags:**
#webdev #programming #coding #javascript #frontend #github #dataengineering #csv #json

**Platform-specific:**
- Twitter/X: Use 2-3 hashtags max
- LinkedIn: Use 3-5 hashtags
- Instagram: Use 10-15 hashtags
- Reddit: No hashtags needed
