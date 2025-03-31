import Image from "next/image";
import { Creature } from "@/data/interfaces";

type AttractionCardsProps = {
	data: Creature[];
	keyprop: string;
};

export function AttractionCards(props: AttractionCardsProps) {
	return (
		<section key={props.keyprop} className="attraction-wrapper">
			{props.data.map((creature: Creature) => (
				<div key={creature.id} className="attraction-card graybox">
					<Image src={`/images/medium/portraits/${creature.id}.png`} alt={creature.name} width={48} height={48} />
					<span className="stat-wrapper">
						{Object.keys(creature.room).length > 0 ? (
							Object.keys(creature.room).map((room) => (
								<div key={`${creature.id}_${creature.room}`} className="attraction-stat-cell">
									<picture>
										<img alt="" src={`/images/icons/rooms/${room}.png`} className="attraction-stat" />
									</picture>
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
