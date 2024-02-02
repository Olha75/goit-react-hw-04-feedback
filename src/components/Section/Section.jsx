import css from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.itemTitle}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

//  return (
//       <div className={css.wrapper}>
//         <h1 className={css.title}>кафе Expresso</h1>
//         <p className={css.itemTitle}>
//           <b>Чи подобається Вам наше кафе?</b>
//         </p>
//         <ul className={css.listButton}>
//           <li>
//             <button className={css.button} onClick={this.onClickFeedback}>
//               good
//             </button>
//           </li>
//           <li>
//             <button className={css.button} onClick={this.onClickFeedback}>
//               neutral
//             </button>
//           </li>
//           <li>
//             <button className={css.button} onClick={this.onClickFeedback}>
//               bad
//             </button>
//           </li>
//         </ul>
//         <h3 className={css.statisticsTitle}>Статистика</h3>
//         <ul className={css.listStatistics}>
//           <li>Good: {good}</li>
//           <li>Neutral: {neutral}</li>
//           <li>Bad: {bad}</li>
//           <li>Total:{total}</li>
//           <li>Percent:{percent}</li>
//         </ul>
//       </div>
//     );
//   }
// }
