import Image from "next/image";
import { Creature, Room, Spell } from "@/app/data/Interfaces";
import { getAbilities, getRooms, getSpells, getJobs } from "../functions/getInfo";

export default function Card(creature: Creature) {
	return (
		<div key={creature.name} className="creature-card">
			<section className="top">
				<Image key={creature.textId} alt={creature.name} src={`/images/creature_portraits/${creature.textId}.png`} width={48} height={48} />
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
