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
topics/
  bitcoin-node/
    2025-01-15-getting-started/
      lesson.md
      slides.pdf
  lightning/
    2025-02-12-intro-to-lightning/
      lesson.md
guides/
  hardware-wallets.md
  event-checklist.md
shared-assets/
  logos/
  diagrams/
```

* **`topics/`** — Each folder = a topic. Inside are dated subfolders for each session.
* **`guides/`** — Reusable docs (wallet setup, event prep, etc).
* **`shared-assets/`** — Images and diagrams used across multiple classes.

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
