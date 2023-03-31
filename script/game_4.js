$( document ).ready(function() {
  $(".home").click(function() {
    $( ".game_4" ).css( "display", 'none' );
    $( ".game_4_first_screen" ).css( "display", 'none' );
  })

  //игра 4
    $(".moon4").click(function() {
      $( ".game_4" ).css( "display", 'block' );
      $( ".game_4_intro" ).css( "display", 'block' );
    })
    $(".game_4_intro").click(function() {
      $( ".game_4_first_screen" ).css( "display", 'block' );
    })
    $(".home_4").click(function() {
      $( ".game_4" ).css( "display", 'none' );
      $( ".game_3_first_screen" ).css( "display", 'none' );
    })
  let drinks = 0;

  $( ".fire_icon" ).draggable({ containment: ".general_menu"});
  $( ".mouth_icon" ).draggable({ containment: ".general_menu"});
  $( ".wings_icon" ).draggable({ containment: ".general_menu"});
  $( ".bottle_all" ).droppable({
   drop: function( event, ui ) {
    const classes = ui.draggable[0].classList
    if (classes.contains('fire_icon')) {
      $(".bottle_fire").removeClass("none")
      $(".bottle_bit").addClass("none")
      $(".bottle_wings").addClass("none");
      $(".fire_icon").addClass("none");
      drinks+=1;
    }
    else if (classes.contains('mouth_icon')) {
      $(".bottle_fire").addClass("none")
      $(".bottle_bit").removeClass("none")
      $(".bottle_wings").addClass("none");
      $(".mouth_icon").addClass("none");
      drinks+=1;
    }
    else if (classes.contains('wings_icon')) {
      $(".bottle_fire").addClass("none")
      $(".bottle_bit").addClass("none")
      $(".bottle_wings").removeClass("none");
      $(".wings_icon").addClass("none");
      drinks+=1;
    }
    if (drinks == 3) {
      $(".game_4_final").css("opacity",'1');
      $(".frame").css("opacity",'0');

    }}
   });

  $( ".glass_all" ).droppable({
  drop: function( event, ui ) {
   const classes = ui.draggable[0].classList
   if (classes.contains('fire_icon')) {
     $(".glass_fire").removeClass("none")
     $(".glass_bit").addClass("none")
     $(".glass_wings").addClass("none");
     $(".fire_icon").addClass("none");
    drinks+=1;
   }
   else if (classes.contains('mouth_icon')) {
     $(".glass_fire").addClass("none")
     $(".glass_bit").removeClass("none")
     $(".glass_wings").addClass("none");
     $(".mouth_icon").addClass("none");
     drinks+=1;
   }
   else if (classes.contains('wings_icon')) {
     $(".glass_fire").addClass("none")
     $(".glass_bit").addClass("none")
     $(".glass_wings").removeClass("none");
     $(".wings_icon").addClass("none");
     drinks+=1;
   }
   if (drinks == 3) {
     $(".game_4_final").css("opacity",'1');
     $(".frame").css("opacity",'0');
   }}
  });


 $( ".mug_all" ).droppable({
   drop: function( event, ui ) {
    const classes = ui.draggable[0].classList
      if (classes.contains('fire_icon')) {
        $(".mug_fire").removeClass("none")
        $(".mug_bit").addClass("none")
        $(".mug_wings").addClass("none");
        $(".fire_icon").addClass("none");
        drinks+=1;
      }
      else if (classes.contains('mouth_icon')) {
        $(".mug_fire").addClass("none")
        $(".mug_bit").removeClass("none")
        $(".mug_wings").addClass("none");
        $(".mouth_icon").addClass("none");
        drinks+=1;
      }
      else if (classes.contains('wings_icon')) {
        $(".mug_fire").addClass("none")
        $(".mug_bit").addClass("none")
        $(".mug_wings").removeClass("none");
        $(".wings_icon").addClass("none");
        drinks+=1;
      }
      if (drinks == 3) {
        $(".game_4_final").css("opacity",'1');
        $(".frame").css("opacity",'0');
      }}
     });

});
