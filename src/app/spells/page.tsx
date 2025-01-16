import Image from "next/image";
import { Spell } from "@/data/interfaces";
import { Spells } from "@/data/spells";

export default function SpellsPage() {
	return (
		<>
			<h1>Spells</h1>
			<div key="spells" className="gallery">
				{Spells.map(
					(x: Spell) => (
						<p key={x.name}>{x.name}</p>
					)
					//<Image key={x.textId} src={`/images/medium/spells/${x.textId}.png`} alt={x.name} width={53} height={53} />
				)}
			</div>
		</>
	);
}
