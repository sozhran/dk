import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";

export default function Home() {
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

	function filterWorkshop(num: number, list: Creature[]) {
		let filteredList = list.filter((x: Creature) => x.manufactureSkill === num);
		return filteredList.map((x: Creature) => (
			<div
				key={x.textId}
				className={`portrait-square ${x.job.primary === "manufacturing" ? "bg-primary-job" : ""} ${x.job.secondary === "manufacturing" ? "bg-secondary-job" : ""} ${
					x.willRefuseJobs.includes("manufacturing") === true ? "bg-refuse-job" : ""
				}`}
			>
				<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
			</div>
		));
	}

	function filterTraining(num: number, list: Creature[]) {
		let filteredList = list.filter((x: Creature) => x.training.skill === num);
		return filteredList.map((x: Creature) => (
			<div key={x.textId} className={`portrait-square ${x.job.primary === "training" ? "bg-primary-job" : ""} ${x.job.secondary === "training" ? "bg-secondary-job" : ""}`}>
				<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
			</div>
		));
	}

	return (
		<>
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
			<section key="manufacturing" className="abilities-gallery">
				<h1>Manufacturing</h1>
				<br />
				{[4, 3, 2, 1, 0].map((num) => (
					<div key={`manufacturing-${num}`} className="gallery-list">
						<div className="num-square">
							<h1>{num}</h1>
						</div>
						<div className={`imagelist ${num % 2 === 0 ? "bg-stripe1" : "bg-stripe2"}`}>{filterWorkshop(num, creatures)}</div>
						<div className={`imagelist ${num % 2 === 0 ? "bg-stripe1" : "bg-stripe2"}`}>{filterWorkshop(num, heroes)}</div>
					</div>
				))}
			</section>
			<br />
			<br />
			<section key="training" className="abilities-gallery">
				<h1>Training</h1>
				<br />
				{[4, 3, 2, 1].map((num) => (
					<div key={`training-${num}`} className="gallery-list">
						<div className="num-square">
							<h1>{num}</h1>
						</div>
						<div className={`imagelist ${num % 2 === 0 ? "bg-stripe1" : "bg-stripe2"}`}>{filterTraining(num, creatures)}</div>
						<div className={`imagelist ${num % 2 === 0 ? "bg-stripe1" : "bg-stripe2"}`}>{filterTraining(num, heroes)}</div>
					</div>
				))}
			</section>
		</>
	);
}
