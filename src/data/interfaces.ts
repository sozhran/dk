export interface Creature {
	id: string;
	name: string;
	alignment: "good" | "evil";
	room: { [key: string]: number };
	job: { primary: Multitype; secondary: Multitype };
	willRefuseJobs: string[];
	training: { skill: number, cost: number };
	researchSkill: number;
	manufactureSkill: number;
	scavenger: { skill: number | null; cost: number | null };
	attackPreference: "melee" | "ranged";
	wage: number;
	health: number;
	strength: number;
	dexterity: number;
	defence: number;
	armour: number;
	movementSpeed: number;
	luck: number;
	flying: boolean;
	undead: boolean;
	hates: string | null;
	immune: string[] | null;
	sleepRecovery: number;
	tortureTime: number;
	spells: { [key: string]: string | string[] };
	hunger: { chickens: number; rate: number };
	anger: { slap: number; torture: number; hatedJob: number; postal: number, queue: number, untrained: [number, number], notPaid: number; gotPaid: number; killEnemy: number; pray: number; sleep: number };
	angerJobs: string[] | null
	levelTrainValues: number[]
}

export interface Room {
	id: number;
	name: string;
	textId: string;
}

export interface Spell {
	name: string;
	textId: string;
}

export type Multitype = string | string[] | null;
