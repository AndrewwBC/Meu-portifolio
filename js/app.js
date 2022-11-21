$('nav li a').click(function (e) {
  e.preventDefault();
  let id = $(this).attr('href'),
    distancia = $(id).offset().top;

  $('html, body').animate(
    {
      scrollTop: distancia - 120,
    },
    1000,
  );
  console.log(distancia);
});

$('section').each(function () {
  let height = $(this).height(),
    offsetTop = $(this).offset().top,
    id = $(this).attr('id'),
    $itemMenu = $('a[href="#' + id + '"]');

  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop + 140 > offsetTop && scrollTop < offsetTop + height - 260) {
      $itemMenu.addClass('naSecao');
    } else {
      $itemMenu.removeClass('naSecao');
    }
  });
});

$(function () {
  $(window).resize(function () {
    if ($(this).width() < 1200) {
      $('#example').removeClass('custom');
    } else {
      $('#example').addClass('custom');
    }
  });
});

setInterval(animar, 1000);
function animar() {
  $('.hidden').each(function () {
    let offSetTop = $(this).offset().top,
      imagemRecebe = $(this);
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > offSetTop - 600) {
        imagemRecebe.removeClass('hidden');
        imagemRecebe.addClass('animate');
      } else if (scrollTop < 20) {
        $('.animate').each(function () {
          $(this).removeClass('animate');
          $(this).addClass('hidden');
        });
      }
    });
  });
}

$('.hidden').each(function () {
  $(this).mouseenter(function () {
    let attr = $(this).attr('class'),
      attrSub = attr.substring(0, 3),
      container = '#' + attrSub;
    $(container).removeClass('hiddenIcones');
    $(container).addClass('displayIcones');
  });
  $(this).mouseleave(function () {
    let attr = $(this).attr('class'),
      attrSub = attr.substring(0, 3),
      container = '#' + attrSub;
    $(container).addClass('hiddenIcones');
    $(container).removeClass('displayIcones');
  });
});

$('.mobile-btn').click(function () {
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});

$('#dark').click(function () {
  $('#body').addClass('dark-mode');
  $('#normal').addClass('active');
  $('#dark').addClass('active');
});

$('#normal').click(function () {
  $('#body').removeClass('dark-mode');
  $('#dark').removeClass('active');
  $('#normal').removeClass('active');
});
