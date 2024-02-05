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
