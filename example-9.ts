

// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape

// Import Kaiju and KaijuType from example-8.js

// Fix the rampage function so it makes use of the KaijuType enum

enum MonsterType {
	lizard,
	flying,
	ape
}

function rampage(name: string, type: MonsterType, power: number, city: string): string {
	let action: string
	switch(type) {
		case MonsterType.ape: 
			action = 'smash'
			break

		case MonsterType.lizard:
			action = 'burn'
			break

		case MonsterType.flying: 
			action = 'flap'	
			break
	} 
	let result = `${name} ${action} over ${city} causing ${power * 10000} damage!`
	return result
}

// Define two more monsters
console.log(rampage('Gojira', MonsterType.lizard, 90, 'tokyo'))
console.log(rampage('Mothra', MonsterType.flying, 40, 'Fresno'))
console.log(rampage('Kong', MonsterType.ape, 88, 'New York'))

// Set the new monsts to rampage in a city

export {
	rampage
}