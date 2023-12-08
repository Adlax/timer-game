import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
	const timerPID = useRef();
	const dialog = useRef();

	const [remainingTime, setTimeRemaining] = useState(targetTime * 1000);
	const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

	if (remainingTime <= 0) {
		clearInterval(timerPID.current);
		dialog.current.showModal();
	}

	const handleReset = () => {
		setTimeRemaining(targetTime * 1000);
	};

	const handleStart = () => {
		timerPID.current = setInterval(() => {
			setTimeRemaining((oldState) => oldState - 10);
		}, 10);
	};

	const handleStop = () => {
		dialog.current.showModal();
		clearInterval(timerPID.current);
	};

	return (
		<>
			<ResultModal remainingTime={remainingTime} targetTime={targetTime} ref={dialog} handleReset={handleReset} />
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start"} challenge</button>
				</p>
				<p className={timerIsActive ? "active" : ""}>{timerIsActive ? "Time is running..." : "Timer inactive"}</p>
			</section>
		</>
	);
};

export default TimerChallenge;
