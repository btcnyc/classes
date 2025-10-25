# 🎓 BTC NYC Classes

**Bitcoin Network NYC — Community Education Repository**

This repo hosts all lesson materials, guides, and resources from our Bitcoin workshops in New York City.
Everything here is open-source and community-maintained — so anyone can learn, teach, or improve our classes.

---

## 🧬 About

We run hands-on workshops covering topics like:

* Running a Bitcoin node (Umbrel, Start9, RaspiBlitz)
* Lightning basics and channel management
* Self-custody and multisig
* Privacy tools and best practices
* Mining, energy, and sovereignty

Each class includes slides, step-by-step guides, and instructor notes — all in Markdown for easy editing.

---

## 📂 Repository Structure

```plaintext
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── assets/
│   └── btcnyc_logo.jpeg
├── docs/
│   ├── README.md
│   ├── contributing/
│   │   ├── index.md
│   │   └── 00-markdown-basics/
│   │       └── lesson.md
│   ├── resources/
│   │   └── index.md
│   ├── shared-assets/
│   └── topics/
│       ├── README.md
│       ├── bitcoin-node/
│       │   └── 00-getting-started/
│       │       ├── lesson.md
│       │       └── event.md
│       └── lightning/
│           └── 00-intro-to-lightning/
│               ├── lesson.md
│               └── event.md
├── mkdocs.yml
├── LICENSE
├── README.md
└── site/
```

* **`docs/topics/`** — Lesson content grouped by topic, each with numbered subfolders for individual classes.

  * Each class folder contains:

    * **`lesson.md`** — The full instructional content and teaching flow.
    * **`event.md`** — A short Meetup or event description (title, date, summary, prerequisites) so instructors can easily reuse or rerun the session.
* **`docs/contributing/`** — Guides and workshop material for contributors.
* **`docs/resources/`** — Curated references and follow-up material.
* **`docs/shared-assets/`** — Images and other media reused across multiple lessons.
* **`assets/`** — Branding assets referenced from the README and docs site.
* **`.github/`** — Issue templates and automation workflows.
* **`site/`** — MkDocs build output served on GitHub Pages (regenerate with `mkdocs build`).


---

## 🧑‍💻 Developer Setup

Developers can run the documentation site locally using [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

### 🧱 Requirements

* Python 3.8+
* pip
* (optional) a virtual environment such as `venv`

### 🪜 Steps

```bash
# 1. Clone the repo
git clone https://github.com/btcnyc/classes.git
cd classes

# 2. Install dependencies
pip install mkdocs mkdocs-material

# 3. Run the local dev server
mkdocs serve
# open http://127.0.0.1:8000

# 4. Build the static site (optional)
mkdocs build
```

> MkDocs automatically reloads on file save — no restarts needed.

### ⚙️ Deployment

The site is deployed automatically to GitHub Pages on every push to `main` using the workflow in `.github/workflows/pages.yml`.

Manual deploy:

```bash
gh workflow run build-and-deploy-pages
```

---

## 🧑‍🎓 How to Contribute

Anyone can help!
You don’t need to be a developer — just some Markdown familiarity or willingness to learn.

### ✏️ Edit content directly

1. Click the ✏️ **“Edit this file”** button on any Markdown file.
2. Make your changes.
3. Click **Propose changes** → **Create pull request**.
   We’ll review and merge it!

### 💡 Suggest a new class

* Open an issue → choose **“Propose a new class”**.
* Include a brief outline, learning goals, and logistics.

### 🪄 Fix a typo or broken link

* Open an issue → choose **“Quick fix”**.
* Or just open a PR with the correction.

👉 See the full [Contributing Guide](docs/CONTRIBUTING.md) for creating new lessons and editing content.

---

## 🌐 Website

We publish these materials as a clean docs site using [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).
Browse the live site for all lessons at:

👉 **[https://btcnyc.github.io/classes/](https://btcnyc.github.io/classes/)**

---

## 💬 Community & Support

* [Meetup](https://www.meetup.com/bitcoin-network-nyc/)
* [Luma](https://luma.com/btcnyc)
* [Telegram](https://t.me/+M79B-75J2YU3OTRh)
* [X (Twitter)](https://x.com/BTCNetworkNYC)
* [Nostr](https://njump.me/npub1xyu3s3zt3v44l3rj5gn90xk33n387sgtjepcvxnqvd5rt58fpzzsx0055n)
* [LinkedIn](https://www.linkedin.com/company/the-bitcoin-network-nyc/)

---

## 💸 Donate

Help us keep the workshops free and open to everyone:

* [BTC Pay Server](https://bitcoin-network-nyc.com/)
* [Venmo (@harrisonfriedes)](https://account.venmo.com/u/harrisonfriedes)

---

## ⚡ License

All materials are open-source under the [MIT License](LICENSE), unless stated otherwise.
You’re free to fork, remix, and share — just credit **Bitcoin Network NYC**.

---

<p align="center">
  <img src="assets/btcnyc_logo.jpeg" alt="BTC NYC Logo" width="100" style="border-radius:50%;"/>
</p>
<p align="center">
  <i>Learn. Build. Connect. Empower.</i>
</p>
