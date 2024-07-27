import s from './Electricity.module.css';

const Electricity = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Electricity we produced for all time</h2>
      <div className={s.line}></div>
      <p className={s.counter}>
        1.134.147.814 <span>kWh</span>
      </p>
    </section>
  );
};

export default Electricity;
