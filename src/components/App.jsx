import { Component } from 'react';
import { FeedbackCard } from './Feedback/Feedback-styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

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
         <Section title="Please leave feedback">
         <FeedbackOptions
         options={Object.keys(this.state)}
         onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
         </Section>
         <Section title="Statistics">
           <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>  
        </Section>
        </FeedbackCard>
    );
  }
};