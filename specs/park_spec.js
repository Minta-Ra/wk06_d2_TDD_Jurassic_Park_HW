const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur_1;
  let dinosaur_2;
  let dinosaur_3;
  let dinosaur_4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 59.99);
    dinosaur_1 = new Dinosaur('Brachiosaurus', 'Herbivore', 18);
    dinosaur_2 = new Dinosaur('Gallimimus', 'Omnivore', 32);
    dinosaur_3 = new Dinosaur('Velociraptor', 'Carnivore', 12);
    dinosaur_4 = new Dinosaur('Triceratops', 'Herbivore', 35);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 59.99);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.add(dinosaur_1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur_1]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.add(dinosaur_1);
    park.add(dinosaur_2);
    park.add(dinosaur_3);
    park.add(dinosaur_4);
    park.remove(dinosaur_2)
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur_1, dinosaur_3, dinosaur_4]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.add(dinosaur_1);
    park.add(dinosaur_2);
    park.add(dinosaur_3);
    park.add(dinosaur_4);
    const actual = park.findMostVisited();
    const expected = dinosaur_4;
    assert.strictEqual(actual, expected)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.add(dinosaur_1);
    park.add(dinosaur_2);
    park.add(dinosaur_3);
    park.add(dinosaur_4);
    const actual = park.findBySpecies('Gallimimus');
    const expected = [dinosaur_2];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.add(dinosaur_1);
    park.add(dinosaur_2);
    park.add(dinosaur_3);
    park.add(dinosaur_4);
    const actual = park.dailyVisitorCount();
    const expected = 97;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.add(dinosaur_1);
    park.add(dinosaur_2);
    park.add(dinosaur_3);
    park.add(dinosaur_4);
    const actual = park.yearlyVisitorCount();
    const expected = 35405;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year', function() {
    park.add(dinosaur_1);
    park.add(dinosaur_2);
    park.add(dinosaur_3);
    park.add(dinosaur_4);
    const actual = park.yerlyRevenueCount();
    const expected = 2123945.95;
    assert.strictEqual(actual, expected)
  });

});