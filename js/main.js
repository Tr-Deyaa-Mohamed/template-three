/*global $*/

$(function () {
    
    'use strict';
    
    // Add Active Class On Navbar Link And Remove From Siblings
    
    $('.navbar li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

    });
    
    // Toggle To Read More Or Read Less
    
    $('.about .about-text span').on('click', function () {
        
        var txt = $(this).prev('p').is(':visible') ? 'Read More' : 'Read Less';
        
        $(this).children('span').text(txt);
        
        $(this).children('i').toggleClass('fa-angle-down fa-angle-up');
        
        $(this).prev('p').slideToggle(300);
        
    });
    
    
});





