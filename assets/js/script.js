(function() {
  //===== Prealoder

  window.onload = function() {
    window.setTimeout(fadeout, 500);
  }

  function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
  }



})();

function valueChanged() {
        if ($(".whatsapp-chat-checkbox").is(":checked")) $(".answer").fadeIn();
        else $(".answer").fadeOut();
 }
