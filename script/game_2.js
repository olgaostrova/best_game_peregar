$( document ).ready(function() {
  $(".home").click(function() {
    $( ".game_2" ).css( "display", 'none' );
    $( ".game_2_first_screen" ).css( "display", 'none' );
  })

  // игра 2
    $(".moon2").click(function() {
      $( ".game_2" ).css( "display", 'block' );
      $( ".game_2_intro" ).css( "display", 'block' );
    });
    $(".game_2_intro").click(function() {
      $( ".game_2_first_screen" ).css( "display", 'block' );
    });
    $(".home_2").click(function() {
      $( ".game_2" ).css( "display", 'none' );
      $( ".game_2_first_screen" ).css( "display", 'none' );
    });

  // игра 2 процесс
 let food = 0;
  $( ".apple" ).draggable({ containment: ".general_menu"});
  $( ".banana" ).draggable({ containment: ".general_menu"});
  $( ".bottle" ).draggable({ containment: ".general_menu"});
  $( ".cheburek" ).draggable({ containment: ".general_menu"});
  $( ".cube" ).draggable({ containment: ".general_menu"});
  $( ".cup" ).draggable({ containment: ".general_menu"});
  $( ".fork" ).draggable({ containment: ".general_menu"});
  $( ".pencil" ).draggable({ containment: ".general_menu"});
  $( ".close_mouth" ).droppable({
   drop: function( event, ui ) {
    const classes = ui.draggable[0].classList
    if (classes.contains('apple')) {
      $('.apple').addClass('none');
      $('.ans_apple').css('animation-play-state', 'running');
      $('.a1').css('animation-play-state', 'running');
      $('.a2').css('animation-play-state', 'running');
      $('.a3').css('animation-play-state', 'running');
      $('.a4').css('animation-play-state', 'running');
      food+=1;
    }
    else if (classes.contains('banana')) {
      $('.banana').addClass('none');
      $('.ans_banana').css('animation-play-state', 'running');
      $('.b1').css('animation-play-state', 'running');
      $('.b2').css('animation-play-state', 'running');
      $('.b3').css('animation-play-state', 'running');
      $('.b4').css('animation-play-state', 'running');
      food+=1;
    }
    else if (classes.contains('bottle')) {
      $('.bottle').addClass('none');
      $('.ans_bottle').css('animation-play-state', 'running');
      $('.c1').css('animation-play-state', 'running');
      $('.c2').css('animation-play-state', 'running');
      $('.c3').css('animation-play-state', 'running');
      $('.c4').css('animation-play-state', 'running');
      food+=1;
    }
    else if (classes.contains('cheburek')) {
      $('.cheburek').addClass('none');
      $('.ans_cheburek').css('animation-play-state', 'running');
      $('.d1').css('animation-play-state', 'running');
      $('.d2').css('animation-play-state', 'running');
      $('.d3').css('animation-play-state', 'running');
      $('.d4').css('animation-play-state', 'running');
      food+=1;
    }
    else if (classes.contains('cube')) {
      $('.cube').addClass('none');
      $('.ans_cube').css('animation-play-state', 'running');
      $('.e1').css('animation-play-state', 'running');
      $('.e2').css('animation-play-state', 'running');
      $('.e3').css('animation-play-state', 'running');
      $('.e4').css('animation-play-state', 'running');
      food+=1;
    }
    else if (classes.contains('cup')) {
      $('.cup').addClass('none');
      $('.ans_cup').css('animation-play-state', 'running');
      $('.f1').css('animation-play-state', 'running');
      $('.f2').css('animation-play-state', 'running');
      $('.f3').css('animation-play-state', 'running');
      $('.f4').css('animation-play-state', 'running');
      food+=1;
    }
    else if (classes.contains('fork')) {
      $('.fork').addClass('none');
      $('.ans_fork').css('animation-play-state', 'running');
      $('.g1').css('animation-play-state', 'running');
      $('.g2').css('animation-play-state', 'running');
      $('.g3').css('animation-play-state', 'running');
      $('.g4').css('animation-play-state', 'running');
      food+=1;
    }
    else if (classes.contains('pencil')) {
      $('.pencil').addClass('none');
      $('.ans_pencil').css('animation-play-state', 'running');
      $('.h1').css('animation-play-state', 'running');
      $('.h2').css('animation-play-state', 'running');
      $('.h3').css('animation-play-state', 'running');
      $('.h4').css('animation-play-state', 'running');
      food+=1;
    }
    if (food == 8) {
      $(".game_2_final").css("opacity",'1');

    }}
   });




    // $( function() {
    //   $( ".apple" ).draggable();
    //   $( ".close_mouth" ).droppable({
    //     drop: function( event, ui ) {
    //       $('.a1').css('animation-play-state', 'running');
    //       $('.a2').css('animation-play-state', 'running');
    //       $('.a3').css('animation-play-state', 'running');
    //       $('.a4').css('animation-play-state', 'running');
    //       // $('.paper_apple').css('animation-play-state', 'running');
    //       // $('.z1').css('animation-play-state', 'running');
    //     }
    //   });
    // } );
    // $( function() {
    //   $( ".banana" ).draggable();
    //   $( ".close_mouth_banana" ).droppable({
    //     drop: function( event, ui ) {
    //       $('.b1').css('animation-play-state', 'running');
    //       $('.b2').css('animation-play-state', 'running');
    //       $('.b3').css('animation-play-state', 'running');
    //       $('.b4').css('animation-play-state', 'running');
    //       // $('.z1').css('animation-play-state', 'running');
    //     }
    //   });
    // } );


















});
