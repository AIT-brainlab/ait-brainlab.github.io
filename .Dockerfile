# A normal typical ubuntu container
FROM ubuntu:20.04

# https://vsupalov.com/docker-arg-env-variable-guide/
# https://bobcares.com/blog/debian_frontendnoninteractive-docker/
ARG DEBIAN_FRONTEND=noninteractive
# Timezone
ENV TZ="Asia/Bangkok"

# like CD command in terminal. it will create directory if path is not existed
RUN apt update && apt upgrade -y
# Set timezone
RUN apt install -y tzdata
RUN ln -snf /usr/share/zoneinfo/$CONTAINER_TIMEZONE /etc/localtime && echo $CONTAINER_TIMEZONE > /etc/timezone

# Set locales
# https://leimao.github.io/blog/Docker-Locale/
RUN apt-get install -y locales
RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen
ENV LC_ALL en_US.UTF-8 
ENV LANG en_US.UTF-8  
ENV LANGUAGE en_US:en  


WORKDIR /root
# https://github.com/tcnksm/dockerfile-rbenv/blob/master/Dockerfile
# Install packages for building ruby
RUN apt-get install -y build-essential curl git
RUN apt-get install -y zlib1g-dev libssl-dev libreadline-dev libyaml-dev libxml2-dev libxslt-dev
RUN apt-get clean

# Install rbenv and ruby-build
RUN git clone https://github.com/sstephenson/rbenv.git /root/.rbenv
RUN git clone https://github.com/sstephenson/ruby-build.git /root/.rbenv/plugins/ruby-build
RUN /root/.rbenv/plugins/ruby-build/install.sh
ENV PATH /root/.rbenv/bin:$PATH
RUN echo 'eval "$(rbenv init -)"' >> /etc/profile.d/rbenv.sh # or /etc/profile
RUN echo 'eval "$(rbenv init -)"' >> .bashrc

ENV CONFIGURE_OPTS --disable-install-doc
RUN rbenv install 3.1.2
RUN echo 'gem: --no-rdoc --no-ri' >> /.gemrc
RUN /bin/bash -l -c "rbenv global 3.1.2; gem install jekyll bundler;"

WORKDIR /root/project
# COPY ./project/Gemfile /root/project/Gemfile
# RUN /bin/bash -l -c "bundle install"

EXPOSE 8000

CMD tail -f /dev/null
# CMD /bin/bash -l -c "bundle exec jekyll server -H 0.0.0.0 -P 8000 -l --force_polling"