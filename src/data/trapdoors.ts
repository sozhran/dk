export const Doors = [
	{ id: "wood", name: "Wooden Door", health: 400, manufactureLevel: 0, manufactureTime: 18000, sellValue: 250 },
	{ id: "braced", name: "Braced Door", health: 1000, manufactureLevel: 2, manufactureTime: 24000, sellValue: 500 },
	{ id: "steel", name: "Steel Door", health: 2500, manufactureLevel: 3, manufactureTime: 26000, sellValue: 750 },
	{ id: "magic", name: "Magic Door", health: 1250, manufactureLevel: 4, manufactureTime: 50000, sellValue: 1500 },
	{ id: "secret", name: "Secret Door", health: 1250, manufactureLevel: 4, manufactureTime: 50000, sellValue: 1500 },
	{ id: "midas", name: "Midas Door", health: 5, manufactureLevel: 4, manufactureTime: 60000, sellValue: 25 },
];

export const Traps = [
	{ id: "boulder", name: "Boulder Trap", health: 128, manufactureLevel: 3, manufactureTime: 25000, triggerType: 1, activationType: 1, shots: 1, timeBetweenShots: 0, sellValue: 1000 },
	{ id: "alarm", name: "Alarm Trap", health: 1, manufactureLevel: 0, manufactureTime: 18000, triggerType: 2, activationType: 3, shots: 12, timeBetweenShots: 2000, sellValue: 250 },
	{ id: "poison_gas", name: "Poison Gas Trap", health: 1, manufactureLevel: 1, manufactureTime: 20000, triggerType: 2, activationType: 2, shots: 5, timeBetweenShots: 200, sellValue: 350 },
	{ id: "lightning", name: "Lightning Trap", health: 1, manufactureLevel: 2, manufactureTime: 20000, triggerType: 2, activationType: 3, shots: 6, timeBetweenShots: 140, sellValue: 500 },
	{ id: "word_of_power", name: "Word Of Power Trap", health: 1, manufactureLevel: 4, manufactureTime: 20000, triggerType: 2, activationType: 3, shots: 3, timeBetweenShots: 84, sellValue: 750 },
	{ id: "lava", name: "Lava Trap", health: 1, manufactureLevel: 3, manufactureTime: 20000, triggerType: 2, activationType: 4, shots: 1, timeBetweenShots: 0, sellValue: 750 },
	{ id: "tnt", name: "TNT Trap", health: 256, manufactureLevel: 4, manufactureTime: 75000, triggerType: 0, activationType: 3, shots: 1, timeBetweenShots: 0, sellValue: 1350 },
]

// Workshop levels: number of tiles (workshop size) needed to build item:
// 0 - Any workshop
// 1 - 10 or more
// 2 - 17 or more
// 3 - 26 or more
// 4 - 37 or more

// Magic Door: RESIST_NON_MAGIC
// If it receives damage from non magical source only 10% get applied.

// MIDAS takes gold from owner before it takes damage.
// One gold prevents the base HP worth of damage.


//TriggerType

//; How to trigger the trap.
//; 1: Line of sight 90 degrees.
//; 2: Pressure activated (tile).
//; 3: Line of sight.
//; 4: Pressure activated (subtile).
//; 5: Whenever after reloading.

//ActivationType

//; Type of effect on activation.
//; 1: Trap shot head for target.
//; 2: Trap effect.
//; 3: Trap shot stay on trap.
//; 4: Change the slab into another slab type.
//; 5: Shoot like a creature would.
//; 6: Spawns a creature, at level 1.
//; 7: Keeper spell.