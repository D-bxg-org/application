<!--
 * @Author: D_bxg
 * @Date: 2021-02-08 15:32:56
 * @LastEditors: D_bxg
 * @LastEditTime: 2021-02-10 16:26:34
 * @Description: file content
 * @FilePath: \application\README.md
-->
# 依赖说明

```js
"dependencies": {
    /**
     * 在GitHub-page里部署react应用依赖
     * 参考：https://medium.com/@yystartup/%E7%94%A8-github-pages-%E8%A3%BD%E4%BD%9C-react-demo-site-7840fcb9cc33
     */
    "gh-pages": "^3.1.0",
    /**
     * create-react-app脚手架
     */
    "@testing-library/jest-dom": "^5.11.4",//create-react-app脚手架自带
    "@testing-library/react": "^11.1.0",//create-react-app脚手架自带
    "@testing-library/user-event": "^12.1.10",//create-react-app脚手架自带
    "react": "^17.0.1",//react核心文件，create-react-app脚手架自带
    "react-dom": "^17.0.1",//react-dom核心文件，create-react-app脚手架自带
    "react-scripts": "4.0.2",//react脚本文件，create-react-app脚手架自带
    "web-vitals": "^1.0.1",//create-react-app脚手架自带
    /**
     * react-router
     */
    "react-router-dom": "^5.2.0",//路由

    "prop-types": "^15.7.2",//预设props时的依赖

    "pubsub-js": "^1.9.2",////两个组件之间传递状态值
    /**
     * redux系列
     */
    "redux": "^4.0.5",//redux核心文件，含有store、action、reducer
    "redux-thunk": "^2.3.0",//redux异步方法解决方案
    "react-redux": "^7.2.2",//外层容器概念，引入connect
    /**
     * AJAX
     */
    "axios": "^0.21.1",
    
},
"devDependencies": {}
```
