import { Link } from 'react-scroll';
import { Icon } from '../Icon/Icon';
import s from './Questions.module.css';
import { questions } from '../../assets/data/questions';
import { useState } from 'react';

const Questions = () => {
  const [openedIdx, setOpenedIdx] = useState(0);
  const toggleAnswer = (index) => {
    setOpenedIdx(openedIdx === index ? null : index);
  };

  return (
    <section id="questions" className={s.section}>
      <h2 className={s.title}>Frequently Asked Questions</h2>
      <ul className={s.list}>
        {questions.map(({ question, answer }, index) => (
          <li key={index} className={s.listItem}>
            <div className={s.iconwrap} onClick={() => toggleAnswer(index)}>
              <Icon
                id={openedIdx === index ? 'minus' : 'add'}
                className={s.icon}
              />
            </div>
            <div className={s.questionWrap} onClick={() => toggleAnswer(index)}>
              <h3 className={s.question}>{question}</h3>
              {openedIdx === index && <p className={s.answer}>{answer}</p>}
            </div>
          </li>
        ))}
      </ul>
      <div className={s.buttonBlock}>
        <p className={s.text}>Didn&apos;t find the answer to your question?</p>
        <Link to="contactUs" smooth={true} duration={500} className={s.link}>
          Contact Us <div className={s.dot}></div>
        </Link>
      </div>
    </section>
  );
};

export default Questions;
