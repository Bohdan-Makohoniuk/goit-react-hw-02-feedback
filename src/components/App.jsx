import FeedBackPeople from './FeedbackFromPeople/feedback'



export const App = () => {
  return (
    <div>
      <FeedBackPeople
        good={good}
        nature={neutral}
        bad={bad}
      />
    </div>
  );
};

export default App;