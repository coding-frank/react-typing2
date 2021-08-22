# react-typing2
A tiny React library for **animation typing effect** with optional text highlighting.

> ![example](https://github.com/coding-frank/react-typing2/blob/main/typing-effect.gif?raw=true)

- Vanilla JavaScript ⚡
- ~260kb ⚡
- no JQuery needed 🎉
- CSS3 ✔️
- ES6 ✔️

```javascript
<Typing
  speed={80}
  betweenDelay={500}
  deleteDelay={300}
  deleteSpeed={40}
  delete
  // ... you can add more props here
  data={[
    { sentence: "Typing effect..." },
    { sentence: "...with highlighting.", highlight: 'highlighting', color: '#3366cc' },
    // ...
  ]}
/>
```

## Getting started
#### Installation

```
npm install --save react-typing2
````

#### Usage

```javascript
import Typing from 'typing-react2';

// Basic setup with standard options without text highlighting.
<Typing data={{ sentence: "Typing effect..." }} />

// You can use an array to output more than one sentence.
<Typing
  data={[
    { sentence: "My first sentence." },
    { sentence: "Even more text here." },
    // ...
  ]}
/>

// To highlight text
<Typing
  data={{ 
    sentence: "The sky is blue today.", highlight: 'blue', color: '#aeccfc' 
  }}
/>

// Modify typing speed etc.
<Typing
  speed={80}
  delete // <-- will delete the text after its fully written.
  deleteSpeed={50}
  hideCursorOnExit={true}
  data={{ 
    sentence: "The sky is blue today.", highlight: 'blue', color: '#aeccfc' 
  }}
/>
````

## Options
Add some additional options to style your typing effect.
### `speed`
> The typing effect uses a delay in ms between each written letter.
>
> **Default:** `40`

### `initDelay`
> Initial delay in ms. If some delay is needed before output.
>
> **Default:** `0`

### `betweenDelay`
> After each fully written sentence will be a break in ms.
>
> **Default:** `500`

### `delete`
> A sentence can be deleted after its full appearance.
>
> **Default:** `true`

### `deleteSpeed`
> The deletion uses a delay in ms between each deleted letter.
>
> **Default:** `100`

### `deleteDelay`
> Before starting the deletion effect there will be a pause in ms.
>
> **Default:** `1500`
### `removeOnExit`
> Clear the content after the effect is completed.
>
> **Default:** `false`


## Cursor options
### `hideCursor`
> Hide the cursor.
>
> **Default:** `false`
### `cursorHeight`
> Set the height of the cursor. All units possible.
>
> **Default:** `42px`
### `cursorColor`
> Change the color of the cursor.
>
> **Default:** `#fffff`
### `cursorClass`
> Add a custom class name to the cursor.
>
> **Default:** `null`
### `hideCursorOnExit`
> Hide the blinking cursor after the effect is completed.
>
> **Default:** `false`

---

- **License** MIT
- **Made by** Frank Arlt
- **Inspired by** Typing Carousel Effect (https://codepen.io/josephwong2004/pen/ExgoKde)