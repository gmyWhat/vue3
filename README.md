 # 项目介绍

如何安装项目eslint

 npm版 下载
   npm i eslint -D 
 pnpm 版
   pnpm i eslint -D 
配置：
  1）init： npx eslint --init
  2）How would you like to use ESLint？ 选择第二或者第三个
  3）What type of modules does your project use ？ javaScript
  4）Does your project use TypeScript? yes
  5）Where does your code run？ brower(浏览器)
  6）What format do you want your config file to be in？ JavaScript
  7) Would you like to install them now with npm? 有pnpm包管理器的可以复制一下安装包 然后选择 no ，再用pnpm i  下来相依赖 没有pnpm可以选择yes 使用npm 下载
  8) 安装eslint 校验包pnpm i -D @antfu/eslint-config 在目录。eslintrc.js 修改
  9) 安装 husky git commit 前设置校验代码规范
     下载 pnpm i -D husky
     配置 npx husky install 初始化，
         npx husky add .husky/pre-commit "pnpm run lint" --- 设置提交commit前执行pnpm run lint
   

