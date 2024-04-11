import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';


const SearchBar = ({ handleSubmit }) => {
  const onSubmit = evt => {
    evt.preventDefault();

    const query = evt.target.elements.input.value;
    if (query.trim() === '') {
      toast.error('write something...');
      return;
    }
    handleSubmit(query);
    evt.target.reset();
  };
  return (
    <header className={css['search-heder']}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css['search-form']} onSubmit={onSubmit}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css['search-input']}
        />
        <button type="submit" className={css['search-btn']}>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
