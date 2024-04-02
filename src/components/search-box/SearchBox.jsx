import css from './SearchBox.module.css';

const SearchBox = ({ filter, searchUser }) => {
  return (
    <div className={css.searchBoxLabelInput}>
      <label>
        <p>Find contacts by name</p>
        <input
          className={css.searchBoxInput}
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={event => searchUser(event.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
