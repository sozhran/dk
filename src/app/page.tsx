import Image from "next/image";
import Card from "./components/card";
import { Creature, Room, Spell } from "./data/Interfaces";
import { Creatures, Spells, Rooms } from "./data/Creatures";

export default function Home() {
	const creatures = Creatures.filter((creature: Creature) => creature.faction === "Creatures");
	const heroes = Creatures.filter((creature: Creature) => creature.faction === "Heroes");

	const testRoom = { lair: 20, trainingRoom: 36, hatchery: 25 };

	const fuckYou = (testRoom: any) => {
		Object.keys(testRoom).map(function (key) {
			return (
				<div className="noresize">
					<img alt={key} src={`/images/rooms/${key}.png`} />
					<div>{testRoom[key] ? testRoom[key] : <></>}</div>
				</div>
			);
		});
	};

	return (
		<>
			<h1>DK</h1>
			<section key="creatures" className="gallery">
				{creatures.map((x: Creature) => (
					<Card {...x} />
				))}
			</section>
			<section key="heroes" className="gallery">
				{heroes.map((x: Creature) => (
					<Card {...x} />
				))}
			</section>
		</>
	);
}
