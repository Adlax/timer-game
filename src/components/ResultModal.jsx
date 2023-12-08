import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(props, ref) {
	const { result, targetTime } = props;

	// const dialog = useRef();
	// useImperativeHandle(ref, () => {
	// 	return {
	// 		open() {
	// 			dialog.current.showModal();
	// 		},
	// 	};
	// });

	return (
		<dialog className="result-modal" ref={ref}>
			<h2>You {result}</h2>
			<p>
				Target time was : <strong>{targetTime} seconds</strong>
			</p>
			<p>
				You stopped the timer with <strong>n seconds left</strong>
			</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	);
});

export default ResultModal;
