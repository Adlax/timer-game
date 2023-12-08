import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
	const timerPID = useRef();
	const dialog = useRef();
	const [timerExpired, setTimerExpired] = useState(false);
	const [timerStarted, setTimerStarted] = useState(false);

	const handleStart = () => {
		setTimerStarted(true);
		timerPID.current = setTimeout(() => {
			setTimerExpired(true);
			// dialog.current.open();
			dialog.current.showModal();
		}, targetTime * 1000);
	};

	const handleStop = () => {
		console.log("Stop loop");
		clearTimeout(timerPID.current);
	};

	return (
		<>
			<ResultModal result="lost" targetTime={targetTime} ref={dialog} />
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} challenge</button>
				</p>
				<p className={timerStarted ? "active" : ""}>{timerStarted ? "Time is running" : "Timer inactive"}</p>
			</section>
		</>
	);
};

export default TimerChallenge;
