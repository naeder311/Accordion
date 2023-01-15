import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <h1>
        <div className="container">
          <h3>Questions and answers about logging in</h3>
          <div className="info">
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </div>
        </div>
      </h1>
    </main>
  );
}

export default App;
