---
title: Servers
layout: single
permalink: /lab_resources/servers
toc: true
toc_label: " Table of Contents"
toc_sticky: true
sidebar:
  nav: lab_resources
---

Our lab has two servers running, `la.cs.ait.ac.th` (LA server) and `tokyo.cs.ait.ac.th` (Tokyo server).

Here is the specification of each server.

LA
```
CPU:
Ram:
GPU: GTX 1080ti 11GB
```

Tokyo
```
CPU: i5-9400f (6c/6t)
Ram: 48GB
GPU: 
  - RTX A6000 48GB
  - GTX 1080ti 11GB
```

There are two ways to use the servers.

## Way 1: Jupyter Hub

Both machine can be accessed using `https`
- <https://la.cs.ait.ac.th>
- <https://tokyo.cs.ait.ac.th>

The current configuration/setup is new. We hope there will be no problem in the long run.

To get user account, contact `st121413@ait.asia` to create an account for you.

Remember that the server is just a sad computer. There is no daily backup, no guarantee of 24/7 online.

Use a server to run your code not developing your project and storing your data.

If you have issue installing `pip`, try export `http_proxy` and `https_proxy` as `http://192.41.170.23:3128`

```
export http_proxy=http://192.41.170.23:3128
export https_proxy=http://192.41.170.23:3128
```

To automatically has this environment variable every time you log in, you can put the export command in the `.bashrc` 

## Way 2: Deploy your own Docker

If you want something aside from Python, you can deploy your Docker container and `SSH` to it. If you choose this way, we assume you know what you are doing.