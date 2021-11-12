// use for loop as it is the fastest option
// https://betterprogramming.pub/which-is-the-fastest-while-for-foreach-for-of-9022902be15e

import * as React from "react";
import * as PropTypes from "prop-types";
import "./style.scss";
import * as Types from "./types";

const Typing: React.FC<Types.TypingProps> = (props) => {
	const elRef = React.useRef<HTMLSpanElement>(null);
	const mainRef = React.useRef<HTMLDivElement>(null);
	const cursorRef = React.useRef<HTMLSpanElement>(null);

	const carousel = async (ref: React.RefObject<HTMLSpanElement>, mainRef: React.RefObject<HTMLDivElement>, cursorRef: React.RefObject<HTMLSpanElement>) => {
		let highlightStart, highlightEnd;
		let dataArr2 = props.data;
		let loop = props.loop;

		// set to array
		if (!Array.isArray(props.data)) {
			dataArr2.push(props.data);
		} else {
			dataArr2 = props.data;
		}

		const dataArr = !Array.isArray(props.data) ? [props.data] : props.data;

		do {
			for (let i = 0; i < dataArr.length; i++) {
				highlightStart = null;
				highlightEnd = null;

				if (dataArr[i].sentence.length > 1) {
					// highlight something
					if (dataArr[i].highlight) {
						const startPos = dataArr[i].sentence.indexOf(dataArr[i].highlight!);
						if (startPos > -1) {
							highlightStart = startPos;
							highlightEnd = dataArr[i].highlight!.length - 1;
						}
					}

					// output sentence
					await typeSentence(ref, dataArr[i].sentence, highlightStart, highlightEnd, dataArr[i].color!, props.speed!);

					// clear sentence
					if (props.delete) {
						// skip on last item if removeOnExit = false
						if (i === dataArr.length - 1 && !props.removeOnExit) {
							continue;
						}

						await waitForMs(props.deleteDelay!);
						await deleteSentence(ref, props.speed!);
					}

					// pause
					await waitForMs(props.betweenDelay!);
				}
			}

			if (!props.infiniteLoop) {
				if (props.removeOnExit) {
					mainRef.current!.remove();
				}
				if (props.hideCursorOnExit) {
					cursorRef.current!.remove();
				}
			}

			loop++;
		} while (props.infiniteLoop === true || (props.infiniteLoop === false && loop < props.loop));
	};

	React.useEffect(() => {
		setTimeout(() => {
			carousel(elRef, mainRef, cursorRef);
		}, props.initDelay);
	}, []);

	return (
		<div ref={mainRef} className='typing-container'>
			<span ref={elRef} id='sentence' className='sentence'></span>

			{!props.hideCursor && (
				<span ref={cursorRef} style={{ background: `${props.cursorColor}`, height: `${props.cursorHeight}` }} className={"input-cursor" + (props.cursorClass ? ` ${props.cursorClass}` : "")}></span>
			)}
		</div>
	);
};

const waitForMs = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const typeSentence = async (ref: React.RefObject<HTMLSpanElement>, sentence: string, highlightStart: number | null, highlightEnd: number | null, color: string | null, delay: number) => {
	const letters = sentence.split("");

	for (let i = 0; i < letters.length; i++) {
		await waitForMs(delay);

		// create new span element with letter
		const spanEl = document.createElement("span");
		const spanText = document.createTextNode(letters[i]);
		spanEl.appendChild(spanText);

		// change color
		if (color && highlightStart && highlightEnd) {
			if (i >= highlightStart && i <= highlightEnd + highlightStart) {
				spanEl.style.color = color;
			}
		}

		// append to reference
		if (ref.current !== null) {
			ref.current.appendChild(spanEl);
		}
	}
};

const deleteSentence = async (ref: React.RefObject<HTMLSpanElement>, speed: number) => {
	const elements = ref.current!.children;
	const elLength = elements.length;

	for (let i = 0; i < elLength; i++) {
		await waitForMs(speed);

		elements[elements.length - 1].remove();
	}
};

Typing.defaultProps = {
	speed: 40,
	initDelay: 0,
	loop: 1,
	infiniteLoop: false,
	betweenDelay: 500,
	deleteDelay: 1500,
	deleteSpeed: 100,
	hideCursor: false,
	hideCursorOnExit: false,
	cursorClass: null,
	cursorColor: null,
	cursorHeight: "42px",
	delete: true,
	removeOnExit: false
};

Typing.propTypes = {
	speed: PropTypes.number,
	initDelay: PropTypes.number,
	loop: PropTypes.number,
	infiniteLoop: PropTypes.bool,
	betweenDelay: PropTypes.number,
	deleteDelay: PropTypes.number,
	deleteSpeed: PropTypes.number,
	hideCursor: PropTypes.bool,
	hideCursorOnExit: PropTypes.bool,
	cursorClass: PropTypes.string,
	cursorColor: PropTypes.string,
	cursorHeight: PropTypes.string,
	delete: PropTypes.bool,
	removeOnExit: PropTypes.bool,
	data: PropTypes.array
};

export default Typing;
