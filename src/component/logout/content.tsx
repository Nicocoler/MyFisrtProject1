/**
 @description 登录组件懒加载异步抛出
 @author: 王朔
 @created: 2022/6/27 10:16
 */
import React, {Component, useRef} from "react";
import {inject, observer, Provider} from "mobx-react";
import {Button, Form, Tooltip} from '@douyinfe/semi-ui';
import './style/index.less';

class Main extends Component<any, any> {

    constructor(props: any) {
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

function IconHelpCircle(props: { style: { color: string } }) {
    return null;
}

class Content extends Component<any, any> {

    prefix: string = 'logout';

    getContent = () => {
        const selectOptions = [
            {value: 'user', label: '普通用户',otherKey:0},
            {value: 'admin', label: '管理员',otherKey:1},
        ]

        return (
            <div className={`${this.prefix}`}>
                <h1 className={`${this.prefix}-title`}>登录界面</h1>
                <div className={`${this.prefix}-content`}>
                    <Form layout={'vertical'} onValueChange={values => console.log(values)}>
                        <Form.Select field='Role' label={'角色'} style={{width: 230}} optionList={selectOptions}/>
                        <Form.Input field='UserName' label='用户名' style={{ width:230 }}/>
                        <Form.Input
                            mode="password"
                            field='Password'
                            label={{
                                text: '密码',
                                extra: <Tooltip content='详情'><IconHelpCircle style={{ color: '--semi-color-text-1' }}/></Tooltip>
                            }}
                            style={{ width:230 }}
                        />
                    </Form>
                </div>
                <div className={`${this.prefix}-button`}>
                    <Button htmlType={'submit'} size={"large"} style={{width: 230}}>登录</Button>
                </div>
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

