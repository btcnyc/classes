# ✏️ Markdown Basics for BTC NYC Instructors

Welcome to the **Instructor Onboarding Lesson**!
This page teaches you how to create, format, and structure lessons for BTC NYC.

---

## 🧩 Lesson Metadata

Add a simple metadata block near the top of each lesson:

> **Lesson Info**
> **Difficulty:** Beginner
> **Duration:** 30m
> **Instructor:** BTC NYC Team
> **Tags:** markdown, teaching, onboarding
> **Last updated:** 2025-10-24

You can copy/paste and tweak the values for any lesson. Keep it short and human-readable.

---

## 🧠 Markdown Building Blocks

Markdown is just **plain text with meaning** — you don’t need any code skills.

### 🔹 Headings

Use `#` for section headers:

```markdown
# Big Header
## Medium Header
### Small Header
```

### 🔹 Lists

```markdown
- Bullet points
  - Sub-points
1. Numbered list
2. Another point
```

### 🔹 Bold, Italic, and Links

```markdown
**Bold text**  
*Italic text*  
[Click me!](https://bitcoin.org)
```

---

## ⚙️ Using Admonitions (MkDocs Material)

Admonitions are stylized info boxes that make content pop.
They’re great for notes, warnings, or callouts.

### Example Types

!!! note "Note"
This is a note! It’s good for general tips.

!!! info "Did you know?"
You can have *nested Markdown* inside admonitions!

!!! tip "Pro Tip"
You can also use emojis 😎 and inline code like `bitcoin-cli`.

!!! warning "Common mistake"
Forgetting to leave a blank line before or after an admonition can break formatting.

!!! example "Full example"
`markdown
    !!! tip "Quick tip"
        Always add a short "Lesson Info" block near the top.
    `

### 🧩 Multi-line Admonitions

You can include **multiple paragraphs, lists, and code blocks** inside an admonition — just indent them properly by four spaces:

!!! info "Multiline Example"
    You can write long explanations that span multiple lines.
    MkDocs Material handles this gracefully as long as you indent consistently (4 spaces).

    - Bullet points work fine inside admonitions
    - You can also add **bold text**, _italics_, or `inline code`

    End the admonition after the last indented block.

---

## 🧱 Recommended Lesson Structure

```markdown
# Lesson Title

> **Lesson Info**  
> **Difficulty:** Beginner  
> **Duration:** 90m  
> **Instructor:** Your Name  
> **Tags:** node  
> **Last updated:** 2025-01-15

## 🎯 Objectives
- What students will learn
- Why it matters

## 🪜 Steps
1. Step-by-step actions
2. Show example commands or screenshots
3. Keep paragraphs short!

## 🧩 Key Terms
| Term | Meaning |
|------|----------|
| Node | A computer that validates Bitcoin transactions |
| Channel | A payment tunnel in the Lightning Network |

## ✅ Homework
- Encourage learners to try something hands-on
- Suggest next topics or related lessons
```

---

## 🧭 How to Preview Your Lesson

Run this command to test your lesson locally:

```bash
mkdocs serve
```

Then open **[http://127.0.0.1:8000](http://127.0.0.1:8000)** in your browser — it updates automatically when you save!

!!! info "Optional Tools"
If you’re writing from a tablet or phone, you can edit Markdown in the GitHub web editor.
Just click **Edit this file**, make your changes, and hit “Preview”.

---

## 💬 Practice Challenge

Add a new section to this file right now!
Try one of each element:

* a heading
* a bulleted list
* an admonition
* a link

Then open a Pull Request with the title:
**`[Practice] Markdown Basics Exercise`**

---

<p align="center">
  <i>Welcome to the instructor crew 👏</i><br/>
  <small>BTC NYC • Learn. Build. Connect. Empower.</small>
</p>
