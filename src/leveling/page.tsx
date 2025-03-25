import Image from "next/image";
import { Spell } from "@/data/interfaces";
import { Spells } from "@/data/spells";

export default function LevelingStatsPage() {
	return (
		<>
			<h1>Leveling Stats</h1>
			<div key="leveling" className="gallery">
				{Spells.map(
					(x: Spell) => (
						<p key={x.name}>{x.name}</p>
					)
					//<Image key={x.textId} src={`/images/medium/spells/${x.textId}.png`} alt={x.name} width={53} height={53} />
				)}
			</div>
			<p>
				These stats were gathered using a 5x5 Training Room running at 98% efficiency (2 entrances without doors) and a slightly imperfect
				dungeon layout (with Hatchery being next door, but Lair and Treasury one room across from TR).
			</p>
			<p>Wages are not included in costs and counted separately.</p>
			<p>
				These numbers are nowhere near cast in stone and will range considerably depending on lunch/payday breaks timing, layout, room
				efficiency, potential queues in the Training Room, etc.
			</p>
			<p>
				Also, creatures with the same skill get hungry at different times, take different amounts of time to reach the Hatchery/Treasury and
				go back, etc.
			</p>
			<p>
				For example, Warlock and Druid should have the same timings throughout the whole process - and they do!, except a 5-second difference
				at level 5, which I can't explain, but it's there. Mostly like these slow walkers became hungry at different corners of the Training
				Room, but who knows ¯\_(ツ)_/¯
			</p>

			<p>
				P.S. Bed positions in a Lair also can make a difference, but I don't recall anyone taking a sleep break during the tests. I wasn't
				looking at the game 100% of the time, though.
			</p>
		</>
	);
}
