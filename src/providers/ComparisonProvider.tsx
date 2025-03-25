//import { useEffect, useState } from "react";
//import { ComparisonContext } from "./ComparisonContext";
//import { Creature } from "@/data/interfaces";

//export const ComparisonProvider = ({ children }) => {
//	const [creatureLeft, setCreatureLeft] = useState<Creature | null>(null);
//	const [creatureRight, setCreatureRight] = useState<Creature | null>(null);
//	const [levelLeft, setLevelLeft] = useState<number>(1);
//	const [levelRight, setLevelRight] = useState<number>(1);

//	return (
//		<ComparisonContext.Provider
//			value={(creatureLeft, setCreatureLeft, creatureRight, setCreatureRight, levelLeft, setLevelLeft, levelRight, setLevelRight)}
//		>
//			{children}
//		</ComparisonContext.Provider>
//	);
//};
