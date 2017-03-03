import React from 'react'
export default class NavBar extends React.Component{
	render(){
		return (    
		<div className="nav">
        <div className="profile">
            <div className="profile-img"></div>
            <div className="profile-usrName">测试账号</div>
            <div className="profile-charactor">测试</div>
        </div>
        <div className="nav-bar">
            <ul>
                <li className="menu">
                    <i className="fa fa-tachometer"></i>
                    <a className="menu-text" href="#">Dashboard</a>
                    <i className="fa fa-angle-left icon-pull-right"></i>
                    <ul className="nav-bar-collapse">
                        <li><a href="#">dashboard 业务</a></li>
                        <li><a href="#">dashboard 运维</a></li>
                    </ul>
                </li>
                <li className="menu">
                    <i className="fa fa-server"></i>
                    <a className="menu-text" href="#">资产管理</a>
                    <i className="fa fa-angle-left icon-pull-right"></i>
                    <ul className="nav-bar-collapse">
                        <li><a href="#">资产列表</a></li>
                    </ul>
                </li>
                <li className="menu">
                    <i className="fa  fa-cog"></i>
                    <a className="menu-text" href="#">部署系统</a>
                    <i className="fa fa-angle-left icon-pull-right"></i>
                </li>
                <li className="menu">
                    <i className="fa fa-bar-chart"></i>
                    <a className="menu-text" href="#">监控系统</a>
                    <i className="fa fa-angle-left icon-pull-right"></i>
                </li>
            </ul>
        </div>
    </div>)
	}
}