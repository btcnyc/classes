# 📚 BTC NYC Class Library

Welcome to the **Bitcoin Network NYC Class Library** —
a collection of workshops, lessons, and demos built for the NYC Bitcoin community.

Each folder inside `topics/` represents a **class series or theme**,
with dated subfolders for specific sessions.

---

## 🧭 Structure

```plaintext
topics/
  bitcoin-node/
    2025-01-15-getting-started/
      lesson.md
      slides.pdf
  lightning/
    2025-02-12-intro-to-lightning/
      lesson.md
```

### 🧩 Naming Convention

* **Folder name** → topic slug (e.g., `bitcoin-node`, `lightning`)
* **Subfolder name** → date and short descriptor (`YYYY-MM-DD-title`)
* **Inside each session**:

  * `lesson.md` — step-by-step guide
  * `slides.pdf` — optional slide deck
  * any supporting assets (images, configs, etc.)

---

## 🧑‍🏫 Instructor Notes

Each `lesson.md` is written for both **learners** and **instructors**.
To adapt or reuse:

* Update the date and any logistics details at the top.
* Keep the original file for version history.
* Use consistent Markdown structure (Objectives → Steps → Homework).

---

## 💡 Create a New Class

1. Duplicate any existing session folder (e.g. `bitcoin-node/2025-01-15-getting-started/`)
2. Rename it with your new date + short title.
3. Edit the `lesson.md` with your content.
4. Update `mkdocs.yml` to add it under `nav:` (so it shows up on the site).

---

## 🔗 Related Resources

* [Guides](../guides/) — reusable resources (wallet setup, event checklist)
* [Shared Assets](../shared-assets/) — images, logos, and diagrams

---

<p align="center">
  <i>Learn. Build. Connect. Empower.</i><br/>
  <small>Bitcoin Network NYC • Community Education</small>
</p>
