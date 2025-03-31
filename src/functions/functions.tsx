import Image from "next/image";
import { Creature, Multitype } from "@/data/interfaces";

export const creatureLevels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const getCreaturesWithSpeed = (creatures: Creature[]) => {
	const result: { [key: string]: string } = {};

	creatures.map((creature: Creature) => {
		Object.keys(creature.spells).forEach(function (key) {
			if (typeof creature.spells[key] === "string" && creature.spells[key] === "Speed") {
				result[creature.id] = key;
			}
		});
	});
};

// Function scales a creature stat from level 1 to level 10 + calculates doubling effect from Speed
// if it's provided (which is not always equal to x2 since the number is doubled _before_ the result is
// rounded down) starting with the level when the creature gets it.
// The 'speed' parameter will be omitted for stats that are unaffected by Speed (such as wages).
export function getStatProgression(base_value: number | null, speed?: number | null) {
	const result = [base_value];

	if (!base_value) {
		for (let i = 2; i < 11; i++) {
			result.push(null);
		}
	} else {
		for (let i = 2; i < 11; i++) {
			let raw_stat = base_value + base_value * 0.35 * (i - 1);

			if (speed && speed <= i) {
				result.push(Math.floor(raw_stat * 2));
			} else result.push(Math.floor(raw_stat));
		}
	}

	return result;
}

// Does the same thing but calculates Speed effect for all levels and returns an array with 2 numbers
// (without and with speed) for all levels.
export const getStatProgressionWithSpeed = (base_value: number) => {
	const result = [[base_value, base_value * 2]];

	for (let i = 2; i < 11; i++) {
		let raw_stat = base_value + base_value * 0.35 * (i - 1);

		result.push([Math.floor(raw_stat), Math.floor(raw_stat * 2)]);
	}

	return result;
};

export function checkIfHasSpeed(creature: Creature) {
	for (const [key, value] of Object.entries(creature.spells)) {
		if (value === "Speed") {
			return parseInt(key);
		}
	}

	return null;
}

export function getStringOrArray(data: string | string[] | null) {
	if (!data) {
		return "None";
	}

	if (typeof data === "string") {
		return data;
	} else {
		return data.join(", ");
	}
}

export function cookData(creature: Creature, level: number) {
	let speed = checkIfHasSpeed(creature);

	if (speed && speed > level) {
		speed = null;
	}

	const cookedCrit = { ...creature };

	cookedCrit.wage;

	return;
}

export const getRooms = (rooms: any) => {
	return (
		<div className="line">
			{Object.keys(rooms).map(function (key) {
				return (
					<>
						<Image key={key} alt={key} src={`/images/icons/rooms/${key}.png`} width="20" height="20" />
						{rooms[key]}
					</>
				);
			})}
		</div>
	);
};

const serializeToString = (data: string | string[] | null) => {
	if (typeof data === "string") {
		return data;
	} else if (Array.isArray(data)) {
		return data.join(", ");
	} else {
		return null;
	}
};

export const getSpells = (spells: any) => {
	return creatureLevels.map(function (level) {
		return (
			<p key={level}>
				{level}: {spells[level] ? serializeToString(spells[level]) : "-"}
			</p>
		);
	});
};

export const getAbilities = (creature: Creature) => {
	return (
		<table className="tabel">
			<caption>Creature Abilities</caption>
			<thead></thead>
			<tbody>
				<tr>
					<td>
						<Image alt="training" src={`/images/icons/rooms/training.png`} width={19} height={22} />
					</td>
					<td>{creature.training.skill}</td>
				</tr>
				<tr>
					<td>
						<Image alt="research" src={`/images/icons/rooms/research.png`} width={13} height={22} />
					</td>
					<td>{creature.researchSkill}</td>
				</tr>
				<tr>
					<td>
						<Image alt="manufacturing" src={`/images/icons/rooms/workshop.png`} width={23} height={24} />
					</td>
					<td>{creature.manufactureSkill}</td>
				</tr>
			</tbody>
		</table>
	);
};

export const getJobs = (creature: Creature) => {
	const primary: Multitype = creature.job.primary;
	const secondary: Multitype = creature.job.secondary;
	return (
		<>
			<p>1: {serializeToString(primary)}</p>
			<p>2: {secondary ? serializeToString(secondary) : ""}</p>
		</>
	);
};

//SKILL 1:  [1, 1, 1, 2, 2, 2, 3, 3, 3, 4]
//SKILL 2:  [2, 2, 3, 4, 4, 5, 6, 6, 7, 8]
//SKILL 3:  [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//SKILL 4:  [4, 5, 6, 8, 9, 11, 12, 13, 15, 16]
//SKILL 5:  [5, 6, 8, 10, 12, 13, 15, 17, 19, 20]
