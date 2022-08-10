# For visitor

This site is accessible via this link
https://ait-brainlab.github.io/


# For Developer

This web is built using `jekyll` framework and `minimal-mistakes` theme.

https://jekyllrb.com/docs/installation/

https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/

## To Dev.

1. Clone the project
2. Compose up

The docker is built to map a port 8000 of your host to the 8000 of the container. So make sure your port is available. (Or if you know your way around, feel free to do so).

The container will exec `bundle exec jekyll server` right away. So you can start your development.

## To Deploy

1. Shell into the container
2. run `bundle exec jekyll build`
3. commit and push

Well, I would to skip the `shell` step and just run `docker run` command, but I am too lazy to learn how to do that.

## Inspiration from

https://www.unist-bci.com/