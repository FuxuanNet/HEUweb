# 哈尔滨工程大学美育实验教学中心——前端界面

## 推荐的 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur 插件）。

## 自定义配置

请参阅 [Vite 配置文档](https://vite.dev/config/) 了解更多配置选项。

## 项目设置

```sh
npm install
```

### 开发模式

```sh
npm run dev
```

### 上线前内容改动

1. **页脚内容补充**：请根据项目需要在页脚部分补充相关版权信息，并注意适配手机端。

2. **Vite 配置文件**：在 `vite.config.js` 文件中，`base: '/HEUweb/'` 需要替换为学校的实际路径，请确保在进行 `build` 操作之前完成此替换。

### 生产模式

```sh
npm run build
```
