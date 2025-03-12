export interface Creature {
	id: number;
	textId: string;
	name: string;
	faction: "creatures" | "heroes";
	room: {} | null;
	job: { primary: Multitype; secondary: Multitype };
	training: { baseSkill: number; cost: number };
	research: { baseSkill: number; willRefuseJob: boolean };
	manufacture: { baseSkill: number; willRefuseJob: boolean };
	attack: "melee" | "ranged";
	trainingCost: number;
	baseWage: number;
	baseHealth: number;
	baseStrength: number;
	baseDexterity: number;
	baseDefence: number;
	armour: number;
	movementSpeed: number;
	luck: number;
	flying: boolean;
	undead: boolean;
	hates: string | null;
	immune: string[] | null;
	spells: {};
	slapAnger: number,
	prayingAnger: number;
	sleepingAnger: number;
	sleepRecovery: number;
	hunger: { chickens: number; rate: number };
	angerJobs: string[];
	scavengerBaseSkill: number | null;
	scavengerCost: number | null;
}

export interface Room {
	id: number;
	name: string;
	textId: string;
}

export interface Spell {
	id: number;
	name: string;
	textId: string;
}

export type Multitype = string | string[] | null;
