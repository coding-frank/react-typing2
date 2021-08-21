# typing-react
A tiny javascript library for **animation typing effect** with optional text highlighting.

- Vanilla JavaScript ⚡
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
#### Install

```javascript
npm install --save typing-react
````

#### Import module
Import typing-react into your React component.

```javascript
import Typing from 'typing-react';
```

#### Use it
Once you have imported the module you have access to all its props and options.

```javascript
// Basic setup with standard options and without highlighting text effect.
<Typing data={{ sentence: "Typing effect..." }} />

// You can use an array instead and add styling options
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
> Hide the cursor after the effect is completed.
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