import { Component } from 'react';
import { FeedbackCard } from './Feedback-styled';

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      updateGoodValue = () => {
        this.setState(
          prevState => {
           return {
            good: prevState.good + 1,
           }
          }
        )
      }

      updateNeutralValue = () => {
        this.setState(
          prevState => {
           return {
            neutral: prevState.neutral + 1,
           }
          }
        )
      }

      updateBadValue = () => {
        this.setState(
          prevState => {
           return {
            bad: prevState.bad + 1,
           }
          }
        )
      }

      

      render() {
        const { good, neutral, bad } = this.state
        return (
            <FeedbackCard>
            <h2>Please Leave feedback</h2>
            <div>
            <button onClick={this.updateGoodValue}>Good</button>
            <button onClick={this.updateNeutralValue}>Neutral</button>
            <button onClick={this.updateBadValue}>Bad</button>
            </div>
            <div>
                <h2>Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
            </div>
            </FeedbackCard>
        );
      }
}