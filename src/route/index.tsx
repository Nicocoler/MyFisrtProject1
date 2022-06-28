/**
 @description 路由
 @author: 王朔
 @created: 2022/6/27 11:21
 */
import {ComponentProps, Suspense} from "react";
import {Routes, Route} from 'react-router-dom';
import {Logout} from "../component/logout";
import {Login} from "../component/login";

function MainRoute(props: ComponentProps<any>) {
    return (
        <Routes>
            <Route path='/' element={<Logout/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    );
}

export default MainRoute;