$( document ).ready(function() {
  $(".home").click(function() {
    $( ".game_3" ).css( "display", 'none' );
    $( ".game_3_first_screen" ).css( "display", 'none' );
  })

  //игра 3
    $(".moon3").click(function() {
      $( ".game_3" ).css( "display", 'block' );
      $( ".game_3_intro" ).css( "display", 'block' );
    })
    $(".game_3_intro").click(function() {
      $( ".game_3_first_screen" ).css( "display", 'block' );
    })
//  открытие первых карточек
    $(".var_1_1").click(function() {
      $( ".game_3_second_screen" ).css( "display", 'block' );
      $( ".card_1_1" ).css( "opacity", '1' );
    })
    $(".var_1_2").click(function() {
      $( ".game_3_second_screen" ).css( "display", 'block' );
      $( ".card_1_2" ).css( "opacity", '1' );
    })
    $(".var_1_3").click(function() {
      $( ".game_3_second_screen" ).css( "display", 'block' );
      $( ".card_1_3" ).css( "opacity", '1' );
    })
//  открытие вторых карточек
    $(".var_2_1").click(function() {
      $( ".game_3_third_screen" ).css( "display", 'block' );
      $( ".card_2_1" ).css( "opacity", '1' );
    })
    $(".var_2_2").click(function() {
      $( ".game_3_third_screen" ).css( "display", 'block' );
      $( ".card_2_2" ).css( "opacity", '1' );
    })
    $(".var_2_3").click(function() {
      $( ".game_3_third_screen" ).css( "display", 'block' );
      $( ".card_2_3" ).css( "opacity", '1' );
    })
//  открытие третьих карточек
    $(".var_3_1").click(function() {
      $( ".game_3_final_screen" ).css( "display", 'block' );
      $( ".card_3_1" ).css( "opacity", '1' );
    })
    $(".var_3_2").click(function() {
      $( ".game_3_final_screen" ).css( "display", 'block' );
      $( ".card_3_2" ).css( "opacity", '1' );
    })
    $(".var_3_3").click(function() {
      $( ".game_3_final_screen" ).css( "display", 'block' );
      $( ".card_3_3" ).css( "opacity", '1' );
    })


    $(".home_3").click(function() {
      $( ".game_3" ).css( "display", 'none' );
      $( ".game_3_first_screen" ).css( "display", 'none' );
    })


    // $(".game_3_first_screen").click(function() {
    //   $( ".game_3_final_screen" ).css( "display", 'block' );
    // })


});
