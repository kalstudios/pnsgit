$(function() {
   navigationcall();
});


$(document).ready(function(e) {resized()});
$(window).resize(function(e) {resized()});
function resized(){
	var wrapper = $(window).height()- $('header').outerHeight()
	$('.main-wrapper').outerHeight(wrapper)
	var container= $('.main-wrapper').outerHeight() -($('.breadcrumb').outerHeight()+$('.mcx-strip').outerHeight()+$('footer').outerHeight())
	$('.container').outerHeight(container)
	
	
	$(".img-page").outerHeight(container)
	
	
	}
	
	
function navigationcall(){
	 var navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');

    // Nav toggle

	$('.nav-toggle').unbind('click')
	$('.nav-toggle').bind('click')
    navToggle.on('click', function(e) {
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        
    });
  
    // Nav dropdown toggle
	$('.has-dropdown').unbind('click')
	$('.has-dropdown').bind('click')
    navDropdownToggle.on('click', function() {
        var $this = $(this);
        $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
    });
	
	
	}	
	
	
function gettoken(){
	var path=''
	if(window.localStorage.getItem("ggntoken")==null){
	path="?token=1";		
	}else{
	path="?token="+window.localStorage.getItem("ggntoken");	
	}
	return path;
}

function getParam(name)
{  
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
	var regexS = "[\\?&]"+name+"=([^&#]*)";  
	var regex = new RegExp( regexS );  
	var results = regex.exec(window.location.href);
	if(results == null) return "";  else return results[1];
}
	