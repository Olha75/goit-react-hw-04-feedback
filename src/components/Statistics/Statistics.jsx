import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.listStatistics}>
      <li className={css.text}>
        <i>Good: </i>
        {good}
      </li>
      <li className={css.text}>
        <i>Neutral: </i>
        {neutral}
      </li>
      <li className={css.text}>
        <i>Bad: </i>
        {bad}
      </li>
      <li className={css.text}>
        <b>
          <i>Total: </i>
        </b>
        {total}
      </li>
      <li className={css.text}>
        <b>
          <i>Positive feedback: </i>
        </b>
        {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;

//   return (
//     <ul className={css.listStatistics}>
//       <li className={css.text}>
//         <i>Good: </i>
//         {good}
//       </li>
//       <li className={css.text}>
//         <i>Neutral: </i>
//         {neutral}
//       </li>
//       <li className={css.text}>
//         <i>Bad: </i>
//         {bad}
//       </li>
//       <li className={css.text}>
//         <b>
//           <i>Total: </i>
//         </b>
//         {total}
//       </li>
//       <li className={css.text}>
//         <b>
//           <i>Positive feedback: </i>
//         </b>
//         {positivePercentage}%
//       </li>
//     </ul>
//   );
// };

// export default Statistics;
