import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { Creatures } from "@/data/creatures";

type CompareGalleryProps = { side: "left" | "right"; selected: Creature | null; setSelected: any };

export default function CompareGallery(props: CompareGalleryProps) {
	return (
		<div className="comparison-gallery-wrapper graybox">
			<div key={`comparison-${props.side}-side`} className="comparison-gallery">
				{Creatures.map((x: Creature) => (
					<span key={x.id} className={x === props.selected ? "side-gallery-portrait-selected" : "side-gallery-portrait"}>
						<Image
							key={x.id}
							src={`/images/medium/portraits/${x.id}.png`}
							alt={x.name}
							width={38}
							height={38}
							onClick={() => props.setSelected(x)}
						/>
					</span>
				))}
			</div>
		</div>
	);
}
