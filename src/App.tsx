
import Typing from './components/typing-react-effect';

// see https://github.com/coding-frank/typing-react.git
// for more Typing props
const App = () => {
  return (
			<Typing
				speed={80}
				betweenDelay={500}
				deleteDelay={300}
				deleteSpeed={10}
				delete
				// you can add more props here
				data={{ sentence: "...with highlighting.", highlight: 'highlighting', color: '#3366cc' }}
			/>
  );
};

export default App;
