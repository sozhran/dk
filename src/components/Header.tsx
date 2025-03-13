import Image from "next/image";

export default function Header() {
	return (
		<div key="header" className="header">
			<div key="header-top" className="header-top">
				<div>
					<Image key="header-horny" alt="header-horny" src={`/images/horny_icon.png`} width={90} height={90}></Image>
				</div>
				<div>
					<h1>Dungeon Keeper</h1>
				</div>
				<div>
					<Image key="unearth-icon" alt="unearth-icon" src={`/images/unearth_icon.png`} width={64} height={64}></Image>
				</div>
			</div>
			<div className="header-navigation">
				<h3>
					<a href="/">Basic Info</a>
				</h3>
				<h3>
					<a href="/creatures">Creatures</a>
				</h3>
				<h3>
					<a href="/rooms">Rooms</a>
				</h3>
				<h3>
					<a href="/spells">Spells</a>
				</h3>
				<h3>
					<a href="/abilities">Abilities</a>
				</h3>
				<h3>
					<a href="/attraction">Attraction</a>
				</h3>
			</div>
		</div>
	);
}

//export default function Header() {
//	return (
//		<div key="header" className="header">
//			<div key="header-top" className="header-top">
//				<div>
//					<Image key="header-horny" alt="header-horny" src={`/images/horny_icon.png`} width={90} height={90}></Image>
//				</div>
//				<div>
//					<h1>Dungeon Keeper</h1>
//				</div>
//				<div>
//					<Image key="unearth-icon" alt="unearth-icon" src={`/images/unearth_icon.png`} width={64} height={64}></Image>
//				</div>
//			</div>
//			<div className="header-navigation">
//				<h3>
//					<a href="/">Basic Info</a>
//				</h3>
//				<h3>
//					<a href="/creatures">Creatures</a>
//				</h3>
//				<h3>
//					<a href="/rooms">Rooms</a>
//				</h3>
//				<h3>
//					<a href="/spells">Spells</a>
//				</h3>
//				<h3>
//					<a href="/abilities">Abilities</a>
//				</h3>
//				<h3>
//					<a href="/attraction">Attraction</a>
//				</h3>
//			</div>
//		</div>
//	);
//}
