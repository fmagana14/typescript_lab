"use strict";
// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape
Object.defineProperty(exports, "__esModule", { value: true });
exports.rampage = void 0;
// Import Kaiju and KaijuType from example-8.js
// Fix the rampage function so it makes use of the KaijuType enum
var MonsterType;
(function (MonsterType) {
    MonsterType[MonsterType["lizard"] = 0] = "lizard";
    MonsterType[MonsterType["flying"] = 1] = "flying";
    MonsterType[MonsterType["ape"] = 2] = "ape";
})(MonsterType || (MonsterType = {}));
function rampage(name, type, power, city) {
    var action;
    switch (type) {
        case MonsterType.ape:
            action = 'smash';
            break;
        case MonsterType.lizard:
            action = 'burn';
            break;
        case MonsterType.flying:
            action = 'flap';
            break;
    }
    var result = "".concat(name, " ").concat(action, " over ").concat(city, " causing ").concat(power * 10000, " damage!");
    return result;
}
exports.rampage = rampage;
// Define two more monsters
console.log(rampage('Gojira', MonsterType.lizard, 90, 'tokyo'));
console.log(rampage('Mothra', MonsterType.flying, 40, 'Fresno'));
console.log(rampage('Kong', MonsterType.ape, 88, 'New York'));
