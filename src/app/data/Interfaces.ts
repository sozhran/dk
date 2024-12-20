export interface Creature {
	id: number;
	textId: string;
	name: string;
	faction: "Creatures" | "Heroes";
	room: {};
	job: { primary: Multitype; secondary: Multitype };
	skillTraining: number;
	research: { skill: number; willRefuseJob: boolean };
	manufacture: { skill: number; willRefuseJob: boolean };
	attack: "Melee" | "Ranged";
	trainingCost: number;
	salary: number;
	health: number;
	strength: number;
	dexterity: number;
	defence: number;
	armour: number;
	speed: number;
	luck: number;
	level10Cost: number | null;
	flying: boolean;
	undead: boolean;
	hates: number | null;
	immune: string[] | null;
	spells: {};
}

export interface Room {
	id: number;
	roomName: string;
	linkName: string;
}

export interface Spell {
	id: number;
	spellName: string;
	linkName: string;
}

export type Multitype = string | string[] | null;
