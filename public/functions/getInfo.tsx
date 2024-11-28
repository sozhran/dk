import { Creature, Multitype } from "../data/Interfaces";

const levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const getRooms = (rooms: any) => {
	return (
		<div className="line">
			{Object.keys(rooms).map(function (key) {
				return (
					<>
						<img alt={key} src={`/images/rooms/${key}.png`} width="auto" height="auto" />
						{rooms[key]}
					</>
				);
			})}
		</div>
	);
};

const serializeSpell = (spell: string | string[]) => {
	if (typeof spell === "string") {
		return spell;
	}
	if (Array.isArray(spell)) {
		return spell.toString();
	}
};

export const getSpells = (spells: any) => {
	return levels.map(function (level) {
		return (
			<p>
				{level}: {spells[level] ? serializeSpell(spells[level]) : "-"}
			</p>
		);
	});
};

export const getAbilities = (creature: Creature) => {
	return (
		<div>
			<p>
				<img alt="training" src={`/images/rooms/trainingroom.png`} width="auto" height="auto" />
			</p>
			<p>
				<img alt="research" src={`/images/rooms/library.png`} width="auto" height="auto" />
			</p>
			<p>
				<img alt="manufacturing" src={`/images/rooms/workshop.png`} width="auto" height="auto" />
			</p>
			<p></p>
		</div>
	);
};

export const getJobs = (creature: Creature) => {
	const primary: Multitype = creature.job.primary;
	const secondary: Multitype = creature.job.secondary;
	return <div></div>;
};
