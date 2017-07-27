var _ = require("lodash");

var Hero = function(name, food){
  this.name = name;
  this.food = food;
  this.health = 100;
  this.talk = function(){
    return (this.name + " To the rescue!");
  }
  this.tasks = [];
}


Hero.prototype = {
  eat: function(food){
    var value = food.value;
    if(food.name === this.food.name){
      value *= 1.5;
    }
    if(food.poisoned === true){
      value = (0 - food.value)
    }
    this.health += value;
    if (this.health > 100){
      this.health = 100;
    }

  },
  damage: function(value){
    this.health -= value;
  },
  addTask: function(task){
    this.tasks.push(task);
  },
  markComplete: function(task){
    task.completed = true;
  },
  markInComplete: function(task){
    task.completed = false;
  },
  viewComplete: function(){
    return _.filter(this.tasks, function(task){
      return task.completed === true;
    });
  },
  viewInComplete: function(){
    return _.filter(this.tasks, function(task){
      return task.completed === false;
    });
  },
  sortByReward: function(){
    this.tasks = _.sortBy(this.tasks, function(task){
      return task.reward;
    });
  },
  sortByDifficulty: function(){
    this.tasks = _.sortBy(this.tasks, function(task){
      return task.difficulty;
    });
  },
  sortByUrgency: function(){
    this.tasks = _.sortBy(this.tasks, function(task){
      return task.urgency;
    });
  }
}

module.exports = Hero;