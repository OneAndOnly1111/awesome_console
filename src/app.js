import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import Asset from '../components/Asset'
import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery';
require('../js/datatables/jquery.datatables.js');
require('../style/main.less')


const _APPNODE = document.getElementById('app')
ReactDom.render( <div>
        <Navbar />
        <Topbar />
        <Asset />
        </div> ,
    _APPNODE)
$('li.menu').click((e) => {
    var _element = $(e.currentTarget);
    if (_element.hasClass('active')) {
        _element.removeClass('active');
        _element.find(".icon-pull-right").removeClass('fa-angle-down').addClass('fa-angle-left');

    } else {
        $('ul').find(".menu").removeClass('active');
        $('ul').find(".icon-pull-right").removeClass('fa-angle-down').addClass('fa-angle-left');
        _element.addClass('active');
        _element.find(".icon-pull-right").removeClass('fa-angle-left').addClass('fa-angle-down');
    }
});
$(".nav-bar-collapse").click((event) => {
    event.stopPropagation();
});





