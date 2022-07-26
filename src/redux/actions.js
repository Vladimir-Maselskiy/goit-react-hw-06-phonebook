import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('ADD_CONTACT', value => ({
  payload: {
    id: nanoid(),
    name: value.name,
    number: value.number,
  },
}));
export const deleteContact = createAction('DELETE_CONTACT');
export const filter = createAction('FILTER');
