import React from "react";
import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

const App = () => {
	return (
		<>
			<Player />
			<div id="challenges">
				<TimerChallenge title="easy" targetTime={1} />
				<TimerChallenge title="Not easy" targetTime={5} />
				<TimerChallenge title="Hard" targetTime={10} />
				<TimerChallenge title="Hell" targetTime={15} />
			</div>
			;
		</>
	);
};

export default App;
