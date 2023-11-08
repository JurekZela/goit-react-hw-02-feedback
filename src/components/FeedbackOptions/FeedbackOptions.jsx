import { BtnWrapper, Button } from "components/Feedback/Feedback-styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <BtnWrapper>
        {options.map(option => {
          return (
            <li  key={option}>
              <Button
                type="button"
                status={option}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </Button>
            </li>
          );
        })}
      </BtnWrapper>
    );
  };