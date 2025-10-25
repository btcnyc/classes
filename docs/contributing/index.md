# Contributing to BTC NYC Classes

If you’re looking to teach, see the [Teachers Lounge](../teachers-lounge/index.md).

Thanks for helping grow the Bitcoin Network NYC curriculum! This guide outlines how to add or improve lessons in the `docs/` directory that powers our MkDocs site.

---

## Create a New Class

Create a new folder under your topic using a zero-padded order prefix (00-, 01-, 02-) to control lesson order within a topic:

```plaintext
docs/topics/<topic>/<NN-title>/
  lesson.md
  slides.pdf (optional)
```

Example:

```plaintext
docs/topics/bitcoin-node/00-getting-started/lesson.md
```

### Lesson structure

Each `lesson.md` should start with a simple metadata block — no YAML required:

> **Lesson Info**
> **Difficulty:** Beginner
> **Duration:** 90m
> **Instructor:** Your Name
> **Tags:** node, lightning
> **Last updated:** YYYY-MM-DD

Then follow a consistent Markdown format:

1. `# Heading` — the lesson name (no dates)
2. Quick metadata (duration, level, prerequisites)
3. Sections for Objectives → Steps → Homework
4. Optional callouts using MkDocs Material admonitions (`!!! note`, `!!! tip`, etc.)

For a detailed example and Markdown tutorial, see:
➡️ [Markdown Basics for BTC NYC Instructors](00-markdown-basics/lesson.md)

---

## Update the navigation

Add your new lesson to `mkdocs.yml` so it appears in the sidebar:

```yaml
nav:
  - Topics:
      - Bitcoin Node:
          - Getting Started: topics/bitcoin-node/00-getting-started/lesson.md
```

Group related lessons under the same topic heading and keep their numeric prefixes in ascending order.

---

## Reviews & pull requests

1. Run `mkdocs serve` locally to preview the site.
2. Fix any warnings from `mkdocs build --strict`.
3. Commit your changes on a feature branch and open a pull request.

We’ll review and merge PRs after ensuring content quality and site consistency.

---

## Need help?

* Join the [Telegram group](https://t.me/+M79B-75J2YU3OTRh) for contributor discussions.
* Or [open an issue](https://github.com/btcnyc/classes/issues) directly in the repo if something’s unclear.

<p align="center">
  <i>Thanks for helping build the Bitcoin education movement in NYC 🗽⚡</i>
</p>
