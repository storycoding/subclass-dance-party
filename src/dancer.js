// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  if (dancers.length >= 40) {
    alert('this party is full!');
    return;
  }
  
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  
  this.$node = $('<img src="img/birdDance.gif" class="dancer">');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left); //why is it undefined if it's defined on the
  
  this.$node.on('click', function() {
    //call lineup from the makeDancer.prototype
    console.dir(this);
    
    this.setAttribute("src", "img/firework.gif");
    
    burstSFX.play();
    
    //also remove it from the dancer array
    
    setTimeout(this.remove.bind(this), 1000);
    console.dir(this);
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

//space invader style!
lineUp = function() {
  
  diveSFX.play();
  
  var inc = 200;
  var topDistance = inc * 1;
  var leftDistance = inc * 4;
  
  for (var i = 0; i < dancers.length; i++) {
     
    
    if (i === 4) {
      topDistance = inc * 2;
      leftDistance = inc * 2;
    }
    
    if (i === 12) {
      topDistance = inc * 3;
      leftDistance = inc * 2;
    }
    
    if (i === 20) {
      topDistance = inc * 4;
      leftDistance = inc;
    }
    
    if (i === 30) {
      topDistance = inc * 5;
      leftDistance = inc;
    }
    
    if (i === 40) {
      topDistance = inc * 6;
      leftDistance = inc;
    }
    
    
    
    //next step, animate! / using stars as an example
    //this.$node.animate({top: '+=1800'}, 10000, 'linear');
    
    //var topString = '=' + topDistance;
    //var leftString = '=' + leftDistance;
    
    //dancers[i].$node.animate({top: topString}, 1000, 'linear');
    //dancers[i].$node.animate({top: leftString}, 1000, 'linear');
    
    dancers[i].$node.css('top', topDistance);
    dancers[i].$node.css('left', leftDistance);
    
    leftDistance += inc;
  }   

};
