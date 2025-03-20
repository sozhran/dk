import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";
import FullCard from "@/components/FullCard";

export default function CreaturesPage() {
	const creatures = Creatures.map((creature: Creature) => creature);

	const timemage = creatures.find((crit) => crit.id === "time_mage");

	return (
		<>
			<h2>Creatures</h2>
			<br />
			<div className="grid-layout">
				<div key="creatures" className="side-gallery">
					{creatures.map((x: Creature) => (
						<span key={x.id} className="side-gallery-image">
							<Image key={x.id} src={`/images/medium/portraits/${x.id}.png`} alt={x.name} width={48} height={48} />
						</span>
					))}
				</div>

				{timemage ? <FullCard creature={timemage} /> : <></>}
			</div>
		</>
	);
}
