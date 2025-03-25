"use client";
import Image from "next/image";
import { getAbilities, getRooms, getJobs, checkIfHasSpeed } from "@/functions/functions";
import { CardProps } from "./Card";
import { scaleStat, scaleStatWithSpeed } from "@/functions/functions";
import ScaledStatRow from "./ScaledStatRow";
import { useState } from "react";
import { Creatures } from "@/data/creatures";
import { Creature } from "@/data/interfaces";

export default function FullCard(props: CardProps) {
	const [speedState, setSpeedState] = useState<boolean>(true);

	const creature = Creatures.find((creature: Creature) => creature.id === props.creature);

	if (!creature) {
		return;
	}

	const toggleSpeed = () => {
		if (speedState) {
			setSpeedState(false);
		} else {
			setSpeedState(true);
		}
	};

	let speed = checkIfHasSpeed(creature);

	const research = scaleStatWithSpeed(creature.researchSkill);
	const manufacture = scaleStatWithSpeed(creature.manufactureSkill);
	const scavenger = scaleStatWithSpeed(creature.training.skill);

	return (
		<>
			<div key={creature.name} className="graybox fullcard">
				<div>
					<img src={`/images/small/portraits/${creature.id}.png`} />
					<br />
					<br />

					<div className="stat-wrapper">
						<img key="training-icon" src={`/images/icons/rooms/training.png`} className="ikon-container" />
						<span className="stat">{creature.training.skill}</span>
						<span className="stat">{creature.training.cost}</span>
					</div>

					{/* add a button that turns off Speed instead */}
					<button onClick={toggleSpeed}>Turn Speed {speedState ? "off" : "on"}</button>

					<ScaledStatRow stat="research" base_value={creature.researchSkill} speed={speedState ? speed : null} />
					<ScaledStatRow stat="manufacture" base_value={creature.manufactureSkill} speed={speedState ? speed : null} />
					<ScaledStatRow stat="scavenger" base_value={creature.scavenger.skill} speed={speedState ? speed : null} />

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
