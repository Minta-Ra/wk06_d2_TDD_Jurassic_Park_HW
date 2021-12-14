const Park = function (name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}


Park.prototype.add = function(dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.remove = function(dinosaur) {
    const index = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(index, 1);    //Or shift() to remove the first;   // Or .pop() to remove the last
}

Park.prototype.findMostVisited = function() {
    let max = this.collectionOfDinosaurs[0];

    for (i = 0; i < this.collectionOfDinosaurs.length; i++) {
        
        if (this.collectionOfDinosaurs[i].guestsAttractedPerDay > max.guestsAttractedPerDay) {
            max = this.collectionOfDinosaurs[i]
        }
    }
    return max;
}

Park.prototype.findBySpecies = function(species) {
    let specificSpecies = [];

    for (let dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.species === species){
            specificSpecies.push(dinosaur)
        }
    }
    return specificSpecies;
}

Park.prototype.dailyVisitorCount = function() {
    let counter = 0;
    for (let i = 0; i < this.collectionOfDinosaurs.length; i++){
        counter += this.collectionOfDinosaurs[i].guestsAttractedPerDay
    };
    return counter
};

Park.prototype.yearlyVisitorCount = function() {
    let total = this.dailyVisitorCount() * 365;
    return total;
}

Park.prototype.yerlyRevenueCount = function() {
    let totalRevenue = this.yearlyVisitorCount() * this.ticketPrice;
    return totalRevenue;
}


module.exports = Park;
