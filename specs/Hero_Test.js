var assert = require('assert');
var Hero = require('../Hero.js');
var Food = require('../Food.js');
var Task = require('../Task.js');
var Rat = require('../Rat.js');

describe('Hero', function() {

var hero;
var burger;
var pizza;
var task1;
var task2;
var task3;
var rat;

  beforeEach(function(){
    pizza = new Food("Pizza", 15)
    burger = new Food("Burger", 20);
    hero = new Hero("CrawMan", burger);
    task1 = new Task(1, 3, 1000);
    task2 = new Task(6, 7, 500);
    task3 = new Task(10, 1, 3000);
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    rat = new Rat();
  })

  it("should be able to eat food, health should go up by the replenishment value", function(){
    hero.damage(50);
    hero.eat(pizza);
    assert.strictEqual(hero.health, 65);
  })

  it("If the food is their favourite food, health should go up by 1.5 * value.", function(){
    hero.damage(50);
    hero.eat(burger);
    assert.strictEqual(hero.health, 80);
  })

  it("should be able to add tasks", function(){
    assert.deepEqual(hero.tasks, [task1, task2, task3]);
  })

  it("should be able to sort their tasks by reward", function(){
    hero.sortByReward();
    assert.deepEqual(hero.tasks, [task2, task1, task3]);
  })
  it("should be able to sort their tasks by difficulty", function(){
    hero.sortByDifficulty();
    assert.deepEqual(hero.tasks, [task1, task2, task3]);
  })
  it("should be able to sort their tasks by urgency", function(){
    hero.sortByUrgency();
    assert.deepEqual(hero.tasks, [task3, task1, task2]);
  })

  it("should be able to view tasks that are marked as completed or incomplete", function(){
    hero.markComplete(task1);
    assert.deepEqual(hero.viewComplete(), [task1]);
    assert.deepEqual(hero.viewInComplete(), [task2, task3]);
  })

  it("should be able to lose health when poisoned", function(){
    rat.touch(burger);
    hero.eat(burger);
    assert.strictEqual(hero.health, 80);
  })

})

