$( document ).ready(function() {
  $(".home").click(function() {
    $( ".game_5" ).css( "display", 'none' );
    $( ".game_5_first_screen" ).css( "display", 'none' );
  })

  //игра 4
    $(".moon5").click(function() {
      $( ".game_5" ).css( "display", 'block' );
      $( ".game_5_intro" ).css( "display", 'block' );
    })
    $(".game_5_intro").click(function() {
      $( ".game_5_first_screen" ).css( "display", 'block' );
    })
    $(".home_4").click(function() {
      $( ".game_4" ).css( "display", 'none' );
      $( ".game_3_first_screen" ).css( "display", 'none' );
    })
    $(".music").click(function() {
      $( this ).css( "display", 'none' );
    })
  // счетчик
    let counter = 0;

    $(".dragons").click(function () {
      counter+=1;
      if (counter == 1) {
        $('.drak_1_sad').css('opacity','1'); }
      if (counter == 2) {
        $('.drak_2_sad').css('opacity','1'); }
      if (counter == 3) {
        $('.drak_3_sad').css('opacity','1'); }
      if (counter == 4) {
        $('.drak_4_sad').css('opacity','1'); }
      if (counter == 5) {
        $('.drak_5_sad').css('opacity','1'); }
      if (counter == 6) {
        $('.drak_6_sad').css('opacity','1'); }
      if (counter == 7) {
        $('.drak_7_sad').css('opacity','1'); }
      if (counter == 8) {
        $('.drak_8_sad').css('opacity','1'); }
      if (counter == 9) {
        $('.drak_9_sad').css('opacity','1'); }
      if (counter == 10) {
        $('.drak_1_sad').css('opacity','0');
        $('.drak_1_smile').css('opacity','1'); }
      if (counter == 11) {
        $('.drak_2_sad').css('opacity','0');
        $('.drak_2_smile').css('opacity','1'); }
      if (counter == 12) {
        $('.drak_3_sad').css('opacity','0');
        $('.drak_3_smile').css('opacity','1'); }
      if (counter == 13) {
        $('.drak_4_sad').css('opacity','0');
        $('.drak_4_smile').css('opacity','1'); }
      if (counter == 14) {
        $('.drak_5_sad').css('opacity','0');
        $('.drak_5_smile').css('opacity','1'); }
      if (counter == 15) {
        $('.drak_6_sad').css('opacity','0');
        $('.drak_6_smile').css('opacity','1'); }
      if (counter == 16) {
        $('.drak_7_sad').css('opacity','0');
        $('.drak_7_smile').css('opacity','1'); }
      if (counter == 17) {
        $('.drak_8_sad').css('opacity','0');
        $('.drak_8_smile').css('opacity','1'); }
      if (counter == 18) {
        $('.drak_9_sad').css('opacity','0');
        $('.drak_9_smile').css('opacity','1');}
      if (counter == 19) {
        $('.game_5_final').css('opacity','1'); }

      if (counter == 60) {
        $('.surprise').css('display','block');}

  })
  $(".pleer").click(function () {
    $(".audio").trigger('play');
    $('.an1').css('animation-play-state', 'running');
    $('.an2').css('animation-play-state', 'running');
    $('.pleer2').css('display','block');
    $('.sur_1').css('opacity','0');
    $('.sur_2').css('opacity','1');

    });

  $(".pleer2").click(function () {
    $(".audio").trigger('pause');
    $('.an1').css('animation-play-state', 'paused');
    $('.an2').css('animation-play-state', 'paused');
    });








});
