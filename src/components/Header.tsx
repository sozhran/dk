"use client";
import Image from "next/image";

export default function Header() {
	return (
		<div key="header" className="header">
			<div>
				<Image key="header-horny" alt="header-horny" src={`/images/horny_icon.png`} width={90} height={90}></Image>
			</div>
			<div>
				<h1>Dungeon Keeper</h1>
				<h4>A fan site</h4>
			</div>
			<div>
				<Image key="unearth-icon" alt="unearth-icon" src={`/images/unearth_icon.png`} width={64} height={64}></Image>
			</div>
		</div>
	);
}
