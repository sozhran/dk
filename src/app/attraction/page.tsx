import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";

type AttractionCardsProps = {
	data: Creature[];
	keyprop: string;
};

function AttractionCards(props: AttractionCardsProps) {
	return (
		<section key={props.keyprop} className="attraction-wrapper">
			{props.data.map((creature: Creature) => (
				<div key={creature.id} className="attraction-card graybox">
					<Image src={`/images/medium/portraits/${creature.id}.png`} alt={creature.name} width={48} height={48} />
					<span className="stat-wrapper">
						{Object.keys(creature.room).length > 0 ? (
							Object.keys(creature.room).map((room) => (
								<div key={`${creature.id}_${creature.room}`} className="attraction-stat-cell">
									<span>
										<img src={`/images/icons/rooms/${room}.png`} className="attraction-stat" />
									</span>
									<span>{creature.room[room]}</span>
								</div>
							))
						) : (
							<div className="attraction-stat-cell">none</div>
						)}
					</span>
				</div>
			))}
		</section>
	);
}

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
