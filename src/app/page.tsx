import Image from "next/image";

export default function Home() {
	const getChickens = (num: number) => {
		[...Array(num)].map((_, i) => {
			return <Image key={`chicken-${i}`} alt="" src={"/images/small/spells/chicken.png"} width={13} height={22} />;
		});
	};

	return (
		<>
			<h3>Welcome!</h3>
		</>
	);
}
