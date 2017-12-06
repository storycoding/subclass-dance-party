var makePoppingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.step();
};

makePoppingDancer.prototype = Object.create(makeDancer.prototype);

makePoppingDancer.prototype.constructor = makePoppingDancer;

makePoppingDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
     
  makeDancer.prototype.step.call(this);
  // it will enter siteTimeOut and schedule it
  
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  
  // var x = $('body').width() * Math.random();
  // var y = $('body').height() * Math.random();
  
  // this.$node.css({left: x, top: y});
  var size = Math.random() * 50;
  
  //var newTop = this.$node.css('top') - .5 * size;
  //selects top selector from CSS, parses to a number, adjusts corner (top, left)
  //var newTop = +(this.$node.css('top').slice(0, this.$node.css('top').length - 2)) - (.5 * size);
  //var newLeft = +(this.$node.css('left').slice(0, this.$node.css('left').length - 2)) - (.5 * size);
  
  // console.log('css', newTop);
  // console.log('css', newLeft);
  
  this.$node.css({width: size, height: size});
    
  //this.$node.height();
  //you can place it anywhere because asynchronous
};

// call the parent step function that has the inifinite stepping callback
// figure out how to switch between the prototype.step and the direct constructor.step