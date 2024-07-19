const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-wrap gap-4 max-2-[400px] w-[90%] py-4">
      {questions.map((question) => (
        <div
          className="bg-zinc-300 h-[200px] flex items-center justify-center p-6 w-[300px]"
          key={question.id}
        >
          <p className="font-semibold">{question.question}</p>
        </div>
      ))}
    </div>
  );
}

export default App;