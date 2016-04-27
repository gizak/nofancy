require('purecss/build/pure-min.css');
require('purecss/build/grids-responsive-min.css');
require('./common.scss');
require('timeago');

var jQuery = require('jquery');
var $ = jQuery;

$(document).ready(function(){
        
    if($('label[for="toggle-btn"]').css('display')=='none') {
        $('header nav').addClass('pure-menu-horizontal');
    }
    
    $(window).resize(function(){
        if($('label[for="toggle-btn"]').css('display')=='none') {
            $('header nav').addClass('pure-menu-horizontal');
            $('header nav ul').show();
        } else {
            $('header nav').removeClass('pure-menu-horizontal');
        }
    });
    
    $("time.timeago").timeago();
    
    $('#toggle-btn').click(function(e) {
        $('header nav ul').toggle();
    })
})