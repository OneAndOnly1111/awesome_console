import React from 'react'
import MonitChartCpu from "./MonitChartCpu"
import MonitChartNetwork from "./MonitChartNetwork"
import Assetlist from "./Assetlist"
import Channel from "./channel/Channel"
import $ from "jquery"

export default class Asset extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lengthSh : 0,
            channeldata:'',
            value:'',
            chartobj:[]
        }
        this.handleChange=this.handleChange.bind(this)
    }
    componentDidMount() {
        var that = this;
        $.ajax({
            url:'/api/host/list',
            success:function(res){
                if(res.data){
                    let length = res.data.length;
                    that.setState({lengthSh:length})
                }
                else{
                    // alert('读取机器信息失败,请联系后端进行甩锅')
                }
            }
        });
        $.ajax({
            url:'/dtapi/files',
            success:function(res){
                that.setState({
                    channeldata:res
                });
            }
        });

    }
    handleChange(event){
        this.setState({
            value:event.target.value
        });
        var that=this;
        $.ajax({
            url:'/dtapi/strategy/file/info?file_id='+event.target.value+'&province_id=340000,310000,440000,110000,370000,320000,330000',
            success:function(res){
                // console.log(res);
                var subdata=[];
                for(var pro in res){
                    var re=res[pro];
                    for (var isp in re){
                        subdata.push(re[isp]);
                    }
                }
                console.log(subdata)
                that.setState({
                    chartobj: subdata
                })

            }
        })
    }
    render(){
        if(!this.state.channeldata){
            return null;
        }
        else{
            return (
                <div id="main">
                    <div className="container-fluid">
                        <div className="row">
                        {/*
                            <div className="col-md-4">
                                <div className="panel clearfix">
                                    <div className="asset-icon">
                                        <i className="fa fa-server"></i>
                                    </div>
                                    <div className="asset-summary">
                                        <div className="asset-summary-total">
                                            <div>总资产</div>
                                            <div>
                                                <span className="text-bold">214</span>台
                                            </div>
                                        </div>
                                        <div className="asset-summary-detail">
                                            <span className="detail-box">杭州 
                                            <span className="text-bold">0</span>台
                                            </span>
                                            <span className="detail-box">上海 
                                            <span className="text-bold">{this.state.lengthSh}</span>台
                                            </span>
                                            <span className="detail-box">北京 
                                            <span className="text-bold">0</span>台
                                            </span>
                                        </div>
                                        <div className="refresh">
                                            <i className="fa fa-refresh"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                // cpu负载画图
                            }
                            <MonitChartCpu />
                            <MonitChartNetwork />
                            <Assetlist />
                        */}
                         <div><select id='file_id' onChange={this.handleChange}>
                             {this.state.channeldata.files.map((res,index)=>{
                                return <option key={index}>{res.file_id}</option>
                             })
                         }
                         </select></div>
                         {
                            this.state.chartobj.length?this.state.chartobj.map((item,index)=>{
                              return <Channel data_id={item} key={index}/>  
                            }):null
                         }
                        </div>
                    </div>
            </div>
            )
        }

    }
}