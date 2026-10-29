# 我的个人网站

> ### ✅ 已上线
> **网址：https://zhanfmoyu17.github.io**
> 仓库：https://github.com/zhanfmoyu17/zhanfmoyu17.github.io
> 托管：GitHub Pages（免费、HTTPS、无需备案、无需服务器）

一个手写的静态个人主页：**不依赖任何框架、不需要数据库、没有月租**。
所有内容都在三个文件里，改完保存刷新就能看到。

```
my-site/
├── index.html          页面内容（文字、作品、链接都在这里）
├── style.css           外观（颜色、字体、间距）
├── main.js             小交互（深色模式、淡入动画）
├── favicon.svg         浏览器标签页上的小图标
├── 本地预览.command     双击即可在浏览器打开（macOS）
└── README.md           本文件
```

---

## 一、先看看效果

- **最快**：直接双击 `index.html`
- **更接近真实网站**：双击 `本地预览.command`，会自动打开 `http://localhost:8000`
  （想看手机上什么效果：手机和 Mac 连同一个 Wi-Fi，手机浏览器打开 `http://电脑的局域网IP:8000`）
- 深色模式：点右上角的圆圈按钮，选择会被记住

---

## 二、把它改成你自己的

在 `index.html` 里搜索 `改这里`，一共 6 处，逐个替换就行：

| 想改什么 | 找什么 | 说明 |
| --- | --- | --- |
| 名字（大标题） | `改这里：你的名字` | 目前写的是「张默语」，我按你的电脑用户名猜的，不对就改掉 |
| 一句话介绍 | `改这里：一句话介绍自己` | 两行以内最好看 |
| 邮箱 | `改这里：你的邮箱` | 出现两次（首屏 + 联系区） |
| 关于我 | `改这里` 附近的「关于」段落 | 两段左右最舒服 |
| 作品 | `每个卡片是一小块` | 复制一整个 `<article>` 就能加一个作品 |
| 随笔 | `每行一条` | 复制一整个 `<a class="note">` 就能加一条 |
| 社交链接 | `socials` 里的 `<li>` | GitHub / X / 知乎 / 微信 |
| 页面标题 | `<title>` 和 `description` | 别人在搜索结果里看到的就是这两行 |

**换颜色**：打开 `style.css`，改最上面 `:root` 里的 `--accent`（现在是砖红色 `#b4472c`）。
几个现成的色值：

- 墨绿 `#2f5d50`
- 靛蓝 `#2b4a8b`
- 赭石 `#a8622a`
- 紫灰 `#5b4b6e`

**换图标**：`favicon.svg` 可以直接用文本编辑，改里面的 `fill` 颜色就行。

---

## 三、上线（已完成，可跳过）

> 这一节已经不用做了 —— 网站已经在 GitHub Pages 上跑起来了。
> 保留在这里，是万一以后想换平台时有个参考。

网站只是三个静态文件，所以不需要买服务器。三条路，选一条：

### 方案 A：GitHub Pages（推荐，最省事、永久免费）

1. 注册 [github.com](https://github.com)（没账号的话）
2. 右上角 **+ → New repository**，仓库名填 `你的用户名.github.io`（例如 `zhangmoyu.github.io`），选 **Public**，创建
3. 进入仓库 → **Add file → Upload files**，把 `index.html`、`style.css`、`main.js`、`favicon.svg` 一起拖进去，点 **Commit changes**
4. 仓库 **Settings → Pages** → Source 选 **Deploy from a branch**，Branch 选 `main` / `/ (root)` → **Save**
5. 等 1～2 分钟，访问 `https://你的用户名.github.io`

> 想用命令行的话，在 `my-site` 目录里：
> ```bash
> git init && git add . && git commit -m "我的个人网站"
> git branch -M main
> git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
> git push -u origin main
> ```

**优点**：免费、HTTPS 自动、国内可直接访问（速度一般但稳定）、以后想加文章也方便。

### 方案 B：Cloudflare Pages（拖拽上传，不需要 git）

1. 注册 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 左侧 **Workers & Pages → Create → Pages → Upload assets**
3. 把 `my-site` 文件夹拖进去，点 Deploy
4. 得到 `xxx.pages.dev` 的网址，可以改名字

**优点**：不用命令行，全球 CDN。国内访问时快时慢。

### 方案 C：Vercel

同样是拖拽或 `npx vercel`，体验和 Cloudflare Pages 接近，得到 `xxx.vercel.app`。

---

## 四、常见问题

**要不要买域名？**
不买也能用（`xxx.github.io` / `xxx.pages.dev`）。想要 `zhangmoyu.com` 这种，在阿里云 / 腾讯云 / Cloudflare 买，一年大概 ¥30–100，然后在托管平台绑定自定义域名即可。

**需要备案吗？**
用 GitHub Pages、Cloudflare Pages、Vercel 都**不需要备案**（服务器在境外）。
只有把网站放到**中国大陆的服务器 / 阿里云 OSS** 上，并且绑定自己的域名，才必须做 ICP 备案（约 2–3 周）。

**"个人使用" 是不是可以不上线？**
完全可以。这类网站不上线也很有用：当作电子名片、当简历附件、或者只是把自己写的东西集中放一处。想给朋友看时再上线，链接随时加。

**会不会有安全 / 维护问题？**
纯静态页面，没有后台、没有数据库、没有登录，几乎不存在被攻击的面；也不用定期升级。三年后打开还是这个样子。

**我可以加博客 / 相册 / 留言板吗？**
- 加文章：复制一个 `.note` 行，指向新页面（比如 `posts/2026-11-01.html`），或者以后换成 Astro / Hugo 这类静态博客框架
- 相册：在作品区加一个卡片，链接到一个图片文件夹
- 留言板：这个需要后端或第三方服务，个人站一般不需要

**改完没变化？**
浏览器缓存，按 `Command + Shift + R` 强制刷新。

---

## 五、备份

这个文件夹就是网站的全部。建议在 GitHub 上放一份（顺便就上线了），或者丢进 iCloud / 坚果云。
不要只留在这台电脑的桌面上。

---

## 六、以后怎么更新

**方式 1：直接改 GitHub 上的文件（最快）**

打开 https://github.com/zhanfmoyu17/zhanfmoyu17.github.io ，点 `index.html` → 右上角铅笔图标 → 改文字 → 底部 **Commit changes**。约 1 分钟后线上生效。

**方式 2：改本地文件，然后重新发布**

本地 `my-site/` 里的文件才是"源码"，改完后需要同步到 GitHub。
⚠️ 这台机器现在 **`git push` 连不上 github.com**（443 端口被网络挡住，`api.github.com` 却正常），所以别直接用 `git push`，会卡住。有三个办法：

- 用方式 1 在网页上改（推荐）
- 让我帮你同步（把改好的文件发我，或者直接说改什么）
- 换网络环境（手机热点 / 公司网络）后再试 `git push`

**方式 3：以后想正经用命令行**

换到能连通 github.com 的网络后：

```bash
cd ~/Desktop/创造/my-site
git clone https://github.com/zhanfmoyu17/zhanfmoyu17.github.io.git tmp
# 或直接 git remote add origin ... 然后 git push
```

---

*由 DeepSeek Harness 协助搭建 · 2026.10*
