import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio'
import photo from '../../images/photo.jpg'

function AboutMe() {
  return (
    <section className="about-me" id='about-me'>
      <div className="container about-me__container">
        <h3 className="title about-me__title">Студент</h3>
        <div className="about-me__wrapper">
          <div className="about-me__description">
            <p className="about-me__name">Денис</p>
            <p className="about-me__speciality">Фронтенд-разработчик, 33 года</p>
            <p className="about-me__text">Я живу в краснодаре, закончил универкитет КубГУ. Женат, есть дочь.
              Работаю в Тойота Центре. Пошёл на курс веб разработки чтобы верстать сайты.
            </p>
            <ul className="about-me__links">
              <li><a className="about-me__link" href="https://vk.com/id536899781">BK</a></li>
              <li><a className="about-me__link" href="https://github.com/Denis-110889">Github</a></li>
            </ul>
          </div>
          <img className="about-me__photo" src={photo} alt="Моё фото" />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
