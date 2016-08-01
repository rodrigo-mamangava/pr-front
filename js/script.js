/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery(document).ready(function ($) {

    //mouseover e mouseout dos bts da home
    $('.botao-home').mouseover(function () {
        $(this).html($(this).data('desc'));
        $(this).toggleClass('btn-ativo');
    });
    $('.botao-home').mouseout(function () {
        $(this).html($(this).data('tit'));
        $(this).toggleClass('btn-ativo');
    });


    //smooth page scroll
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});



