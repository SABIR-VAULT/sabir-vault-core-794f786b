<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep `/memory` and `/logistics` as bilingual solution routes sharing the landing page's semantic design tokens and contact pilot flow, so solution pages remain visually and behaviorally consistent.
- Insights articles live under `src/routes/insights/` with bilingual bodies as lightweight markdown in `src/lib/insights-*.ts`, rendered by `ArticleBody` and wrapped in the shared `SiteHeader`/`SiteFooter`, so new articles need no new layout code.
