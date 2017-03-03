import React from 'react'
import $ from 'jquery'
import echarts from "echarts"
import moment from "moment"
export default class Channel extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            chart_id:this.props.data_id
        }
    }
    componentDidMount() {
        var date=[],dataY={
            p2p:[],
            upload:[],
            flow:[],
            cdn:[],
            download:[]
        };
        var data_id=this.props.data_id;
        data_id.map((item)=>{
            for(var key in item){
                dataY.p2p.push((+item[key].p2p/1024/1024).toFixed(2));
                dataY.cdn.push((+item[key].cdn/1024/1024).toFixed(2));
                dataY.upload.push((+item[key].upload/1024/1024).toFixed(2));
                dataY.flow.push((+item[key].flow/1024/1024).toFixed(2));
                dataY.download.push((+item[key].download/1024/1024).toFixed(2));
                date.push(moment(+key).format('HH:mm'));
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
                text: '流量图',
                textStyle:{
                    color:'#676a6c',
                    fontSize:13,
                    fontFamily:'Microsoft YaHei'
                }
            },
            grid:{
                left:50,
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
                    name:'flow',
                    type:'line',
                    smooth:true,
                    data: dataY.download
                }
            ]
        };
            var myChart = echarts.init(document.getElementById(this.state.chart_id));
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
                    <div id={this.state.chart_id} style={{height:300+'px'}}></div>
                    <div className="refresh">
                        <i className="fa fa-refresh"></i>
                    </div>
                </div>
            </div>
        )
    }
}