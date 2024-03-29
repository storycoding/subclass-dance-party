$(document).ready(function() {
  window.dancers = [];
  window.stars = [];
  
  $('.lineUp').on('click', function() {
    //call lineup from the makeDancer.prototype
    lineUp();
  });
  
  $('.danceTime').on('click', function(event) {
    
    for (var i = 0; i < dancers.length; i++) {
        
      //changes every node's src atrribute to match the dancing ones
        
    }
  
  });
  
  
  $('.addDancerButton').on('click', function(event) {
  
    
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
  
    // get the maker function for the kind of dancer we're supposed to make
    //var dancerMakerFunction = makeBlinkyDancer;

    // make a dancer with a random position

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log('dancerMakerFunctionName ', dancerMakerFunctionName );
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction($('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000);
    $('.container').append(dancer.$node);
  });
  
  starSong.play();
  starFall();
  refresh();

});


