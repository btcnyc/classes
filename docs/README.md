# 📚 BTC NYC Class Library

Welcome to the **Bitcoin Network NYC Class Library** —
a collection of workshops, lessons, and demos built for the NYC Bitcoin community.

Each folder inside `topics/` represents a **class series or theme**,
with ordered subfolders (00-, 01-, …) that control lesson sequencing.

---

## 🧭 Structure

```plaintext
topics/
  bitcoin-node/
    00-getting-started/
      lesson.md
      slides.pdf
  lightning/
    00-intro-to-lightning/
      lesson.md
guides/
  hardware-wallets.md
  event-checklist.md
```

### 🧩 Naming Convention

* **Folder name** → topic slug (e.g., `bitcoin-node`, `lightning`)
* **Subfolder name** → zero-padded order index and short descriptor (`NN-title`)
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

1. Duplicate any existing session folder (e.g. `bitcoin-node/00-getting-started/`)
2. Rename it with the next numeric prefix + short title (`01-using-your-node/`, etc.).
3. Edit the `lesson.md` with your content.
4. Update `mkdocs.yml` to add it under `nav:` (so it shows up on the site).

---

## 🔗 Related Resources

<!-- * [Guides](../guides/) — reusable resources (wallet setup, event checklist) -->
<!-- * [Shared Assets](../shared-assets/) — images, logos, and diagrams -->

---

<p align="center">
  <i>Learn. Build. Connect. Empower.</i><br/>
  <small>Bitcoin Network NYC • Community Education</small>
</p>
