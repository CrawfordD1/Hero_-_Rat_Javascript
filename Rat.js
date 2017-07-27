var Rat = function(){

}

Rat.prototype = {
  touch: function(food){
    food.poisoned = true;
  }
}


module.exports = Rat;