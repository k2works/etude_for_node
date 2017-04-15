npmパッケージの配置
---

## 例
```bash
npm install publish --save-dev 
npm adduser
npm run build
npm publish
```
CircleCIに以下の環境変数を追加する　
+ NPM_USERNAME
+ NPM_EMAIL
+ NPM_PASSWORD

`circle.yml`にデプロイ項目を追加する

## 注意
`npm install publish --save-dev `が失敗するときは`yarn add publish --save-dev `

## 参照
+ [3時間でできるnpmモジュール](http://qiita.com/cognitom/items/75736e27cc7de151a7d5#packagejson)
+ [get-package-readme](https://github.com/feross/get-package-readme)
+ [Automatically publish to NPM](https://glebbahmutov.com/blog/automatically-publish-to-npm/)
+ [Version Badge](https://badge.fury.io/)