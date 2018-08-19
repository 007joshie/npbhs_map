$(document).ready(function() {
  'use strict';
  $('#myMaps').wayfinding({
      'maps': [{
        'path': 'maps/map2.svg',
        'id': 'floor1'
      }, ],
      'path': {
        width: 5,
        color: 'Red',
        radius: 8,
        speed: 20
      },
      'startpoint': function() {
        return 'P6';
      },
      'defaultMap': 'floor1',
      'showLocation': true
    }, {
      $zoomIn: $("#zoom")
    },
    function() {
      console.log('Started');
    });



  /*  //make the floor buttons clickable
    $('#controls button').click(function() {
      $('#myMaps').wayfinding('currentMap', $(this).prop('id'));
    });*/

  $('select#beginSelect').change(function() {
    $('#myMaps').wayfinding('startpoint', $(this).val());
    if ($('#endSelect').val() !== '') {
      $('div#floor1').panzoom('reset');
      $('#myMaps').wayfinding('routeTo', $('#endSelect').val());
    }
  });

  $('select#endSelect').change(function() {
    $('#myMaps').wayfinding('routeTo', $(this).val());
  });


  /*$('#controls #accessible').change(function() {
    if ($('#accessible:checked').val() !== undefined) {
      $('#myMaps').wayfinding('accessibleRoute', true);
    } else {
      $('#myMaps').wayfinding('accessibleRoute', false);
    }
    if ($('#endSelect').val() !== '') {
      $('#myMaps').wayfinding('routeTo', $('#endSelect').val());
    }
  });*/


  $('#myMaps').on('wayfinding:roomClicked', function(e, r) {
    $('#endSelect option[value="' + r.roomId + '"]').attr('selected', true);
  });

  $('#zoom').on("click", function() {
    $('div#floor1').panzoom('zoom')
  });

  $('.logo').on("click", function() {
    $('div#floor1').panzoom('reset')
  });

  $('a#qs-ryder').on("click", function() {
    $('div#floor1').panzoom('reset');
    $("div#floor1").panzoom("pan", 600, -500, {
      relative: false,
      animate: true
    });
  });

  $('a#qs-pridham').on("click", function() {
    $('div#floor1').panzoom('reset');
    $('div#floor1').panzoom('zoom', 1.5);
    $("div#floor1").panzoom("pan", 1000, 700, {
      relative: false,
      animate: true
    });
  });

  $('a#qs-gym').on("click", function() {
    $('div#floor1').panzoom('reset');
    $('div#floor1').panzoom('zoom', 1.5);
    $("div#floor1").panzoom("pan", -650, 150, {
      relative: false,
      animate: true
    });
  });

  $('a#qs-ryder').on("click", function() {
    $('div#floor1').panzoom('reset');
    $("div#floor1").panzoom("pan", 600, -500, {
      relative: false,
      animate: true
    });
  });

  $('a#mqs-ryder').on("click", function() {
    $('div#floor1').panzoom('reset');
    $('div#floor1').panzoom('zoom', 3.2);
    $("div#floor1").panzoom("pan", 460, 575, {
      relative: false,
      animate: true
    });
    $('#myMaps').wayfinding('startpoint', 'Ryder');
  });

  $('a#mqs-pridham').on("click", function() {
    $('div#floor1').panzoom('reset');
    $('div#floor1').panzoom('zoom', 3);
    $("div#floor1").panzoom("pan", 400, 950, {
      relative: false,
      animate: true
    });
    $('#myMaps').wayfinding('startpoint', 'P6');
  });

  $('a#mqs-gym').on("click", function() {
    $('div#floor1').panzoom('reset');
    $('div#floor1').panzoom('zoom', 3);
    $("div#floor1").panzoom("pan", -300, 750, {
      relative: false,
      animate: true
    });
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function() {
      console.log("Service Worker Registered");
    });
  }


});

$(document).ready(function() {
  $('select').niceSelect();
});
