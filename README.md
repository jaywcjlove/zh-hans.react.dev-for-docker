React documentation for [Docker](https://hub.docker.com/r/wcjiang/react.dev)
===

<!--rehype:ignore:start-->
[![CI](https://github.com/jaywcjlove/zh-hans.react.dev-for-docker/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/zh-hans.react.dev-for-docker/actions/workflows/ci.yml)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/react.dev)](https://hub.docker.com/r/wcjiang/react.dev)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/react.dev)](https://hub.docker.com/r/wcjiang/react.dev)
[![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/react.dev)](https://hub.docker.com/r/wcjiang/react.dev)
[![GitHub last commit](https://img.shields.io/github/last-commit/jaywcjlove/zh-hans.react.dev-for-docker?style=flat&label=zh-hans.react.dev)](https://github.com/jaywcjlove/zh-hans.react.dev-for-docker/commits)
<!--rehype:ignore:end-->

The new [React documentation](https://github.com/reactjs/react.dev) supports Docker deployment, making it convenient for local viewing and learning.


```bash
docker pull wcjiang/react.dev:latest
```

```bash
docker run --name zh-hans.react.dev \
  -p 60007:3000 \
  --restart=always \
  -d wcjiang/react.dev:latest
```

## License

MIT © [Kenny Wong](https://github.com/jaywcjlove)
