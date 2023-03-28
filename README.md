# About this repository

This repository is used for hosting the GitHub page of the AIT Brainlab website.
This branch is version 1 of the site using `VuePress v1.9.9` instead of `jekyll`. 

VuePress page: https://vuepress.vuejs.org/

# For development

This project is built on `Docker`.

All you need to do is cloned this repository and then build an image using `docker-compose`

```shell
docker-compose up --build -d
```

To start a dev server, run

```shell
docker-compose exec vuepress_node bash
```

and


```shell
yarn dev
```

# To deploy

Once you are ready to publish your content, stop the dev server then build the site

```shell
yarn build
```

The new site will be rendered in `/docs` which will also be used to render the GitHub page.

Then, all you need is to `commit` and `push` to GitHub.