import Image from "next/image";
import Card from "@/components/Card";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";

export default function Home() {
	function filterList(num: number) {
		let flt = Creatures.filter((x: Creature) => x.research.skill === num);
		return flt.map((x: Creature) => (
			<p>
				{x.name}({num})
			</p>
		));
	}

	return (
		<>
			<h1>Creature Abilities</h1>
			<section key="research" className="gallery">
				{[0, 1, 2, 3, 4, 5].map((num) => filterList(num))}
			</section>
			{/*<section key="manufacturing" className="gallery">
				{heroes.map((x: Creature) => (
					<Card {...x} />
				))}
			</section>
			<section key="training" className="gallery">
				{heroes.map((x: Creature) => (
					<Card {...x} />
				))}
			</section>*/}
		</>
	);
}
