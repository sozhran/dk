export interface Creature {
	id: number;
	textId: string;
	name: string;
	faction: "creatures" | "heroes";
	room: {} | null;
	job: { primary: Multitype; secondary: Multitype };
	willRefuseJobs: string[];
	training: { skill: number, cost: number };
	researchSkill: number;
	manufactureSkill: number;
	scavenger: { skill: number | null; cost: number | null };
	attackPreference: "melee" | "ranged";
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
	sleepRecovery: number;
	tortureTime: number;
	spells: {};
	hunger: { chickens: number; rate: number };
	anger: { slap: number; torture: number; hatedJob: number; postal: number, queue: number, untrained: [number, number], notPaid: number; gotPaid: number; killEnemy: number; pray: number; sleep: number };
	angerJobs: string[] | null
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
