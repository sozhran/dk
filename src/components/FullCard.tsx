import { getAbilities, getRooms, getJobs, checkIfHasSpeed } from "@/functions/functions";
import { CardProps } from "./Card";
import { scaleStat, scaleStatWithSpeed } from "@/functions/functions";

export default function FullCard(props: CardProps) {
	let speed = checkIfHasSpeed(props.creature);

	const training = scaleStat(props.creature.training.skill);
	const research = scaleStatWithSpeed(props.creature.researchSkill);
	const manufacture = scaleStatWithSpeed(props.creature.manufactureSkill);
	const scavenger = scaleStatWithSpeed(props.creature.training.skill);

	return (
		<>
			<div key={props.creature.name} className="graybox fullcard">
				<div>
					<img src={`/images/small/portraits/${props.creature.id}.png`} className="ikon" />
					<br />
					<br />

					<div className="stat-wrapper">
						<span className="stat">
							<img key="training-icon" alt="Training Room" src={`/images/icons/rooms/training.png`} />
						</span>
						{training.map((stat, index) => (
							<span className="stat" key={`training-${index}`}>
								{stat}
							</span>
						))}
					</div>
					<div className="stat-wrapper">
						<span className="stat">
							<img key="library-icon" alt="Library" src={`/images/icons/rooms/research.png`} />
						</span>
						{research.map((stat, index) => (
							<span className="stat" key={`research-${index}`}>
								{speed && speed <= stat[0] ? `${stat[0]} (${stat[1]})` : stat[0]}
							</span>
						))}
					</div>
					<div className="stat-wrapper">
						<span className="stat">
							<img key="workshop-icon" alt="Workshop" src={`/images/icons/rooms/workshop.png`} />
						</span>
						{manufacture.map((stat, index) => (
							<span className="stat" key={`manufacture-${index}`}>
								{speed && speed <= stat[0] ? `${stat[0]} (${stat[1]})` : stat[0]}
							</span>
						))}
					</div>
					<div className="stat-wrapper">
						<span className="stat">
							<span className="ikon-container">
								<img key="scavenger-icon" alt="Scavenger Room" src={`/images/icons/rooms/scavenger.png`} />
							</span>
						</span>
						{scavenger.map((stat, index) => (
							<span className="stat" key={`scavenger-${index}`}>
								{speed && speed <= stat[0] ? `${stat[0]} (${stat[1]})` : stat[0]}
							</span>
						))}
					</div>
					{/*<Image key={props.creature.id} alt={props.creature.name} src={`/images/small/portraits/${props.creature.id}.png`} />*/}
					{/*<section className="top">
				
				<div className="top">
					<h2>{props.creature.name}</h2>
				</div>
			</section>
			<section className="info">
				<div>
					<div className="rooms">
						<h4>Rooms</h4>
						{props.creature.room ? getRooms(props.creature.room) : "-"}
					</div>
					<div className="jobs">
						<h4>Jobs</h4>
						{getJobs(props.creature)}
					</div>
				</div>
				<div className="abilities">
					<h4>Abilities</h4>
					{getAbilities(props.creature)}
				</div>
				<p>{scaleStatTo10(props.creature.researchSkill, speed)}</p>
			</section>*/}
				</div>
			</div>
		</>
	);
}
