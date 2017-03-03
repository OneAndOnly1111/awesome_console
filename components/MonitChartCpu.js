import React from 'react'
import $ from 'jquery'
import echarts from "echarts"
import moment from "moment"
export default class Monitchart extends React.Component{
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('cpu'));


        var date = [],data=[];

        for (var i = 1; i < 120; i++) {
            var time=new Date()-120*60*1000+i*60*1000;
            time=new Date(time);
            date.push(moment(time).format('hh:mm'));
            data.push((Math.random()*80+20).toFixed(2));
        }

        let option = {
            tooltip: {
                formatter: '{c}'
            },
            title: {
                left: 'center',
                text: 'CPU负载',
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
                type: 'category',
                data: date
            },
            yAxis: {
                type: 'value',
                max:101
            },
            series: [
                {
                    name:'当前负载',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 174, 135, 0.6)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#33CCFF'
                            }, {
                                offset: 1,
                                color: 'rgba(0, 174, 135, 0.8)'
                            }])
                        }
                    },
                    data: data
                }
            ]
        };
        myChart.setOption(option);

    }
    render(){
        return (
            <div className="col-md-4">
                <div className="panel clearfix">
                    <div id="cpu" style={{height:130+'px'}}></div>
                    <div className="refresh">
                        <i className="fa fa-refresh"></i>
                    </div>
                </div>
            </div>
        )
    }
}