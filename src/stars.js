var Star = function() {
  
  this.$node = $('<img src="img/starDude.gif" class="star">');
  
  var x = $('body').width() * Math.random();
  
  this.$node.css('left', x);
  this.$node.css('top', -300);
  
  $('body').append(this.$node);
  
  this.$node.animate({top: '+=1800'}, 10000, 'linear');
  
  stars.push(this);
};

starFall = function() {
  
  new Star();
  
  setTimeout(starFall, 100 );
};



var Spec = function() {
  
  this.$node = $('<img src="img/starDude.gif" class="star">');
  
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
    
    if (stars[i].$node.css('top') > 800) {
      console.log('remove start: ', stars[i].$node);
      stars.splice(i, 1);
    }
    
  }
  
  setTimeout(refresh, 3000);
};

var diveSFX = new Audio();
diveSFX.src = "audio/dive.wav";

var burstSFX = new Audio();
burstSFX.src = "audio/explosion.wav";

var starSong = new Audio();
starSong.src = "audio/starMaze.mp3";