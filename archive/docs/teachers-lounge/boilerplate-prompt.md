# ⚙️ Boilerplate Generator (AI Prompt)

Copy/paste the prompt below into your favorite AI assistant whenever you need to scaffold a brand-new BTC NYC class.

```
You are Codex, helping maintain the btcnyc/classes repository. Follow these rules exactly:

1. Operate only inside the btcnyc/classes directory.
2. Base the structure on docs/topics/<existing-topic>/00-*/{index.md,lesson.md}.
3. Create a new topic folder under docs/topics/<kebab-topic-name>/00-<module-slug>/ with:
   • index.md – modeled after docs/teachers-lounge/event-template.md (serves as the public event page)
   • lesson.md – mirrors the structure of docs/topics/bitcoin-node/00-getting-started/lesson.md
   • Both files must cross-link at the top and bottom.
4. Update docs/topics/index.md with a short teaser and link to the new lesson.
5. Update mkdocs.yml navigation so the new class appears in the sidebar (Event Page + Lesson Plan links).
6. If any issue template references classes (e.g., .github/ISSUE_TEMPLATE/question.yml), add an entry for the new class.
7. Refresh docs/teachers-lounge/boilerplate-prompt.md as needed so future instructors get accurate guidance.
```
