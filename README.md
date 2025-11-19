# 我的博客

这是一个使用 Hugo + Blowfish 主题搭建的博客。

## 技术栈

- **Hugo 0.141.0 Extended** - 快速、现代化的静态网站生成器
- **Blowfish** - 功能丰富、外观精美的 Hugo 主题

## 快速开始

### 启动开发服务器

```bash
./start.sh
```

或者直接运行：

```bash
./hugo server --buildDrafts
```

服务器将在 `http://localhost:1313` 启动。

### 构建静态网站

```bash
./build.sh
```

或者直接运行：

```bash
./hugo
```

构建后的静态文件将生成在 `public/` 目录。

## 创建新文章

```bash
./hugo new content posts/your-post-name.md
```

然后编辑 `content/posts/your-post-name.md` 文件，添加你的内容。

## 目录结构

```
.
├── archetypes/          # 文章模板
├── assets/              # 资源文件（图片、样式等）
├── config/              # 配置文件
│   └── _default/        # 默认配置
├── content/             # 博客内容
│   └── posts/           # 博客文章
├── themes/              # 主题目录
│   └── blowfish/        # Blowfish 主题
├── public/              # 生成的静态文件（构建后）
├── hugo                 # Hugo 可执行文件
├── start.sh             # 启动开发服务器脚本
├── build.sh             # 构建脚本
└── README.md            # 本文件
```

## 配置

主要配置文件位于 `config/_default/` 目录：

- `hugo.toml` - 站点基本配置
- `languages.*.toml` - 多语言配置
- `menus.*.toml` - 菜单配置
- `params.toml` - 主题参数配置

## 部署

构建静态网站后，将 `public/` 目录的内容部署到任何静态网站托管服务：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- 等等...

## 更多信息

- [Hugo 官方文档](https://gohugo.io/documentation/)
- [Blowfish 主题文档](https://blowfish.page/)

## 许可

根据你的需要添加许可证信息。
