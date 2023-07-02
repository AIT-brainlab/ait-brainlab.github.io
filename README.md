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

With a new GitHub Action, the compile process is now done in GitHub.
It no longer requires the user to manually build the site themselves.
With this new action, all you have to do is commit a new change to the `main` branch.


However, you can still run the compiling command for debugging purposes.

```shell
docker compose exec dev hugo
```

The compiled `/docs` folder is ignored anyway.