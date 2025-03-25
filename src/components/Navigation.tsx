export default function Header() {
	return (
		<div className="graybox navigation">
			<h3>
				<a href="/">Basic Info</a>
			</h3>
			<span className="separator">|</span>
			<h3>
				<a href="/creatures">Creatures</a>
			</h3>
			<span className="separator">|</span>
			<h3>
				<a href="/compare">Compare</a>
			</h3>
			<span className="separator">|</span>
			<h3>
				<a href="/rooms">Rooms</a>
			</h3>
			<span className="separator">|</span>
			<h3>
				<a href="/spells">Spells</a>
			</h3>
			<span className="separator">|</span>
			<h3>
				<a href="/abilities">Abilities</a>
			</h3>
			<span className="separator">|</span>
			<h3>
				<a href="/attraction">Attraction</a>
			</h3>
		</div>
	);
}
