
// установка крестика на кнопке телефон-меню при нажатии
$(".phone_menu").on("click", function(e) {e.preventDefault;
$(this).toggleClass("phone_menu_active");
});

// выезжающее меню, все class="catalog"
$('.open-button').click(function() 
{
        if(!$('.catalog-button').hasClass('open-done'))
        {
            $('.catalog-button').addClass('open-done');
            $('.catalog-block-1').addClass('open-done');
            // уменьшаю контент
            $('.content-goods').addClass('content-goods-small');
            setTimeout(function(){$('.catalog-block-2').addClass('open-done')}, 100);
            setTimeout(function(){$('.catalog-link-1').addClass('open-done')}, 500);
            setTimeout(function(){$('.catalog-link-2').addClass('open-done')}, 600);
            setTimeout(function(){$('.catalog-link-3').addClass('open-done')}, 700);
            setTimeout(function(){$('.catalog-link-4').addClass('open-done')}, 800);

        }
        else
        {
            $('.catalog-button').removeClass('open-done');
            $('.menu-link-1').removeClass('open-done');
            // расширяю контент
            $('.content-goods').removeClass('content-goods-small');
            setTimeout(function(){$('.catalog-link-1').removeClass('open-done')}, 100);
            setTimeout(function(){$('.catalog-link-2').removeClass('open-done')}, 100);
            setTimeout(function(){$('.catalog-link-3').removeClass('open-done')}, 200);
            setTimeout(function(){$('.catalog-link-4').removeClass('open-done')}, 300);
            setTimeout(function(){$('.catalog-block-1').removeClass('open-done')}, 800);
            setTimeout(function(){$('.catalog-block-2').removeClass('open-done')}, 600);
        }
});

// меняем контент формы появляющегося дива
let images = $('.img_goods1');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(ev) {
       let index =  ev.target.dataset.index;
       let h4 = $('#modal_h4')[0];
       let p = $('#modal_p')[0];
       let cost = $('#modal_cost')[0];
       let img = $('#modal_img')[0];
       h4.innerHTML = modalsInfo[+index].h4;
       p.innerHTML = modalsInfo[+index].p;
       cost.innerHTML = modalsInfo[+index].cost;
       img.src = modalsInfo[+index].img;
       $('.bdsm1').addClass('info_goods');  
    });
}
// выбор страницы по value в selecte
$("#select").on("change", function(e) {
   location.href = e.target.value;

})
// закрытие инфо о товаре
$(".fa-times").on("click", function(e) {e.preventDefault;
    if($(".bdsm1").hasClass("info_goods")){
    $(".bdsm1").removeClass("info_goods");
    }
})