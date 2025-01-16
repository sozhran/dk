import Image from "next/image";
import { Room } from "@/data/interfaces";
import { Rooms } from "@/data/rooms";

export default function RoomsPage() {
	return (
		<>
			<h1>Rooms</h1>
			<div key="rooms" className="gallery">
				{Rooms.map((x: Room) => (
					<Image key={x.textId} src={`/images/large/rooms/${x.textId}.png`} alt={x.name} width={73} height={73} />
				))}
			</div>
		</>
	);
}
