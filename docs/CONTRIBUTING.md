# Contributing to BTC NYC Classes

Thanks for helping grow the Bitcoin Network NYC curriculum! This guide outlines how to add or improve lessons in the `docs/` directory that powers our MkDocs site.

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

### Required lesson front matter

Every `lesson.md` needs a YAML block at the very top so the site can surface metadata:

```yaml
---
title: Lesson Title
last_updated: YYYY-MM-DD
difficulty: beginner | intermediate | advanced
duration: 90m
---
```

Use the session date as `last_updated` when known; otherwise, use today’s date.

### Markdown structure

A consistent format keeps lessons easy to teach. We recommend:

1. `# Heading` — the lesson name (no dates)
2. Quick metadata (duration, level, prerequisites)
3. Sections for Objectives → Steps → Homework
4. Optional callouts using MkDocs Material admonitions (`!!! note`, `!!! tip`, etc.)

## Update the navigation

Add your new lesson to `mkdocs.yml` so it appears in the sidebar:

```yaml
nav:
  - Topics:
      - Bitcoin Node:
          - Getting Started: topics/bitcoin-node/00-getting-started/lesson.md
```

Group related lessons under the same topic heading and keep their numeric prefixes in ascending order.

## Reviews & pull requests

1. Run `mkdocs serve` locally to preview the site.
2. Fix any warnings from `mkdocs build --strict`.
3. Commit your changes on a feature branch and open a pull request.

Thanks again for contributing! Reach out on Telegram or open an issue if you have questions.
