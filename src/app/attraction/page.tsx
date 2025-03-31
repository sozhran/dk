import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";
import { AttractionCards } from "@/components/AttractionCard";

export default function Home() {
	const creatures = Creatures.filter((creature: Creature) => creature.alignment === "evil");
	const heroes = Creatures.filter((creature: Creature) => creature.alignment === "good");

	return (
		<>
			<h1>Attraction</h1>

			<h2>Creatures</h2>
			<AttractionCards data={creatures} keyprop="creatures" />

			<h2>Heroes</h2>
			<AttractionCards data={heroes} keyprop="heroes" />
		</>
	);
}
