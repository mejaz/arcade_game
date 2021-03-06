// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.startPoint = x;
    this.x = this.startPoint;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < 505 && this.x >= -800) {
      this.x += this.speed * dt;
    } else if (this.x > 505) {
      this.x = this.startPoint;
    }

    // let t = Math.floor((Math.random() * 10) + 1);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 202;
  this.y = 392;
}

Player.prototype.update = function() {
  if (this.y < 0) {
      this.x = 202;
      this.y = 392;
  }
}

Player.prototype.render = function(dt) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyCode) {
  switch (keyCode) {
    case 'left':
      if(this.x > 0) {
        this.x -= 101;
      }
      break;
    case 'up':
      if(this.y > -20) {
        this.y -= 83;
      }
      break;
    case 'right':
      if (this.x < 400) {
        this.x += 101;
      }
      break;
    case 'down':
      if (this.y < 380){
        this.y += 83;
      }
      break;
    default:
      break;
  }
}

// Now instantiate your objects.
let e1 = new Enemy(-300, 60, 250);
let e2 = new Enemy(-200, 143, 100);
let e3 = new Enemy(-200, 226 , 120);
let e4 = new Enemy(-500, 60, 150);
// let e5 = new Enemy(-500, 80, 150);
let p = new Player();
// Place all enemy objects in an array called allEnemies
let allEnemies = [e1, e2, e3, e4];
// Place the player object in a variable called player
let player = p;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Enemy.render();
