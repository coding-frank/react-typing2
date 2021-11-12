type TypingDataProps = {
	sentence: string;
	highlight?: string | null | (string | null | null);
	color?: string | null | (string | null | null);
};
// here we go
export interface TypingProps {
	speed?: number;
	infiniteLoop?: boolean;
	loop?: number;
	initDelay?: number;
	betweenDelay?: number;
	deleteDelay?: number;
	deleteSpeed?: number;
	delete?: boolean;
	hideCursor?: boolean;
	hideCursorOnExit?: boolean;
	removeOnExit?: boolean;
	cursorClass?: string | null;
	cursorColor?: string | null;
	cursorHeight?: string;
	data: TypingDataProps[];
}
