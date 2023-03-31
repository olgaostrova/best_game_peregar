// игра 1
$( document ).ready(function() {
  $(".moon1").click(function() {
    $( ".game_1" ).css( "display", 'block' );
    $( ".game_1_intro" ).css( "display", 'block' );
  })
  $(".game_1_intro").click(function() {
    $( ".game_1_first_screen" ).css( "display", 'block' );
  })
  $(".home").click(function() {
    $( ".game_1" ).css( "display", 'none' );
    $( ".game_1_first_screen" ).css( "display", 'none' );
  })

// игра 1 процесс
  let pivo = 0;

  $( function() {
    $( ".beer_mug" ).draggable({ containment: ".general_menu"});
    $( ".chel_1" ).droppable({
      drop: function( event, ui ) {
        $( this ).css( "display", 'none' );
        $( '.chel_1_smile' ).css( "opacity", '1' );
        pivo+=1;
        if (pivo == 1){
          $( '.mug_1' ).css( "opacity", '1' );
        }
        else if (pivo == 2){
          $( '.mug_2' ).css( "opacity", '1' );
        }
        else if (pivo == 3){
          $( '.mug_3' ).css( "opacity", '1' );
          $( '.game_1_result' ).css( "opacity", '1' );
        }
      }
    });
  } );
  $( function() {
    $( ".beer_mug" ).draggable();
    $( ".chel_2" ).droppable({
      drop: function( event, ui ) {
        $( this ).css( "display", 'none' );
        $( '.chel_2_smile' ).css("opacity", '1');
        pivo+=1;
        if (pivo == 1){
          $( '.mug_1' ).css( "opacity", '1' );
        }
        else if (pivo == 2){
          $( '.mug_2' ).css( "opacity", '1' );
        }
        else if (pivo == 3){
          $( '.mug_3' ).css( "opacity", '1' );
          $( '.game_1_result' ).css( "opacity", '1' );
        }
      }
    });
  } );
  $( function() {
    $( ".beer_mug" ).draggable();
    $( ".chel_3" ).droppable({
      drop: function( event, ui ) {
        $( this ).css( "display", 'none' );
        $( '.chel_3_smile' ).css(  "opacity", '1');
        pivo+=1;
        if (pivo == 1){
          $( '.mug_1' ).css( "opacity", '1' );
        }
        else if (pivo == 2){
          $( '.mug_2' ).css( "opacity", '1' );
        }
        else if (pivo == 3){
          $( '.mug_3' ).css( "opacity", '1' );
          $( '.game_1_result' ).css( "opacity", '1' );
        }
      }
    });
  } );
  } );
