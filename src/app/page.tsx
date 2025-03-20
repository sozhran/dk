import Card from "@/components/Card";
import { Creature, Room } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";
import FullCard from "@/components/FullCard";
import { Rooms } from "@/data/rooms";

export default function Home() {
	const creatures = Creatures.filter((creature: Creature) => creature.alignment === "evil");
	const heroes = Creatures.filter((creature: Creature) => creature.alignment === "good");

	const timemage = heroes.find((crit) => crit.id === "time_mage");

	return (
		<>
			{timemage ? <FullCard creature={timemage} /> : <></>}
			{/*<section key="creatures" className="gallery">
				{creatures.map((x: Creature) => (
					<Card key={x.textId} {...x} />
				))}
			</section>
			<section key="heroes" className="gallery">
				{heroes.map((x: Creature) => (
					<Card key={x.textId} {...x} />
				))}
			</section>*/}
			<div className="stat-wrapper">
				{Rooms.map((room: Room) => {
					return (
						<div className="ikon-container">
							<img key={room.textId} alt={room.textId} src={`/images/icons/rooms/${room.textId}.png`} className="ikon" />
						</div>
					);
				})}
			</div>
		</>
	);
}
