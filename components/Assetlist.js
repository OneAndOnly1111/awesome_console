import React from 'react'
import $ from 'jquery'
export default class Assetlist extends React.Component{
    componentDidMount() {
        var table = $('#server_list').DataTable({
        "paging": true,
        "searching": true,
        "autoWidth": true,
        "lengthChange": true,
        "ordering": true,
        "pageLength": 8,
        "lengthMenu": [8, 15, 20],
        columns: [{
            data: '实例名称'
        }, {
            data: '监控'
        }, {
            data: '运行状态'
        }, {
            data: 'ip地址'
        }, {
            data: '机器配置'
        }]
    });
    $.ajax({
        url:'/api/host/list',
        success:function(res){
            if(res.data){
                var length = res.data.length;
                for (var i = res.data.length - 1; i >= 0; i--) {
                    Insertpc(res.data[i]);
                }
            }
        }
    });
    var co=new WebSocket('ws://192.168.1.61:10004/api/msg');
    if(co)
    co.onmessage = wsMessage;

    function wsMessage (event) {
        console.log(event.data);
    }
    var Insertpc = (args) => {
        table.row.add({
            "实例名称": "<td>"+args.hostname+"</td>",
            "监控": "<td><i class='fa fa-bar-chart' data-uuid='" + "123" + "'></i></td>",
            "运行状态": "<td>"+args.status+"</td>",
            "ip地址": "<td>"+args.host_ip+"</td>",
            "机器配置": "<td>cpu:"+args.cpu_count+"内存"+args.disk_capacity+"</td>"
        }).draw();
        }
    }
    render(){
        return (
            <div className="col-md-12">
                <div className="panel clearfix">
                    <div className="asset-list-header">
                        <i className="border-left"></i>资产列表
                    </div>
                    <div className='asset-list-body clearfix'>
                        <table id="server_list" className="table table-hover">
                            <thead>
                                <tr>
                                    <th>实例名称</th>
                                    <th>监控</th>
                                    <th>运行状态</th>
                                    <th>ip地址</th>
                                    <th>配置</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}