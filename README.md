# Hexo NexT Utteranc

![Theme Version](https://img.shields.io/badge/NexT-v7.3.0+-blue?style=flat-square)
![Package Version](https://img.shields.io/github/package-json/v/theme-next/hexo-next-utteranc?style=flat-square)

Utteranc comment system for NexT.

## Preview

![image](https://user-images.githubusercontent.com/15902347/62426327-ee329780-b715-11e9-813f-ab9e0557cb9b.png)

## Install

```bash
npm install theme-next/hexo-next-utteranc
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
  # If you want to modify priority, please config in **hexo**
  #priority:
```

Thank TrumanDu's [PR764](https://github.com/theme-next/hexo-theme-next/pull/764)

And we will publish when GitHub npm package release.
