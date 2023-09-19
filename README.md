zh-hans.react.dev-for-docker
===


新 [React 中文文档](https://zh-hans.react.dev/) docker 版本，方便本地部署看文档


```bash
docker pull wcjiang/zh-hans.react.dev:latest
```

```bash
docker run --name zh-hans.react.dev -p 60007:3000 --restart=always -d wcjiang/zh-hans.react.dev:latest
```