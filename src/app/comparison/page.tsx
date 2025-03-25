"use client";
import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";
import FullCard from "@/components/FullCard";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function CreaturesPage() {
	const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
	const [selectedRight, setSelectedRight] = useState<string | null>(null);
	const [levelLeft, setLevelLeft] = useState<number>(1);
	const [levelRight, setLevelRight] = useState<number>(1);

	const creatures = Creatures.map((creature: Creature) => creature);

	return (
		<>
			<h2>Comparison</h2>
			<div className="comparison-layout">
				<div key="comparison-left-side" className="comparison-gallery">
					{creatures.map((x: Creature) => (
						<span key={x.id} className={x.id === selectedLeft ? "side-gallery-portrait-selected" : "side-gallery-portrait"}>
							<Image
								key={x.id}
								src={`/images/medium/portraits/${x.id}.png`}
								alt={x.name}
								width={33}
								height={33}
								onClick={() => setSelectedLeft(x.id)}
							/>
						</span>
					))}
				</div>
				<span></span>
				<div key="comparison-right-side" className="comparison-gallery">
					{creatures.map((x: Creature) => (
						<span key={x.id} className={x.id === selectedRight ? "side-gallery-portrait-selected" : "side-gallery-portrait"}>
							<Image
								key={x.id}
								src={`/images/medium/portraits/${x.id}.png`}
								alt={x.name}
								width={33}
								height={33}
								onClick={() => setSelectedRight(x.id)}
							/>
						</span>
					))}
				</div>
				<div className="comparison-fight graybox"></div>
				<div className="flex justify-center">
					{/*<Image alt="vs" src={"https://i.imgur.com/S8upnaV.png"} width={100} height={100} />*/}
					<Image alt="vs" src="https://i.imgur.com/CWkhxea.png" width={100} height={100} />
				</div>
				<div className="comparison-fight graybox"></div>

				{/*{selectedCreature ? <FullCard creature={selectedCreature} /> : <></>}*/}
			</div>
		</>
	);
}
