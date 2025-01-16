import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";

export default function Home() {
	const creatures = Creatures.filter((creature: Creature) => creature.faction === "Creatures");
	const heroes = Creatures.filter((creature: Creature) => creature.faction === "Heroes");

	return (
		<>
			<h1>Attraction</h1>
			<section key="creatures" className="gallery">
				{creatures.map((x: Creature) => (
					<div key={x.textId}>
						<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
					</div>
				))}
			</section>
			<section key="heroes" className="gallery">
				{heroes.map((x: Creature) => (
					<div key={x.textId}>
						<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
					</div>
				))}
			</section>
		</>
	);
}
