zh-hans.react.dev-for-docker
===

<!--rehype:ignore:start-->
[![CI](https://github.com/jaywcjlove/zh-hans.react.dev-for-docker/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/zh-hans.react.dev-for-docker/actions/workflows/ci.yml)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/zh-hans.react.dev)](https://hub.docker.com/r/wcjiang/zh-hans.react.dev)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/zh-hans.react.dev)](https://hub.docker.com/r/wcjiang/zh-hans.react.dev)
[![Docker Pulls](https://img.shields.io/docker/pulls/wcjiang/zh-hans.react.dev)](https://hub.docker.com/r/wcjiang/zh-hans.react.dev)
<!--rehype:ignore:end-->

新 [React 中文文档](https://zh-hans.react.dev/) docker 版本，方便本地部署看文档


```bash
docker pull wcjiang/zh-hans.react.dev:latest
```

```bash
docker run --name zh-hans.react.dev -p 60007:3000 --restart=always -d wcjiang/zh-hans.react.dev:latest
```

## License

MIT © [Kenny Wong](https://github.com/jaywcjlove)