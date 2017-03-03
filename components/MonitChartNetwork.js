import React from 'react'
import $ from 'jquery'
import echarts from "echarts"
import moment from "moment"
export default class MonitChartNetwork extends React.Component{
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('network'));


        var date = [],data=[],text=[],date1=[];

        for (var i = 1; i < 120; i++) {
            var time=new Date()-120*60*1000+i*60*1000;
            time=new Date(time);
            date.push(moment(time).format('hh:mm'));
            data.push((Math.random()*8+2).toFixed(2));
        }
        for (var i = 1; i < 120; i++) {
            var time=new Date()-120*60*1000+i*60*1000;
            time=new Date(time);
            date1.push(moment(time).format('hh:mm'));
            text.push((Math.random()*8+2).toFixed(2));
        }

        let option = {
            tooltip: {
                trigger: 'axis',
            },
            legend:{
                show:true,
                left:'left',
                data: ['upload', 'download']
            },
            title: {
                left: 'center',
                text: '网络负载',
                textStyle:{
                    color:'#676a6c',
                    fontSize:13,
                    fontFamily:'Microsoft YaHei'
                }
            },
            grid:[{
                left:20,
                top:40,
                bottom:30,
                right:10,
                height:60,
                bordercolor:'#f2f2f2'
            }],
            xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: true },
                    data: date
                }],

            yAxis: [{
                type: 'value',
                splitNumber:3,
            }] ,

            series: [
                {
                    name:'upload',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 174, 135, 0.8)'
                        }
                    },
                    data: data
                },
                // {
                //     name:'download',
                //     type:'line',
                //     smooth:true,
                //     symbol: 'none',
                //     itemStyle: {
                //         normal: {
                //             color: '#fb5344'
                //         }
                //     },
                //     data: text
                // }
            ]
        };
        myChart.setOption(option);

    }
    render(){
        return (
                <div className="col-md-4">
                    <div className="panel clearfix">
                        <div id="network" style={{height:130+'px'}}></div>
                        <div className="refresh">
                            <i className="fa fa-refresh"></i>
                        </div>
                    </div>
                </div>
        )
    }
}