FROM golang:1.20-bullseye


WORKDIR /home/project

RUN apt update && apt upgrade -y
RUN apt install -y hugo

EXPOSE 8000
CMD tail -f /dev/null