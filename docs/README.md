#  docsify 
## 安装与使用
```bash
npm i docsify-cli -g
# 当前目录下创建一个docs 文件夹.文档写在里面 
docsify init ./docs
# 预览网页
docsify serve docs
# 自动生成侧边栏
docsify g docs
```
##  markdown 相关
```
?> 框里都变绿色了
!> 红色感叹号

> An awesome project.
helloworld
```

- 图片
在当前目录下放置一个me.png 即可
```
![avatar](me.png)
```

- mermaid
```
```mermaid
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```
- 插入表情
https://jhildenbiddle.github.io/docsify-themeable/#/markdown?id=emoji
```
:bowtie:
:smile:
:laughing:
:blush:
:smiley:
:relaxed:
:smirk:
:100:
:smile:
```
