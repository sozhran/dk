"use client";
import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";
import FullCard from "@/components/FullCard";
import { useState } from "react";

export default function CreaturesPage() {
	const [selectedCreature, setSelectedCreature] = useState<string>("archer");

	const creatures = Creatures.map((creature: Creature) => creature);

	return (
		<>
			<h2>Creatures</h2>
			<br />
			<div className="grid-layout">
				<div key="creatures" className="side-gallery graybox">
					{creatures.map((x: Creature) => (
						<span key={x.id} className={x.id === selectedCreature ? "side-gallery-portrait-selected" : "side-gallery-portrait"}>
							<Image
								key={x.id}
								src={`/images/medium/portraits/${x.id}.png`}
								alt={x.name}
								width={48}
								height={48}
								onClick={() => setSelectedCreature(x.id)}
							/>
						</span>
					))}
				</div>

				{selectedCreature ? <FullCard creature={selectedCreature} /> : <></>}
			</div>
		</>
	);
}
