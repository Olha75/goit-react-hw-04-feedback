import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <ul className={css.listButton}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={css.button}
              type="button"
              onClick={() => onClickFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
