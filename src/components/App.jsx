import { Component } from 'react';
import { FeedbackCard, Headrest } from './Feedback/Feedback-styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = event => {
    this.setState({ [event]: this.state[event] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const percent = (this.state.good * 100) / total;
    return Math.round(percent);
  };

  render() {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad;

    return (
        <FeedbackCard>
        <Headrest>Please Leave feedback</Headrest>
        <FeedbackOptions
         options={Object.keys(this.state)}
         onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()} />
        </FeedbackCard>
    );
  }
};

  // updateGoodValue = () => {
  //   this.setState(
  //     prevState => {
  //      return {
  //       good: prevState.good + 1,
  //      }
  //     }
  //   )
  // }

  // updateNeutralValue = () => {
  //   this.setState(
  //     prevState => {
  //      return {
  //       neutral: prevState.neutral + 1,
  //      }
  //     }
  //   )
  // }

  // updateBadValue = () => {
  //   this.setState(
  //     prevState => {
  //      return {
  //       bad: prevState.bad + 1,
  //      }
  //     }
  //   )
  // }