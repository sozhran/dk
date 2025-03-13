"use client";
import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";
import Gallery from "@/components/Gallery";
import { useState } from "react";

export default function Home() {
	const [left, setLeft] = useState<string | null>("null");
	const [right, setRight] = useState<string | null>("null");
	const styleSelected = { border: "2px solid #ffa500", opacity: 1 };
	const styleNotSelected = { border: "2px solid #a9a9a9", opacity: 0.7 };

	let creatures = Creatures.filter((x: Creature) => x.faction === "creatures");
	let heroes = Creatures.filter((x: Creature) => x.faction === "heroes");

	function filterResearch(num: number, list: Creature[]) {
		let filteredList = list.filter((x) => x.researchSkill === num);
		return filteredList.map((x: Creature) => (
			<div
				key={x.textId}
				className={`portrait-square ${x.job.primary === "research" ? "bg-primary-job" : ""} ${x.job.secondary === "research" ? "bg-secondary-job" : ""} ${x.willRefuseJobs.includes("research") === true ? "bg-refuse-job" : ""}`}
			>
				<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
			</div>
		));
	}

	return (
		<>
			<div className="divide">
				<div key="gallery-left" className="gallery">
					{Creatures.map((creature: Creature) => {
						return (
							<Image
								key={creature.textId}
								alt={creature.name}
								src={`/images/small/portraits/${creature.textId}.png`}
								width={50}
								height={50}
								style={left === creature.textId ? styleSelected : styleNotSelected}
								onClick={() => setLeft(creature.textId)}
							/>
						);
					})}
				</div>
				<div key="gallery-right" className="gallery">
					{Creatures.map((creature: Creature) => {
						return (
							<Image
								key={creature.textId}
								alt={creature.name}
								src={`/images/small/portraits/${creature.textId}.png`}
								width={50}
								height={50}
								style={right === creature.textId ? styleSelected : styleNotSelected}
								onClick={() => setRight(creature.textId)}
							/>
						);
					})}
				</div>
			</div>
			<div className="divide">
				<p>{left}</p>
				<p>{right}</p>
			</div>
			<h1>Creature Abilities</h1>
			<br />
			<br />
			<section key="research" className="abilities-gallery">
				<h1>Research</h1>
				<br />
				{[5, 4, 3, 2, 1, 0].map((num) => (
					<div key={`research-${num}`} className="gallery-list">
						<div className="num-square">
							<h1>{num}</h1>
						</div>
						<div className={`imagelist ${num % 2 === 1 ? "bg-stripe1" : "bg-stripe2"}`}>{filterResearch(num, creatures)}</div>
						<div className={`imagelist ${num % 2 === 1 ? "bg-stripe1" : "bg-stripe2"}`}>{filterResearch(num, heroes)}</div>
					</div>
				))}
			</section>
			<br />
			<br />
		</>
	);
}
