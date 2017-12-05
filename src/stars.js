var Star = function() {
  
  this.$node = $('<img src="img/star.gif" class="star"></span>');
  this.left = 0;
  
  var x = $('body').width() * Math.random();
  
  this.$node.css('left', x);
  this.$node.css('top', -300);
  
  $('body').append(this.$node);
  
  this.$node.animate({top: '+=1800'}, 7500, 'linear');
  
  stars.push(this);
};

starFall = function() {
  
  new Star();
  
  setTimeout(starFall, 100 );
};


refresh = function() {
  
  for (var i = 0; i < stars.length; i++) {
    
    if (stars[i].$node.css('top') > 1800) {
      stars.splice(i, 1);
    }
    
  }
  
  setTimeout(refresh, 3000);
};