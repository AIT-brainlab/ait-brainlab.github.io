FROM ubuntu:22.04


ARG DEBIAN_FRONTEND=noninteractive

RUN apt update && apt upgrade -y
RUN apt install -y wget

RUN wget https://go.dev/dl/go1.20.2.linux-amd64.tar.gz
RUN rm -rf /usr/local/go && tar -C /usr/local -xzf go1.20.2.linux-amd64.tar.gz

ENV PATH /usr/local/go/bin:$PATH
ENV GOPATH /go
ENV PATH $GOPATH/bin:$PATH
RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 1777 "$GOPATH"
ENV GOBIN $GOPATH/bin
RUN go install github.com/gohugoio/hugo@v0.111.3
WORKDIR /home/project


EXPOSE 1313
CMD tail -f /dev/null