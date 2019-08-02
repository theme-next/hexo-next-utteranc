# Hexo NexT Utteranc
Utteranc comment system for NexT.

[![Theme](https://img.shields.io/badge/NexT-v7.3.0+-blue.svg)](https://theme-next.org)
![GitHub release](https://img.shields.io/github/release/theme-next/hexo-next-utteranc.svg)

## Install
```bash
npm install --save theme-next/hexo-next-utteranc#last-ralease
```

## Configure
You can config those in both **hexo** or **theme** `_config.yml`
```yaml
# Demo: https://utteranc.es/  http://trumandu.github.io/about/
utteranc:
  enable: false
  repo: #Github repo such as :TrumanDu/comments
  pathname: pathname
  # theme: github-light,github-dark,github-dark-orange
  theme: github-light
  cdn: https://utteranc.es/client.js
```

Thank TrumanDu's [PR764](https://github.com/theme-next/hexo-theme-next/pull/764)

And we will publish when GitHub npm package release.
