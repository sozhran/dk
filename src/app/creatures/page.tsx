import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";

export default function CreaturesPage() {
	const creatures = Creatures.filter((creature: Creature) => creature.faction === "creatures");
	const heroes = Creatures.filter((creature: Creature) => creature.faction === "heroes");

	return (
		<>
			<h2>Creatures</h2>
			<div key="creatures" className="gallery">
				{creatures.map((x: Creature) => (
					<Image key={x.textId} src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
				))}
			</div>
			<div key="heroes" className="gallery">
				{heroes.map((x: Creature) => (
					<Image key={x.textId} src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
				))}
			</div>
		</>
	);
}
