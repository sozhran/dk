"use client";
import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { useState } from "react";
import LevelSlider from "@/components/LevelSlider";
import CompareGallery from "@/components/CompareGallery";
import CompareCard from "@/components/CompareCard";

export default function Comparison() {
	const [creatureLeft, setCreatureLeft] = useState<Creature | null>(null);
	const [creatureRight, setCreatureRight] = useState<Creature | null>(null);
	const [levelLeft, setLevelLeft] = useState<number>(1);
	const [levelRight, setLevelRight] = useState<number>(1);

	const handleSliderLeft = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value) {
			setLevelLeft(Number(event.target.value));
		}
	};

	const handleSliderRight = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value) {
			setLevelRight(Number(event.target.value));
		}
	};

	return (
		<>
			<h2>Comparison</h2>
			<div className="comparison-layout">
				<CompareGallery side="left" selected={creatureLeft} setSelected={setCreatureLeft} />
				<span></span>
				<CompareGallery side="right" selected={creatureRight} setSelected={setCreatureRight} />

				<LevelSlider level={levelLeft} setLevel={handleSliderLeft} />
				<span></span>
				<LevelSlider level={levelRight} setLevel={handleSliderRight} />

				<CompareCard contestant={creatureLeft} opponent={creatureRight} level={levelLeft} opponentLevel={levelRight} />
				<div className="flex justify-center">
					<Image alt="vs" src="https://i.imgur.com/CWkhxea.png" width={100} height={100} />
				</div>
				<CompareCard contestant={creatureRight} opponent={creatureLeft} level={levelRight} opponentLevel={levelLeft} />
			</div>
		</>
	);
}

// alt pic: "https://i.imgur.com/S8upnaV.png"
