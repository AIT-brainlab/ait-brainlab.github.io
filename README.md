# About this repository

This repository is used for hosting the GitHub page of the AIT Brainlab website.
This branch is version 2 of the site using `HUGO` https://gohugo.io

# For development

This project is built on `Docker`.

All you need to do is cloned this repository and then build an image using `docker compose`

```shell
docker compose up --build -d
```

To start a dev server, run

```shell
docker compose exec dev hugo server --bind 0.0.0.0 --poll 700ms --noHTTPCache
```

# To deploy

Once you are ready to publish your content, stop the dev server then build the site

```shell
docker compose exec dev hugo
```

The new site will be rendered in `/docs` which will also be used to render the GitHub page.

Then, all you need is to `commit` and `push` to GitHub.