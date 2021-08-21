type TypingDataProps = {
  sentence: string;
  highlight?: string;
  color?: string;
};

interface TypingProps {
  speed?: number; 
  betweenDelay?: number;
  deleteDelay?: number;
  deleteSpeed?: number;
  delete?: boolean;
  hideCursor?: boolean;
  hideCursorOnExit?: boolean;
  removeOnExit?: boolean;
  cursorClass?: string;
  cursorColor?: string;
  cursorHeight?: string;
  data: TypingDataProps | TypingDataProps[];
}