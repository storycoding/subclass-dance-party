var makeShiftingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  console.dir(this);
  this.setAttribute("src", "img/beeDance.gif");
};

makeShiftingDancer.prototype = Object.create(makeDancer.prototype);

makeShiftingDancer.prototype.constructor = makeShiftingDancer;