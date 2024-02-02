import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickFeedback = options =>
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const {
      state,
      state: { good, neutral, bad },
      onClickFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

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
              options={Object.keys(state)}
              onClickFeedback={onClickFeedback}
            />
          </Section>

          <Section title={'Statistics'}>
            {total === 0 ? (
              <Notification />
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
  }
}

export default App;
