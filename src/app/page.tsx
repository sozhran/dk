import Card from "@/components/Card";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";
import FullCard from "@/components/FullCard";

export default function Home() {
	const creatures = Creatures.filter((creature: Creature) => creature.alignment === "evil");
	const heroes = Creatures.filter((creature: Creature) => creature.alignment === "good");

	const timemage = heroes.find((crit) => crit.textId === "time_mage");

	return (
		<>
			<h1>DK</h1>
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
		</>
	);
}
