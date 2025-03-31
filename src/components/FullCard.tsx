"use client";
import Image from "next/image";
import { getAbilities, getRooms, getJobs, checkIfHasSpeed, getStatProgression, getStringOrArray, creatureLevels } from "@/functions/functions";
import { CardProps } from "./Card";
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

	const wage = getStatProgression(creature.wage);

	const research = getStatProgression(creature.researchSkill, speed);
	const manufacture = getStatProgression(creature.manufactureSkill, speed);
	const scavenger = getStatProgression(creature.scavenger.skill, speed);

	const getChickens = (num: number) => {};

	return (
		<>
			<div key={creature.name} className="graybox fullcard">
				<div>
					<Image alt="" src={`/images/medium/portraits/${creature.id}.png`} width={48} height={48} />

					<p>{creature.name}</p>
					<p>Alignment: {creature.alignment}</p>
					<p>
						Attracted:{" "}
						{Object.keys(creature.room).map((room) => (
							<span>
								{room}: {creature.room[room]}
							</span>
						))}
					</p>
					<p>
						Wage: {creature.wage}, Health: {creature.health}, Strength: {creature.strength}, Dexterity: {creature.dexterity}, Defence:{" "}
						{creature.defence}, Armour: {creature.armour}, Speed: {creature.movementSpeed}, Luck: {creature.luck}
					</p>
					<p>Type: {creature.flying ? "Flying" : "Not flying"}</p>
					<p>Living: {creature.undead ? "Undead" : "Yes"}</p>
					<p>Enemies: {creature.hates ? creature.hates : "None"}</p>
					<p>Anger jobs: {creature.angerJobs ? creature.angerJobs.join(", ") : "None"}</p>
					<br />
					<br />
					<div className="stat-wrapper">
						<picture>
							<img alt="" key="training-icon" src={`/images/icons/rooms/training.png`} className="ikon-container" />
						</picture>
						<span className="stat">{creature.training.skill}</span>
						<span className="stat">{creature.training.cost}</span>
					</div>
					<p>Primary job: {getStringOrArray(creature.job.primary)}</p>
					<p>Secondary job: {getStringOrArray(creature.job.secondary)}</p>
					<div className="row">
						Hunger:&nbsp;&nbsp;
						{[...Array(creature.hunger.chickens)].map((_, i) => {
							return <Image key={`chicken-${i}`} alt="" src={"/images/small/spells/chicken.png"} width={13} height={22} />;
						})}
						&nbsp;&nbsp;/&nbsp;&nbsp;{creature.hunger.rate}
					</div>
					{/* add a button that turns off Speed instead */}
					<button onClick={toggleSpeed}>Turn Speed {speedState ? "off" : "on"}</button>
					<div className="stat-wrapper">
						<span className="stat"></span>
						{creatureLevels.map((level) => (
							<div className="stat" key={`level-${level}`}>
								{level}
							</div>
						))}
					</div>
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
