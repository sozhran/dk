import Image from "next/image";
import { Spell } from "@/data/interfaces";
import { Spells } from "@/data/spells";

export default function CreaturesPage() {
	return (
		<>
			<h2>Spells</h2>
			<div key="spells" className="gallery">
				{Spells.map((x: Spell) => (
					<Image src={`/images/medium/spells/${x.textId}.png`} alt={x.name} width={53} height={53} />
				))}
			</div>
		</>
	);
}
