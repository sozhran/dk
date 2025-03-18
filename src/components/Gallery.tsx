import Image from "next/image";
import { Creature } from "@/data/interfaces";
import { getAbilities, getRooms, getJobs } from "@/functions/getInfo";
import { Creatures } from "@/data/creatures";

export default function Gallery() {
	return (
		<div key="hoho" className="gallery">
			{Creatures.map((creature: Creature) => {
				return (
					<Image
						key={creature.id}
						alt={creature.name}
						src={`/images/small/portraits/${creature.id}.png`}
						width={50}
						height={50}
						style={{ border: "1px solid #ffffff" }}
					/>
				);
			})}
		</div>
	);
}
