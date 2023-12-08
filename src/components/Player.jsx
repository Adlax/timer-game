import React, { useRef, useState } from "react";

const Player = () => {
	const inputName = useRef();
	const [name, setName] = useState(null);

	// console.log(elt);

	const handleClick = () => {
		setName(inputName.current.value);
		inputName.current.value = "";
	};

	return (
		<section id="player">
			<h2>Welcome {name ?? "unknown entity"} </h2>
			<p>
				<input type="text" ref={inputName} />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
};

export default Player;
