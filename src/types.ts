type TypingDataProps = {
	sentence: string;
	highlight?: string | null | (string | null | null);
	color?: string | null | (string | null | null);
};
export interface TypingProps {
	speed?: number; 
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