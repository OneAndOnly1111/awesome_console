import React from 'react'
import $ from 'jquery'
import echarts from "echarts"
import moment from "moment"
import ProvinceMap from "../../util/ProvinceMap"
import IspName from "../../util/IspName"
export default class Channel extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            chart_id:this.props.data_id
        }
    }
    componentDidMount() {
        console.log(this.props.data_id)
        var date=[],dataY={
            p2p:[],
            upload:[],
            flow:[],
            cdn:[],
            download:[],
        },pro_name,isp_name;
        var data_id=this.props.data_id;
        data_id.map((item)=>{
            for(var key in item){
                dataY.p2p.push((+item[key].p2p/1024/1024).toFixed(2));
                dataY.cdn.push((+item[key].cdn/1024/1024).toFixed(2));
                dataY.upload.push((+item[key].upload/1024/1024).toFixed(2));
                dataY.flow.push((+item[key].flow/1024/1024).toFixed(2));
                dataY.download.push((+item[key].download/1024/1024).toFixed(2));
                date.push(moment(+key).format('HH:mm'));
                isp_name=IspName[item[key].isp_id];
                pro_name=ProvinceMap[item[key].province_id];
            }
        });
        console.log(date,dataY)
        var option = {
            tooltip: {
                trigger: 'axis',
            },
            dataZoom:{
                type:'inside'
            },
            title: {
                left: 'center',
                top:'5',
                text: pro_name+" "+isp_name+'流量图',
                textStyle:{
                    color:'#676a6c',
                    fontSize:13,
                    fontFamily:'Microsoft YaHei'
                }
            },
            grid:{
                left:60,
                top:40,
                bottom:30,
                right:10
            },
            xAxis: {
                data: date
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    formatter: '{value} MB'
                }
            },
            series: [
                {
                    name:'p2p',
                    type:'line',
                    smooth:true,
                    data: dataY.p2p
                },
                {
                    name:'cdn',
                    type:'line',
                    smooth:true,
                    data: dataY.cdn
                },
                {
                    name:'upload',
                    type:'line',
                    smooth:true,
                    data: dataY.upload
                },
                {
                    name:'flow',
                    type:'line',
                    smooth:true,
                    data: dataY.flow
                },
                {
                    name:'download',
                    type:'line',
                    smooth:true,
                    data: dataY.download
                }
            ]
        };
            var myChart = echarts.init(document.getElementById(this.props.key_id))
            myChart.setOption(option);
         
    }
    componentWillReceiveProps(next){
        // if(next.data){
        //     this.setState({
        //         chart_id: next.data-id
        //     })
        // }
        
        // if(next.data)
        console.log(next)
    }
    render(){
        return (
            <div className="col-md-4">
                <div className="panel clearfix">
                    <div id={this.props.key_id} style={{height:300+'px'}}></div>
                    <div className="refresh">
                        <i className="fa fa-refresh"></i>
                    </div>
                </div>
            </div>
        )
    }
}