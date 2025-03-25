import Image from "next/image";
import { Creature, Room, Spell } from "@/data/interfaces";
import { getAbilities, getRooms, getSpells, getJobs } from "@/functions/functions";
import { Creatures } from "@/data/creatures";

export type CardProps = { creature: string };

export default function Card(props: CardProps) {
	const creature = Creatures.find((creature: Creature) => creature.id === props.creature);

	if (!creature) {
		return;
	}

	return (
		<div key={creature.name} className="creature-card">
			<section className="top">
				<Image key={creature.id} alt={creature.name} src={`/images/small/portraits/${creature.id}.png`} width={48} height={48} />
				<div className="critname">
					<h2>{creature.name}</h2>
				</div>
			</section>
			<section className="info">
				<div>
					<div className="rooms">
						<h4>Rooms</h4>
						{creature.room ? getRooms(creature.room) : "-"}
					</div>
					<div className="jobs">
						<h4>Jobs</h4>
						{getJobs(creature)}
					</div>
				</div>
				<div className="abilities">
					<h4>Abilities</h4>
					{getAbilities(creature)}
				</div>
			</section>
		</div>
	);
}
