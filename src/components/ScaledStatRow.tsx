import { creatureLevels, scaleStatWithSpeed } from "@/functions/functions";

type ScaledRowProps = { stat: string; base_value: number | null; speed: number | null };

export default function ScaledStatRow(props: ScaledRowProps) {
	let altText = "";
	let imgName = "";

	switch (props.stat) {
		case "research":
			altText = "Library";
			imgName = "research";
			break;
		case "manufacture":
			altText = "Workshop";
			imgName = "workshop";
			break;
		case "scavenger":
			altText = "Scavenger Room";
			imgName = "scavenger";
	}

	// in rare cases when creature does not possess the skill at all (=null), return 10 squares with "-" in them
	if (props.base_value === null) {
		return (
			<div className="stat-wrapper">
				<span className="stat">
					<img key={`${props.stat}-icon`} alt={altText} src={`/images/icons/rooms/${imgName}.png`} />
				</span>
				{creatureLevels.map((level) => {
					return (
						<div className="stat" key={`${props.stat}-${level}`}>
							<span>-</span>
						</div>
					);
				})}
			</div>
		);
	}

	// otherwise, calculate values for all 10 levels and return them
	const scaledStat = scaleStatWithSpeed(props.base_value);

	return (
		<div className="stat-wrapper">
			<span className="stat">
				<img key={`${props.stat}-icon`} alt={altText} src={`/images/icons/rooms/${imgName}.png`} />
			</span>
			{scaledStat.map((stat, index) => (
				<div className="stat" key={`${props.stat}-${index}`}>
					{props.speed && props.speed <= stat[0] ? (
						<span className="stat-orangebold">{stat[1]}</span>
					) : (
						<span className="stat-greenbold">{stat[0]}</span>
					)}
				</div>
			))}
		</div>
	);
}
