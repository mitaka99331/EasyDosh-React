import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomePage = state => state.home || initialState;

const makeSelectHomePage = () =>
  createSelector(
    selectHomePage,
    homeState => homeState,
  );

export default makeSelectHomePage;
export { selectHomePage };
