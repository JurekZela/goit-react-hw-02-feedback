import { Headrest } from './Statistics-styled';

export const Statistics = (
  {
    good,
    neutral,
    bad,
    total,
    positivePercentage
  }
) => {
    return (
        <div>
        <Headrest>Statistics</Headrest>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
          <p>Total: {total}</p> 
        <p>Positive Feedback: {positivePercentage}%</p>
    </div>
    )
}