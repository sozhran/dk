import Image from "next/image";
import { Creature, Room, Spell } from "@/app/data/Interfaces";
import { getAbilities, getRooms, getSpells, getJobs } from "../functions/getInfo";

export default function Card(creature: Creature) {
	return (
		<div className="creature-card">
			<section className="top">
				<Image className="critportrait" alt={creature.textId} src={`/images/creature_portraits/${creature.textId}.png`} width={48} height={48} />
				<div className="critname">
					<h2>{creature.name}</h2>
				</div>
			</section>
			<section className="info">
				<div className="rooms">
					<h6>Rooms</h6>
					{getRooms(creature.room)}
				</div>
				<div className="spells">
					<h6>Spells</h6>
					{getSpells(creature.spells)}
				</div>
				<div className="jobs">
					<h6>Jobs</h6>
					{getJobs(creature)}
				</div>
				<div className="abilities">
					<h6>Abilities</h6>
					{getAbilities(creature)}
				</div>
			</section>
		</div>
	);
}
