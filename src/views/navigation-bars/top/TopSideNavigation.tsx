import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {PlusCircleOutlined, LoginOutlined} from '@ant-design/icons';
import './TopSideNavigation.css'
import {ReduxState} from "../../../configuration/redux/reduxStrore";


function TopSideNavigation() {
    const reduxState = useSelector((state: ReduxState) => state);
    const [menu, adjustMenu] = useState(<React.Fragment/>);
    const [username, setUsername] = useState('petar ');
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch({type: 'userLoggedOut'});
    }

    useEffect(() => {
        setUsername(reduxState.userDetails.username)
        if (reduxState.userLoggedIn) {
            adjustMenu(
                <Menu theme="dark" mode="horizontal" className={'TopSideNavigation'} selectedKeys={[]}>
                    <Menu.Item icon={<PlusCircleOutlined/>} key="3"><Link
                        to={'/'} onClick={handleLogout}>Logout {username}</Link></Menu.Item>
                    <Menu.Item icon={<PlusCircleOutlined/>} key="3"><Link
                        to={`/users/account-settings/${reduxState.userDetails.username}`}>Account Settings</Link></Menu.Item>
                </Menu>
            )
        } else {
            adjustMenu(<Menu theme="dark" mode="horizontal" className={'TopSideNavigation'} selectedKeys={[]}>
                <Menu.Item
                    icon={<LoginOutlined/>} key="1"><Link
                    to={'/users/login'}>Login</Link></Menu.Item>
                <Menu.Item icon={<PlusCircleOutlined/>} key="2"><Link
                    to={'/users/register'}>Register</Link></Menu.Item>
            </Menu>)
        }

    }, [reduxState, username])
    return (
        <React.Fragment>
            {menu}
        </React.Fragment>
    )
}

export {TopSideNavigation}
