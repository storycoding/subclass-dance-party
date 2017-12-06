// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  
  this.$node = $('<img src="img/birdDance.gif" class="dancer">');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left); //why is it undefined if it's defined on the
  
  this.$node.on('click', function() {
    //call lineup from the makeDancer.prototype
    console.dir(this);
    
    this.lineUp();
  });
  
  dancers.push(this);
};
  
makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //updates all the dancers to be clickable (cheap we know)
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.originalTop = top; // to be able to revert the node to its original position
  this.originalLeft = left;
  //stores our style settings
  var styleSettings = {
    top: top,
    left: left
  };
  //need to bind makeDancer setPosition
  this.$node.css(styleSettings);
};
  
  
makeDancer.prototype.lineUp = function() {
  var top = this.$node.css('top'); // works because all nodes are jquery nodes
  
  var left = this.$node.css('left');
  
  for (var i = 0; i < dancers.length; i++) {
    dancers[i].$node.css('top', top);
  }   

};


lineUp = function() {

  for (var i = 0; i < dancers.length; i++) {
    dancers[i].$node.css('top', 300);
  }   

};
