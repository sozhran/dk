import Image from "next/image";
import Card from "@/components/Card";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";

export default function Home() {
	let creatures = Creatures.filter((x: Creature) => x.faction === "Creatures");
	let heroes = Creatures.filter((x: Creature) => x.faction === "Heroes");

	function filterResearch(num: number, list: Creature[]) {
		let filteredList = list.filter((x) => x.research.skill === num);
		return filteredList.map((x: Creature) => (
			<span className={`portrait-square ${x.job.primary === "research" ? "bg-primary-job" : ""} ${x.job.secondary === "research" ? "bg-secondary-job" : ""} ${x.research.willRefuseJob === true ? "bg-refuse-job" : ""}`}>
				<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
			</span>
		));
	}

	function filterWorkshop(num: number, list: Creature[]) {
		let filteredList = list.filter((x: Creature) => x.manufacture.skill === num);
		return filteredList.map((x: Creature) => (
			<span className={`portrait-square ${x.job.primary === "manufacturing" ? "bg-primary-job" : ""} ${x.job.secondary === "manufacturing" ? "bg-secondary-job" : ""} ${x.manufacture.willRefuseJob === true ? "bg-refuse-job" : ""}`}>
				<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
			</span>
		));
	}

	function filterTraining(num: number, list: Creature[]) {
		let filteredList = list.filter((x: Creature) => x.skillTraining === num);
		return filteredList.map((x: Creature) => (
			<span className={`portrait-square ${x.job.primary === "training" ? "bg-primary-job" : ""} ${x.job.secondary === "training" ? "bg-secondary-job" : ""}`}>
				<Image src={`/images/medium/portraits/${x.textId}.png`} alt={x.name} width={48} height={48} />
			</span>
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
					<div className="gallery-list">
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
					<span className="gallery-list">
						<div className="num-square">
							<h1>{num}</h1>
						</div>
						<div className={`imagelist ${num % 2 === 0 ? "bg-stripe1" : "bg-stripe2"}`}>{filterWorkshop(num, creatures)}</div>
						<div className={`imagelist ${num % 2 === 0 ? "bg-stripe1" : "bg-stripe2"}`}>{filterWorkshop(num, heroes)}</div>
					</span>
				))}
			</section>
			<br />
			<br />
			<section key="training" className="abilities-gallery">
				<h1>Training</h1>
				<br />
				{[4, 3, 2, 1].map((num) => (
					<span className="gallery-list">
						<div className="num-square">
							<h1>{num}</h1>
						</div>
						<div className={`imagelist ${num % 2 === 0 ? "bg-stripe1" : "bg-stripe2"}`}>{filterTraining(num, creatures)}</div>
						<div className={`imagelist ${num % 2 === 0 ? "bg-stripe1" : "bg-stripe2"}`}>{filterTraining(num, heroes)}</div>
					</span>
				))}
			</section>
		</>
	);
}
