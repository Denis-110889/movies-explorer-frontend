import './SearchForm.css';

function SearchForm({ isShort, setIsShort, searchQuery, setSearchQuery, searchFilms }) {
  return (
    <section className="search">
      <form className="search__form form-search" onSubmit={searchFilms}>
        <div className="form__ellips">
          <input
            className="form-search__input"
            type="text"
            placeholder='Фильм'
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            required
          />
          <button className="form-search__button" type="submit"></button>
        </div>
        <label className="form-search__label" >
          <input
            className="form-search__checkbox"
            type="checkbox"
            checked={isShort}
            onChange={() => setIsShort(!isShort)}
          />
          <div className="form-search__custom-checkbox">
            <div className="form-search__custom-mark"></div>
          </div>
          <p className="form-search__label-text">Короткометражки</p>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
