import css from './statistics.module.css';
import { useState, Component } from 'react';

const Statistics = ({ options }) =>
  // export const Statistics = ({
  //   good,
  //   neutral,
  //   bad,
  //   total,
  // //   positivePercentage,
  // }) =>

  {
    const [grade, setGrade] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    // const [good, setGood] = useState();
    // const [neutral, setNeutral] = useState();
    // const [bad, setBad] = useState();
    // const [total, setTotal] = useState();
    // const [positivePercentage, setPositivePercentage] = useState();
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
