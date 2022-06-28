/**
 @description 登录组件懒加载异步抛出
 @author: 王朔
 @created: 2022/6/27 10:16
 */
import React, {Component} from "react";
import {inject, observer, Provider} from "mobx-react";
import { Button, Toast } from '@douyinfe/semi-ui';

class Main extends Component<any, any> {

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <Provider>
                <Content/>
            </Provider>
        );
    }
}

class Content extends Component<any, any> {

    getContent = () => {
        return (
            <div>
                <h1>欢迎登录</h1>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.getContent()}
            </div>
        );
    }
}

export default Main;

