type LevelSliderProps = { level: number; setLevel: any };

export default function LevelSlider(props: LevelSliderProps) {
	return (
		<div className="slider-container">
			<h4>Level:</h4>
			<input type="range" value={props.level} min={1} max={10} step={1} className="slider" onChange={props.setLevel} />
		</div>
	);
}
