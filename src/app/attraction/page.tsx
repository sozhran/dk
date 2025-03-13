import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";
import Gallery from "@/components/Gallery";

export default function Home() {
	const creatures = Creatures.filter((creature: Creature) => creature.faction === "creatures");
	const heroes = Creatures.filter((creature: Creature) => creature.faction === "heroes");

	return (
		<>
			<h1>Attraction</h1>
			<section key="creatures" className="ggg">
				{creatures.map((x: Creature) => (
					<div key={x.textId}>
						<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
					</div>
				))}
			</section>
			<section key="heroes" className="ggg">
				{heroes.map((x: Creature) => (
					<div key={x.textId}>
						<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
					</div>
				))}
			</section>
		</>
	);
}
