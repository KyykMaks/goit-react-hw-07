import { useId } from 'react';
import css from './searchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice'; 

export default function SearchBox() {
  const filterState = useSelector(state => state.filters.filter);
  const searchId = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.form}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.field}
        type="text"
        name="search"
        id={searchId}
        value={filterState}
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
}