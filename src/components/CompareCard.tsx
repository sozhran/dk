import Image from "next/image";
import { Creature } from "@/data/interfaces";

export type CardProps = { contestant: Creature | null; opponent: Creature | null; level: number; opponentLevel: number };

export default function CompareCard(props: CardProps) {
	const compareStats = (stat: keyof Creature) => {
		if (!props.contestant || !props.opponent || !props.contestant[stat] || !props.opponent[stat]) {
			return;
		}

		if (props.contestant[stat] === props.opponent[stat]) {
			return "stat-greenbold";
		}

		return props.contestant[stat] > props.opponent[stat] ? "stat-orangebold" : "";
	};

	if (!props.contestant) {
		return (
			<div className="compare-card graybox">
				<h4>"Select a creature"</h4>;
			</div>
		);
	}

	return (
		<div className="compare-card graybox">
			<h4>{props.contestant.name}</h4>
			<div style={{ color: "red", fontWeight: "700" }}>{props.level}</div>
			<div className={compareStats("wage")}>Wage: {props.contestant.wage}</div>
		</div>

		//<div key={creature.name} className="compare-card">
		//	<section className="top">
		//		<Image key={creature.id} alt={creature.name} src={`/images/small/portraits/${creature.id}.png`} width={48} height={48} />
		//		<div className="critname">
		//			<h2>{creature.name}</h2>
		//		</div>
		//	</section>
		//	<section className="info">
		//		<div>
		//			<div className="rooms">
		//				<h4>Rooms</h4>
		//				{creature.room ? getRooms(creature.room) : "-"}
		//			</div>
		//			<div className="jobs">
		//				<h4>Jobs</h4>
		//				{getJobs(creature)}
		//			</div>
		//		</div>
		//		<div className="abilities">
		//			<h4>Abilities</h4>
		//			{getAbilities(creature)}
		//		</div>
		//	</section>
		//</div>
	);
}
