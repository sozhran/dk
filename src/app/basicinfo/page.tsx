import Image from "next/image";
import Card from "@/components/Card";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";

export default function Home() {
	const creatures = Creatures.filter((creature: Creature) => creature.faction === "Creatures");
	const heroes = Creatures.filter((creature: Creature) => creature.faction === "Heroes");

	return (
		<>
			<h1>Basic Info</h1>
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
