# AIT Brain Lab

Hugo source for [ait-brainlab.github.io](https://ait-brainlab.github.io/).
The active theme is `themes/chaklam`. The deployment workflow uses Hugo Extended **0.141.0**.

## Run locally

With Hugo installed:

```sh
hugo server --disableFastRender --noHTTPCache
```

Open http://localhost:1313/. `dev.sh` provides the container-friendly equivalent.

Alternatively, use the existing Docker setup:

```sh
docker compose up --build -d
docker compose exec dev hugo server --bind 0.0.0.0 --poll 700ms --disableFastRender --noHTTPCache
```

## Where to edit

- `content/`: student profiles and page content. The student resource pages use Markdown.
- `themes/chaklam/layouts/`: home page, Research Areas, Research Guide presentation, members, publications, and shared navigation.
- `themes/chaklam/static/css/ait-lab.css`: shared AIT styling.
- `static/`: lab images, demos, and downloadable research notes.
- `config.toml`: site configuration and menus.

The eight research/student pages share `layouts/partials/research-sidebar.html` inside the active theme.
The Research Guide preserves exercise notes in the visitor's browser and supports exporting them.

## Build and deployment

```sh
hugo --minify
```

Generated files go to `docs/`, which is ignored. Pushing to `main` runs the GitHub Pages workflow;
building locally does not publish the site. Keep third-party license files with their assets.

## Keep the repository lean

Keep `themes/chaklam`: its HTML templates render the Markdown content and the
custom Research Areas and Research Guide pages. Generated `docs/` and Hugo caches
are ignored; do not commit them. The unused Ananke theme has been removed.

The bundled Bootstrap files contain only the CSS and JavaScript used by the site,
with their source maps. Preserve vendor license notices when updating these assets.
