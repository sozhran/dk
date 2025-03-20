import Image from "next/image";
import { Creature, Room, Spell } from "@/data/interfaces";
import { getAbilities, getRooms, getSpells, getJobs } from "@/functions/functions";

export type CardProps = { creature: Creature };

export default function Card(props: CardProps) {
	return (
		<div key={props.creature.name} className="creature-card">
			<section className="top">
				<Image
					key={props.creature.id}
					alt={props.creature.name}
					src={`/images/small/portraits/${props.creature.id}.png`}
					width={48}
					height={48}
				/>
				<div className="critname">
					<h2>{props.creature.name}</h2>
				</div>
			</section>
			<section className="info">
				<div>
					<div className="rooms">
						<h4>Rooms</h4>
						{props.creature.room ? getRooms(props.creature.room) : "-"}
					</div>
					<div className="jobs">
						<h4>Jobs</h4>
						{getJobs(props.creature)}
					</div>
				</div>
				<div className="abilities">
					<h4>Abilities</h4>
					{getAbilities(props.creature)}
				</div>
			</section>
		</div>
	);
}
