import { Creature, Room, Spell } from "./Interfaces";

export const Creatures: Creature[] = [
	{
		id: 1,
		textId: "archer",
		name: "Archer",
		faction: "Heroes",
		room: { guardPost: 1 },
		job: { primary: "manufacturing", secondary: "guarding" },
		skillTraining: 1,
		research: { skill: 2, willRefuseJob: false },
		manufacture: { skill: 2, willRefuseJob: false },
		attack: "Ranged",
		trainingCost: 8,
		salary: 60,
		health: 300,
		strength: 20,
		dexterity: 100,
		defence: 60,
		armour: 20,
		speed: 48,
		luck: 15,
		level10Cost: 7112,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Arrow", "4": "Navigating Missile", "6": "Speed", "8": "Slow" },
	},
	{
		id: 2,
		textId: "avatar",
		name: "Avatar",
		faction: "Heroes",
		room: { lair: 20, trainingRoom: 36, hatchery: 25 },
		job: { primary: "training", secondary: null },
		skillTraining: 4,
		research: { skill: 3, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 100,
		salary: 1200,
		health: 3000,
		strength: 150,
		dexterity: 180,
		defence: 110,
		armour: 120,
		speed: 48,
		luck: 20,
		level10Cost: null,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "2": "Armour", "4": "Heal", "6": "Freeze", "7": "Drain", "8": "Navigating Missile", "9": "Invisibility", "10": "Word of Power" },
	},
	{
		id: 3,
		textId: "barbarian",
		name: "Barbarian",
		faction: "Heroes",
		room: { trainingRoom: 9 },
		job: { primary: "training", secondary: null },
		skillTraining: 3,
		research: { skill: 0, willRefuseJob: false },
		manufacture: { skill: 2, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 40,
		salary: 95,
		health: 700,
		strength: 60,
		dexterity: 70,
		defence: 60,
		armour: 50,
		speed: 48,
		luck: 10,
		level10Cost: 18240,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "6": "Armour" },
	},
	{
		id: 4,
		textId: "bug",
		name: "Beetle",
		faction: "Creatures",
		room: { lair: 9 },
		job: { primary: null, secondary: null },
		skillTraining: 1,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 8,
		salary: 18,
		health: 250,
		strength: 25,
		dexterity: 55,
		defence: 40,
		armour: 25,
		speed: 48,
		luck: 3,
		level10Cost: 11024,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "7": "Freeze" },
	},
	{
		id: 5,
		textId: "bile_demon",
		name: "Bile Demon",
		faction: "Creatures",
		room: { lair: 25, hatchery: 25 },
		job: { primary: "manufacturing", secondary: null },
		skillTraining: 2,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 3, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 38,
		salary: 98,
		health: 1200,
		strength: 80,
		dexterity: 40,
		defence: 30,
		armour: 60,
		speed: 48,
		luck: 5,
		level10Cost: 26068,
		flying: false,
		undead: false,
		hates: 22,
		immune: ["Gas"],
		spells: { "1": "Hand to Hand", "2": "Poison Cloud", "4": "Fart", "7": "Grenade" },
	},
	{
		id: 6,
		textId: "dark_mistress",
		name: "Dark Mistress",
		faction: "Creatures",
		room: { tortureChamber: 9 },
		job: { primary: "training", secondary: "torture" },
		skillTraining: 2,
		research: { skill: 2, willRefuseJob: false },
		manufacture: { skill: 2, willRefuseJob: false },
		attack: "Ranged",
		trainingCost: 24,
		salary: 175,
		health: 700,
		strength: 60,
		dexterity: 70,
		defence: 70,
		armour: 50,
		speed: 64,
		luck: 20,
		level10Cost: 11640,
		flying: false,
		undead: false,
		hates: 21,
		immune: null,
		spells: { "1": "Hand to Hand", "6": "Lightning", "7": "Speed", "9": "Drain", "10": "Teleport" },
	},
	{
		id: 7,
		textId: "demonspawn",
		name: "Demon Spawn",
		faction: "Creatures",
		room: { trainingRoom: 1, treasureRoom: 1 },
		job: { primary: "training", secondary: "grouping" },
		skillTraining: 2,
		research: { skill: 2, willRefuseJob: false },
		manufacture: { skill: 2, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 15,
		salary: 70,
		health: 325,
		strength: 50,
		dexterity: 70,
		defence: 75,
		armour: 40,
		speed: 48,
		luck: 8,
		level10Cost: 10290,
		flying: false,
		undead: false,
		hates: 14,
		immune: ["Lava"],
		spells: { "1": "Hand to Hand", "4": "Missile", "7": "Heal" },
	},
	{
		id: 8,
		textId: "dragon",
		name: "Dragon",
		faction: "Creatures",
		room: { treasureRoom: 25, lair: 15 },
		job: { primary: "research:", secondary: "training" },
		skillTraining: 3,
		research: { skill: 4, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 40,
		salary: 350,
		health: 900,
		strength: 90,
		dexterity: 60,
		defence: 50,
		armour: 90,
		speed: 32,
		luck: 18,
		level10Cost: 18240,
		flying: false,
		undead: false,
		hates: null,
		immune: ["Lava"],
		spells: { "1": "Flame Breath", "2": "Heal", "3": "Grenade", "7": "Meteor", "10": "Word of Power" },
	},
	{
		id: 9,
		textId: "fairy",
		name: "Fairy",
		faction: "Heroes",
		room: { library: 9, lair: 1 },
		job: { primary: "research:", secondary: null },
		skillTraining: 1,
		research: { skill: 4, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Ranged",
		trainingCost: 4,
		salary: 59,
		health: 150,
		strength: 10,
		dexterity: 70,
		defence: 30,
		armour: 10,
		speed: 64,
		luck: 40,
		level10Cost: 5512,
		flying: true,
		undead: false,
		hates: null,
		immune: ["Gas"],
		spells: { "1": "Hand to Hand", "3": "Drain", "4": "Lightning", "5": "Heal", "6": "Invisibility", "7": "Navigating Missile", 8: "Rebound", "9": "Meteor", "10": "Freeze" },
	},
	{
		id: 10,
		textId: "fly",
		name: "Fly",
		faction: "Creatures",
		room: {},
		job: { primary: "exploration", secondary: null },
		skillTraining: 1,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 5,
		salary: 5,
		health: 150,
		strength: 10,
		dexterity: 50,
		defence: 30,
		armour: 10,
		speed: 128,
		luck: 15,
		level10Cost: 5410,
		flying: true,
		undead: false,
		hates: 23,
		immune: null,
		spells: { "1": "Hand to Hand", "5": "Sight", "8": "Speed" },
	},
	{
		id: 11,
		textId: "ghost",
		name: "Ghost",
		faction: "Creatures",
		room: { temple: 4, tortureChamber: 1 },
		job: { primary: "worship", secondary: "research:" },
		skillTraining: 1,
		research: { skill: 2, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 20,
		salary: 20,
		health: 200,
		strength: 20,
		dexterity: 90,
		defence: 60,
		armour: 20,
		speed: 64,
		luck: 10,
		level10Cost: 27560,
		flying: true,
		undead: true,
		hates: null,
		immune: ["Gas"],
		spells: { "1": ["Hand to Hand", "Rebound"], "3": "Invisibility", "6": "Wind", "8": "Drain" },
	},
	{
		id: 12,
		textId: "giant",
		name: "Giant",
		faction: "Heroes",
		room: { trainingRoom: 25, hatchery: 15 },
		job: { primary: "training", secondary: null },
		skillTraining: 2,
		research: { skill: 0, willRefuseJob: true },
		manufacture: { skill: 2, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 35,
		salary: 43,
		health: 650,
		strength: 100,
		dexterity: 60,
		defence: 30,
		armour: 60,
		speed: 32,
		luck: 20,
		level10Cost: 24010,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "10": "Speed" },
	},
	{
		id: 13,
		textId: "horny",
		name: "Horned Reaper",
		faction: "Creatures",
		room: { temple: 9 },
		job: { primary: null, secondary: null },
		skillTraining: 1,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 0, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 150,
		salary: 950,
		health: 2000,
		strength: 150,
		dexterity: 160,
		defence: 70,
		armour: 70,
		speed: 96,
		luck: 30,
		level10Cost: 5054,
		flying: false,
		undead: false,
		hates: null,
		immune: ["Lava"],
		spells: { "1": "Hand to Hand", "5": "Speed", "10": "Slow" },
	},
	{
		id: 14,
		textId: "hell_hound",
		name: "Hound",
		faction: "Creatures",
		room: { scavengerRoom: 9 },
		job: { primary: "scouting", secondary: "pissing" },
		skillTraining: 2,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 14,
		salary: 67,
		health: 600,
		strength: 55,
		dexterity: 70,
		defence: 50,
		armour: 35,
		speed: 96,
		luck: 8,
		level10Cost: 123000,
		flying: false,
		undead: false,
		hates: 7,
		immune: ["Lava"],
		spells: { "1": "Hand to Hand", "3": "Speed", "5": "Flame Breath" },
	},
	{
		id: 15,
		textId: "imp",
		name: "Imp",
		faction: "Creatures",
		room: {},
		job: { primary: "digging", secondary: ["claiming", "reinforcing", "collecting", "arming", "dragging"] },
		skillTraining: 1,
		research: { skill: 0, willRefuseJob: false },
		manufacture: { skill: 0, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 10,
		salary: 0,
		health: 75,
		strength: 5,
		dexterity: 60,
		defence: 5,
		armour: 5,
		speed: 96,
		luck: 0,
		level10Cost: 7500,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": ["Hand to Hand", "Dig"], "3": "Speed", "10": "Teleport" },
	},
	{
		id: 16,
		textId: "knight",
		name: "Knight",
		faction: "Heroes",
		room: { trainingRoom: 36 },
		job: { primary: "training", secondary: null },
		skillTraining: 3,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 40,
		salary: 540,
		health: 950,
		strength: 80,
		dexterity: 150,
		defence: 30,
		armour: 100,
		speed: 40,
		luck: 15,
		level10Cost: 18240,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "4": "Rebound", "7": "Heal" },
	},
	{
		id: 17,
		textId: "monk",
		name: "Monk",
		faction: "Heroes",
		room: { temple: 8 },
		job: { primary: "research:", secondary: null },
		skillTraining: 1,
		research: { skill: 3, willRefuseJob: false },
		manufacture: { skill: 2, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 12,
		salary: 75,
		health: 325,
		strength: 40,
		dexterity: 80,
		defence: 80,
		armour: 20,
		speed: 32,
		luck: 30,
		level10Cost: 16536,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "2": "Heal", "3": "Armour", "4": "Slow", "5": "Missile", "7": "Drain", "9": "Hailstorm", "10": "Word of Power" },
	},
	{
		id: 18,
		textId: "dwarfa",
		name: "Mountain Dwarf",
		faction: "Heroes",
		room: { treasureRoom: 1, workshop: 9 },
		job: { primary: "manufacturing", secondary: null },
		skillTraining: 1,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 3, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 5,
		salary: 35,
		health: 500,
		strength: 50,
		dexterity: 55,
		defence: 30,
		armour: 40,
		speed: 80,
		luck: 2,
		level10Cost: 6890,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "4": "Armour", "7": "Rebound" },
	},
	{
		id: 19,
		textId: "orc",
		name: "Orc",
		faction: "Creatures",
		room: { barracks: 1, trainingRoom: 9 },
		job: { primary: "training", secondary: "guarding" },
		skillTraining: 2,
		research: { skill: 0, willRefuseJob: false },
		manufacture: { skill: 3, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 15,
		salary: 95,
		health: 700,
		strength: 65,
		dexterity: 60,
		defence: 65,
		armour: 60,
		speed: 48,
		luck: 12,
		level10Cost: 6120,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "5": "Speed", "7": "Armour", "9": "Grenade" },
	},
	{
		id: 20,
		textId: "witch",
		name: "Priestess",
		faction: "Heroes",
		room: { library: 9, scavengerRoom: 1 },
		job: { primary: "research:", secondary: null },
		skillTraining: 2,
		research: { skill: 3, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Ranged",
		trainingCost: 16,
		salary: 75,
		health: 300,
		strength: 20,
		dexterity: 80,
		defence: 30,
		armour: 20,
		speed: 48,
		luck: 6,
		level10Cost: 10976,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "2": "Flight", "3": "Poison Cloud", "4": "Rebound", "5": "Wind", "7": "Lightning", "8": "Heal", "9": "Navigating Missile", "10": "Hailstorm" },
	},
	{
		id: 21,
		textId: "samurai",
		name: "Samurai",
		faction: "Heroes",
		room: { trainingRoom: 9, barracks: 6, tortureChamber: 1 },
		job: { primary: "training", secondary: null },
		skillTraining: 4,
		research: { skill: 2, willRefuseJob: false },
		manufacture: { skill: 2, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 50,
		salary: 195,
		health: 700,
		strength: 80,
		dexterity: 90,
		defence: 70,
		armour: 60,
		speed: 64,
		luck: 20,
		level10Cost: 12050,
		flying: false,
		undead: false,
		hates: 6,
		immune: null,
		spells: { "1": "Hand to Hand", "5": "Sight", "6": "Lightning", "7": "Speed", "9": "Freeze" },
	},
	{
		id: 22,
		textId: "skeleton",
		name: "Skeleton",
		faction: "Creatures",
		room: { prison: 1 },
		job: { primary: "training", secondary: "grouping" },
		skillTraining: 4,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 20,
		salary: 70,
		health: 500,
		strength: 55,
		dexterity: 70,
		defence: 50,
		armour: 20,
		speed: 64,
		luck: 2,
		level10Cost: 6820,
		flying: false,
		undead: true,
		hates: 5,
		immune: ["Gas"],
		spells: { "1": "Hand to Hand", "5": "Armour", "10": "Lightning" },
	},
	{
		id: 23,
		textId: "spider",
		name: "Spider",
		faction: "Creatures",
		room: { hatchery: 9, lair: 9 },
		job: { primary: "freezing", secondary: "training" },
		skillTraining: 1,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 2, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 18,
		salary: 25,
		health: 400,
		strength: 40,
		dexterity: 60,
		defence: 50,
		armour: 30,
		speed: 48,
		luck: 3,
		level10Cost: 24804,
		flying: false,
		undead: false,
		hates: 10,
		immune: null,
		spells: { "1": "Hand to Hand", "2": "Slow", "4": "Freeze", "10": "Hailstorm" },
	},
	{
		id: 24,
		textId: "tentacle",
		name: "Tentacle",
		faction: "Creatures",
		room: { lair: 9, temple: 9 },
		job: { primary: null, secondary: null },
		skillTraining: 1,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 14,
		salary: 45,
		health: 700,
		strength: 50,
		dexterity: 65,
		defence: 50,
		armour: 50,
		speed: 32,
		luck: 3,
		level10Cost: 19292,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "5": "Freeze" },
	},
	{
		id: 25,
		textId: "thief",
		name: "Thief",
		faction: "Heroes",
		room: { lair: 1, treasureRoom: 9 },
		job: { primary: null, secondary: null },
		skillTraining: 1,
		research: { skill: 1, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 12,
		salary: 57,
		health: 250,
		strength: 30,
		dexterity: 120,
		defence: 80,
		armour: 20,
		speed: 48,
		luck: 14,
		level10Cost: 9192,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "4": "Speed", "7": "Invisibility", "10": "Rebound" },
	},
	{
		id: 26,
		textId: "troll",
		name: "Troll",
		faction: "Creatures",
		room: { workshop: 1 },
		job: { primary: "manufacturing", secondary: null },
		skillTraining: 1,
		research: { skill: 1, willRefuseJob: true },
		manufacture: { skill: 4, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 12,
		salary: 50,
		health: 450,
		strength: 40,
		dexterity: 50,
		defence: 50,
		armour: 35,
		speed: 48,
		luck: 10,
		level10Cost: 9192,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "4": "Speed", "7": "Fireball", "10": "Grenade" },
	},
	{
		id: 27,
		textId: "tunneller",
		name: "Tunneller",
		faction: "Heroes",
		room: {},
		job: { primary: null, secondary: ["digging", "claiming", "reinforcing"] },
		skillTraining: 1,
		research: { skill: 0, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: false },
		attack: "Melee",
		trainingCost: 10,
		salary: 50,
		health: 350,
		strength: 40,
		dexterity: 40,
		defence: 40,
		armour: 30,
		speed: 48,
		luck: 0,
		level10Cost: 13780,
		flying: false,
		undead: false,
		hates: null,
		immune: null,
		spells: { "1": "Hand to Hand", "10": "Teleport" },
	},
	{
		id: 28,
		textId: "vampire",
		name: "Vampire",
		faction: "Creatures",
		room: { graveyard: 30, lair: 9 },
		job: { primary: "scavenging", secondary: "research:" },
		skillTraining: 4,
		research: { skill: 3, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: true },
		attack: "Ranged",
		trainingCost: 50,
		salary: 750,
		health: 800,
		strength: 70,
		dexterity: 80,
		defence: 120,
		armour: 30,
		speed: 56,
		luck: 25,
		level10Cost: 43600,
		flying: false,
		undead: true,
		hates: 29,
		immune: ["Gas"],
		spells: { "1": "Hand to Hand", "2": "Flight", "3": "Slow", "4": "Teleport", "5": "Heal", "6": "Drain", "7": "Armour", "8": "Wind", "10": "Word of Power" },
	},
	{
		id: 29,
		textId: "sorceror",
		name: "Warlock",
		faction: "Creatures",
		room: { library: 9 },
		job: { primary: "research:", secondary: null },
		skillTraining: 2,
		research: { skill: 5, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: true },
		attack: "Ranged",
		trainingCost: 30,
		salary: 120,
		health: 350,
		strength: 20,
		dexterity: 100,
		defence: 30,
		armour: 15,
		speed: 32,
		luck: 6,
		level10Cost: 20580,
		flying: false,
		undead: false,
		hates: 28,
		immune: null,
		spells: { "1": "Hand to Hand", "2": "Fireball", "3": "Heal", "4": "Meteor", "5": "Invisibility", "6": "Navigating Missile", "7": "Sight", "8": "Wind", "9": "Word of Power" },
	},
	{
		id: 30,
		textId: "wizard",
		name: "Wizard",
		faction: "Heroes",
		room: { library: 9 },
		job: { primary: "research:", secondary: null },
		skillTraining: 2,
		research: { skill: 4, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: true },
		attack: "Ranged",
		trainingCost: 30,
		salary: 125,
		health: 350,
		strength: 20,
		dexterity: 100,
		defence: 30,
		armour: 15,
		speed: 32,
		luck: 5,
		level10Cost: 20580,
		flying: false,
		undead: false,
		hates: null,
		immune: ["Gas"],
		spells: { "1": ["Hand to Hand", "Missile"], "3": "Fireball", "5": ["Rebound", "Heal"], "6": "Freeze", "7": "Hailstorm", "8": "Drain", "9": "Slow", "10": "Meteor" },
	},
	{
		id: 31,
		textId: "time_mage",
		name: "Time Mage",
		faction: "Heroes",
		room: { library: 12, temple: 3 },
		job: { primary: "research:", secondary: null },
		skillTraining: 2,
		research: { skill: 4, willRefuseJob: false },
		manufacture: { skill: 1, willRefuseJob: true },
		attack: "Ranged",
		trainingCost: 30,
		salary: 165,
		health: 470,
		strength: 30,
		dexterity: 100,
		defence: 30,
		armour: 15,
		speed: 32,
		luck: 6,
		level10Cost: 20580,
		flying: false,
		undead: false,
		hates: 28,
		immune: null,
		spells: { "1": "Hand to Hand", "2": "Fireball", "3": "Heal", "4": "Meteor", "5": "Invisibility", "6": "Navigating Missile", "7": "Sight", "8": "Wind", "9": "Word of Power" },
	},
	{
		id: 32,
		textId: "druid",
		name: "Druid",
		faction: "Creatures",
		room: { library: 9, guardPost: 4 },
		job: { primary: "research:", secondary: null },
		skillTraining: 2,
		research: { skill: 4, willRefuseJob: false },
		manufacture: { skill: 0, willRefuseJob: false },
		attack: "Ranged",
		trainingCost: 30,
		salary: 125,
		health: 350,
		strength: 20,
		dexterity: 100,
		defence: 30,
		armour: 15,
		speed: 32,
		luck: 5,
		level10Cost: 20580,
		flying: false,
		undead: false,
		hates: null,
		immune: ["Gas"],
		spells: { "1": ["Hand to Hand", "Missile"], "3": "Fireball", "5": ["Rebound", "Heal"], "6": "Freeze", "7": "Hailstorm", "8": "Drain", "9": "Slow", "10": "Meteor" },
	},
];

export const Spells: Spell[] = [
	{ id: 1, spellName: "Arrow", linkName: "arrow" },
	{ id: 2, spellName: "Dig", linkName: "dig" },
	{ id: 3, spellName: "Drain", linkName: "drain" },
	{ id: 4, spellName: "Fart", linkName: "fart" },
	{ id: 5, spellName: "Fireball", linkName: "fireball" },
	{ id: 6, spellName: "Flame Breath", linkName: "flamebreath" },
	{ id: 7, spellName: "Flight", linkName: "flight" },
	{ id: 8, spellName: "Freeze", linkName: "freeze" },
	{ id: 9, spellName: "Grenade", linkName: "grenade" },
	{ id: 10, spellName: "Hailstorm", linkName: "hailstorm" },
	{ id: 11, spellName: "Hand to Hand", linkName: "handtohand" },
	{ id: 12, spellName: "Heal", linkName: "heal" },
	{ id: 13, spellName: "Invisibility", linkName: "invisibility" },
	{ id: 14, spellName: "Lightning", linkName: "lightning" },
	{ id: 15, spellName: "Meteor", linkName: "meteor" },
	{ id: 16, spellName: "Missile", linkName: "missile" },
	{ id: 17, spellName: "Navigating Missile", linkName: "navigatingmissile" },
	{ id: 18, spellName: "Poison Cloud", linkName: "poisoncloud" },
	{ id: 19, spellName: "Rebound", linkName: "rebound" },
	{ id: 20, spellName: "Sight", linkName: "sight" },
	{ id: 21, spellName: "Slow", linkName: "slow" },
	{ id: 22, spellName: "Speed", linkName: "speed" },
	{ id: 23, spellName: "Teleport", linkName: "teleport" },
	{ id: 24, spellName: "Wind", linkName: "wind" },
	{ id: 25, spellName: "Word of Power", linkName: "wordofpower" },
];
export const Rooms: Room[] = [
	{ id: 1, roomName: "Treasure Room", linkName: "treasureroom" },
	{ id: 2, roomName: "Lair", linkName: "lair" },
	{ id: 3, roomName: "Hatchery", linkName: "hatchery" },
	{ id: 4, roomName: "Training Room", linkName: "trainingroom" },
	{ id: 5, roomName: "Library", linkName: "library" },
	{ id: 6, roomName: "Bridge", linkName: "bridge" },
	{ id: 7, roomName: "Guard Post", linkName: "guardpost" },
	{ id: 8, roomName: "Workshop", linkName: "workshop" },
	{ id: 9, roomName: "Prison", linkName: "prison" },
	{ id: 10, roomName: "Torture Chamber", linkName: "torturechamber" },
	{ id: 11, roomName: "Barracks", linkName: "barracks" },
	{ id: 12, roomName: "Temple", linkName: "temple" },
	{ id: 13, roomName: "Graveyard", linkName: "graveyard" },
	{ id: 14, roomName: "Scavenger Room", linkName: "scavengerroom" },
];

// check the table against indivudual pages
// confirm Giant, Ghost attraction