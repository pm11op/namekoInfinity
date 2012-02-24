/**
 * inspired by http://d.hatena.ne.jp/hotch_botch/20120224/1330029897
 * javascript:(function(){var%20s=document.createElement('script');s.charset='UTF-8';s.src='https://raw.github.com/pm11op/namekoInfinity/master/nameko.js';document.body.appendChild(s)})();
 */
var namekomove = [];

function harvest() {
  var namekotachi = $('#main img');
  var random = Math.floor(Math.random() * namekotachi.length);

  if(!namekomove[random]) {
    namekomove[random] = true;
    var id = $('#main img:eq(' + random + ')');
    if ($(id).attr('src').indexOf('golden.png') > -1) {
      namekotachi.splice(id, 1);
      return;
    }

    var top = $(id).css('top');
    var left = $(id).css('left');

    $(id).animate({height:"+=20", top:"-=20"}, "fast");
    $(id).animate({height:"-=25", top:"+=5"}, "fast");
    $(id).animate({height:"+=5"}, "fast");
    $(id).animate({ width:"hide", height:"hide", top:0, left:0 }, "fast");

    var top2 = Number(top.replace('px', '')) + 18 + 'px';
    var left2 = Number(left.replace('px', '')) + 24 + 'px';

    $(id).animate({top:top2, left:left2}, "fast",
      function(){
        var n = Math.floor(Math.random() * 200);
        $(id).attr("src", n == 1 ? goldenSrc : namekoSrc);
      }
    );
    $(id).animate({ width:"show", height:"show",top:top, left:left}, "normal",
      function(){
        $("#namekoNum").html(++namekoNum + "本");
        namekomove[random] = false;
      }
    );
  }
}
setInterval(harvest, 10);

