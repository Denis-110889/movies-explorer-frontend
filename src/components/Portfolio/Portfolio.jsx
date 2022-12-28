import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/Denis-110889/how-to-learn">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/Denis-110889/russian-travel-public">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/Denis-110889/react-mesto-auth">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
