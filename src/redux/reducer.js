import { combineReducers } from 'redux';
import { getStartContacts } from 'utils/getStartContacts';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filter } from './actions';

const itemReducer = createReducer(getStartContacts(), {
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [addContact]: (state, { payload }) => [payload, ...state],
});

const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
