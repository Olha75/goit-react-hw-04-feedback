import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const App = () => {
  const [grade, setGrade] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = grade;

  const onClickFeedback = options =>
    setGrade(prevGrade => ({
      ...prevGrade,
      [options]: prevGrade[options] + 1,
    }));

  const countTotalFeedback = () => {
    const { good, neutral, bad } = grade;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage('good');

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexWrap: 'wrap',
        flexDirection: 'column',
      }}
    >
      <div className="wrapper">
        <h1 className="title">cafe Expresso</h1>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(grade)}
            onClickFeedback={onClickFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
};

export default App;
