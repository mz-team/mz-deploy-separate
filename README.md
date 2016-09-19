# mz-deploy-separate

本模块主要作为 [mz-fis](https://github.com/mz-team/mz-fis) i18n 国际化框架的协同插件使用。用于针对特殊文件(如体积过大)的单独发布处理。

## 安装

```
npm install mz-deploy-separate
```

## 插件调用示例

```javascript

fis.media('prod')
  .match(/\-bigfile.*|(mp4|flv|webm)$/, {
      useHash: true,
      extra:{
          separate: 'bigfile' //给需要单独发布的文件加自定义tag
      },
      domain: 'http://www2.res.meizu.com'//大文件走svn发布
  })
  .match('*', {
    deploy: [
        fis.plugin('separate',{
            //匹配的文件复制后存放目录
            'toLocal': fis.get('env.MZ_FIS_BIG_FILE_PATH'),
            //用于匹配之前定义好的tag
            'tag':'bigfile'
        })
    ]
  });
  
```