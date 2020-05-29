// параллакс подвижного фона
// $("body").on("mousemove", (e) => {
//     const x = e.pageX / $(window).width();
//     const y = e.pageY / $(window).height();

//     $("body").css(
//         "transform",
//         "translate(-" + x * 5 + "px, -" + y * 5 + "px)"
//     );
// });



// // Згружаем товары на страницу из json
// $("document")

// при клике по картинке товара раскрывается подробная информация
// $(".img_goods1").on("click", function(e) {e.preventDefault;
//     // console.log(e);
//     $(".bdsm1").toggleClass("info_goods");
// });
// $(".img_goods2").on("click", function(e) {e.preventDefault;
//     $(".bdsm2").toggleClass("info_goods");                  убрать класс .info_goods при клике по странице!!!!!!
// })
// $(".info_goods").fadeIn(6000);//плавное появление-нихера не работае!!!!


// $(window).load(function(){
//     /* В этой строке overlays у тебя будет NodeList (не jQ объект) */
//     let overlays = document.querySelectorAll('.overlays .overlay')
  
//     $('.close').click(function(){
//       $('.overlay').fadeOut()
//     })
  
//     $('.gallery-item').click(function(){
//       /* Тут у Node пытаешься вызвать jQ метод, которого соответственно нет */
//       // overlays[$(this).index()].fadeIn()
  
//       // Пробуй что-то такое
//       let i = $(this).index()
//       $(overlays[i]).fadeIn()
  
//     })
//   })
// создаем массив описания товара