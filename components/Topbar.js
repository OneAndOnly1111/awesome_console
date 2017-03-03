import React from "react"
export default class Topbar extends React.Component{
	render(){
		return (    
				<div className="topbar">
			        <a href="#" className="btn btn-primary collapse-switch">
			            <i className="fa fa-bars"></i>
			        </a>
			        <div className="topbar-right">
			            <div className="hello">欢迎访问运维控制台</div> 
			            <div className="info-box">
			                <a href="#" className="btn count-info">
			                    <i className="fa fa-envelope"></i>
			                    <span className="count-label warning btn">14</span>
			                </a>
			                <a href="#" className="btn count-info">
			                    <i className="fa fa-bell"></i>
			                    <span className="count-label primary btn">5</span>
			                </a>
			                <a href="#" className="btn count-info">
			                    <i className="fa fa-flag"></i>
			                    <span className="count-label problem btn">7</span>
			                </a>
			            </div>
			            <div className="login-box">
			                <i className="fa fa-sign-out">登出</i>
			            </div>
			        </div>
			    </div>
    		)
	}
}