
function Card (val, suit) {
  this.val = val;
  this.suit = suit;
}

function Die (val) {
  var self = this;
  this.val = val;
  this.roll = function (){
    self.val = Math.ceil(Math.random()*6);
    return self.val;
  };
}

function getProbabilities (reps) {
  var die1 = new Die (1);
  var die2 = new Die (1);
  var arr = [0,0,0,0,0,0,0,0,0,0,0];
  for (var i = 0; i < reps; i++) {
    var currentResult = (die1.roll()+die2.roll());
    arr[(currentResult-2)]++;
  }
  return arr;
}

console.log(getProbabilities(1000));

function Deck () {
  this.cardSet = [];
  var self = this;
  var temp = 0;
  this.build = function () {
    for (var i = 0; i < 4; i++) {
      for (var j = 1; j <= 13; j++) {
        if (i === 0) {
          if (j === 1) { temp = 'ace';}
          else if (j === 11) { temp = 'jack';}
          else if (j === 12) { temp = 'queen';}
          else if (j === 13) { temp = 'king';}
          else { temp = String(j);}
          self.cardSet[((i*13)+j)] = {val: temp, suit:'spade'};
        }
        else if (i === 1) {
          if (j === 1) { temp = 'ace';}
          else if (j === 11) { temp = 'jack';}
          else if (j === 12) { temp = 'queen';}
          else if (j === 13) { temp = 'king';}
          else { temp = String(j);}
          self.cardSet[((i*13)+j)] = {val: temp, suit:'diamond'};
        }
        else if (i === 2) {
          if (j === 1) { temp = 'ace';}
          else if (j === 11) { temp = 'jack';}
          else if (j === 12) { temp = 'queen';}
          else if (j === 13) { temp = 'king';}
          else { temp = String(j);}
          self.cardSet[((i*13)+j)] = {val: temp, suit:'club'};
        }
        else if (i === 3) {
          if (j === 1) { temp = 'ace';}
          else if (j === 11) { temp = 'jack';}
          else if (j === 12) { temp = 'queen';}
          else if (j === 13) { temp = 'king';}
          else { temp = String(j);}
          self.cardSet[((i*13)+j)] = {val: temp, suit:'heart'};
        }
      }
    }
  };
  this.shuffle = function () {
    var tempArr = self.cardSet;
    var finalArr = [];
    for (var i = 1; i <= 52; i++) {
      var rando =  Math.ceil(Math.random()*tempArr.length);
      finalArr[i] = tempArr[rando];
      tempArr = tempArr.filter(function(card){
        if (card !== tempArr[rando]) {
          return true;
        } else { return false;}
      });
    }
  return finalArr;
  };
  // this.draw =
}

var ugh = new Deck();
ugh.build();
console.log(ugh.cardSet);
console.log(ugh.shuffle());
