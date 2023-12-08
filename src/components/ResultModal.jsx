import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(props, ref) {
	const { targetTime, remainingTime, handleReset } = props;

	const userLost = remainingTime <= 0;
	const formatTime = (time) => (time / 1000).toFixed(2);
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

	// const dialog = useRef();
	// useImperativeHandle(ref, () => {
	// 	return {
	// 		open() {
	// 			dialog.current.showModal();
	// 		},
	// 	};
	// });

	return (
		<dialog className="result-modal" ref={ref} className="result-modal" onClose={handleReset}>
			{userLost && <h2>You lost</h2>}
			{!userLost && <h2>Your score is : {score}</h2>}
			<p>
				Target time was : <strong>{targetTime} seconds</strong>
			</p>
			<p>
				You stopped the timer with <strong>{formatTime(remainingTime)} seconds left</strong>
			</p>
			<form method="dialog" onSubmit={handleReset}>
				<button>Close</button>
			</form>
		</dialog>
	);
});

export default ResultModal;
