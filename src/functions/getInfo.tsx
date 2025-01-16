import { Creature, Multitype } from "@/data/interfaces";

const levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const getRooms = (rooms: any) => {
	return (
		<div className="line">
			{Object.keys(rooms).map(function (key) {
				return (
					<>
						<img key={key} alt={key} src={`/images/icons/rooms/${key}.png`} width="20" height="20" />
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
	return levels.map(function (level) {
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
						<img alt="training" src={`/images/icons/rooms/training.png`} />
					</td>
					<td>{creature.skillTraining}</td>
				</tr>
				<tr>
					<td>
						<img alt="research" src={`/images/icons/rooms/research.png`} />
					</td>
					<td>{creature.research.skill}</td>
				</tr>
				<tr>
					<td>
						<img alt="manufacturing" src={`/images/icons/rooms/workshop.png`} />
					</td>
					<td>{creature.manufacture.skill}</td>
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
