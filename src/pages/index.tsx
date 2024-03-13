import { Creature, Room, Spell } from "../data/interfaces";
import * as creatures from "../data/creatures.json";

export default function Home() {
    return (
        <div className="body">
            <h1>Fucking hello!</h1>
            <div className="creature-list">
                {creatures.map((creature) => {
                    return (
                        <div
                            key={creature.id}
                            className={"creature-kvadrat " + `${creature.faction === "Heroes" ? "good" : "evil"}`}
                        >
                            {creature.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
