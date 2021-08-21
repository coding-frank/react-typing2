// use for loop as it is the fastest option
// https://betterprogramming.pub/which-is-the-fastest-while-for-foreach-for-of-9022902be15e

import React from 'react';
import PropTypes from 'prop-types';

const Typing: React.FC<TypingProps> = (props) => {
  const elRef = React.useRef();
  const mainRef = React.useRef();
  const cursorRef = React.useRef();

  React.useEffect(() => {
    carousel(elRef, mainRef, cursorRef, props);
  }, [props]);

  return (
    <div ref={mainRef} className="typing-container">
      <span ref={elRef} id="sentence" className="sentence"></span>

      {!props.hideCursor && (
        <span
          ref={cursorRef}
          style={{ background: props.cursorColor, height: props.cursorHeight }}
          className={'input-cursor' + (props.cursorClass ? ` ${props.cursorClass}` : '')}
        ></span>
      )}
    </div>
  );
};

const carousel = async (ref, mainRef, cursorRef, props) => {
  let highlightStart, highlightEnd;
  let dataArr = [];

  // set to array
  if (!Array.isArray(props.data)) {
    dataArr.push(props.data);
  } else {
    dataArr = props.data;
  }

  for (let i = 0; i < dataArr.length; i++) {
    highlightStart = null;
    highlightEnd = null;

    if (dataArr[i].sentence.length > 1) {
      // highlight something
      if (dataArr[i].highlight) {
        const startPos = dataArr[i].sentence.indexOf(dataArr[i].highlight);
        if (startPos > -1) {
          highlightStart = startPos;
          highlightEnd = dataArr[i].highlight.length - 1;
        }
      }

      // output sentence
      await typeSentence(ref, dataArr[i].sentence, highlightStart, highlightEnd, dataArr[i].color, props.speed);

      // clear sentence
      if (props.delete) {
        // skip on last item if removeOnExit = false
        if (i === dataArr.length - 1 && !props.removeOnExit) {
          continue;
        }

        await waitForMs(props.deleteDelay);
        await deleteSentence(ref, props.speed);
      }

      // pause
      await waitForMs(props.betweenDelay);
    }
  }

  if (props.removeOnExit) {
    mainRef.current.remove();
  }
  if (props.hideCursorOnExit) {
    cursorRef.current.remove();
  }
};

const waitForMs = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const typeSentence = async (ref, sentence, highlightStart = null, highlightEnd = null, color = null, delay = 100) => {
  const letters = sentence.split('');

  for (let i = 0; i < letters.length; i++) {
    await waitForMs(delay);

    // create new span element with letter
    const spanEl = document.createElement('span');
    const spanText = document.createTextNode(letters[i]);
    spanEl.appendChild(spanText);

    // change color
    if (color) {
      if (i >= highlightStart && i <= highlightEnd + highlightStart) {
        spanEl.style.color = color;
      }
    }

    // append to reference
    ref.current.appendChild(spanEl);
  }
};

const deleteSentence = async (ref, speed) => {
  const elements = ref.current.children;
  const elLength = elements.length;

  for (let i = 0; i < elLength; i++) {
    await waitForMs(speed);

    elements[elements.length - 1].remove();
  }
};

Typing.defaultProps = {
  speed: 40, // 20-300
  betweenDelay: 500,
  deleteDelay: 1500,
  deleteSpeed: 100,
	
  hideCursor: false,
  hideCursorOnExit: false,
  cursorClass: null,
  cursorColor: null,
  cursorHeight: '42px',
  delete: true,
  removeOnExit: false,
};

Typing.propTypes = {
  speed: PropTypes.number,
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
  data: PropTypes.array,
};

export default Typing;
