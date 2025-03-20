import Image from "next/image";
import { Spell } from "@/data/interfaces";
import { Spells } from "@/data/spells";

export default function SpellsPage() {
	return (
		<>
			<h1>Spells</h1>
			<div key="spells" className="gallery">
				{Spells.map((x: Spell, index) => (
					<div className="ikon-container">
						<img className="" key={`spell-${index}`} src={`/images/icons/spells/${x.textId}.png`} alt={x.name} />
					</div>
				))}
			</div>
		</>
	);
}
