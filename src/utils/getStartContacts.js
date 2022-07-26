import defaultContacts from '../data/contacts.json';

export const getStartContacts = () => {
  let currentValue;
  try {
    currentValue = JSON.parse(
      localStorage.getItem('contacts') || String(defaultContacts)
    );
  } catch (error) {
    currentValue = defaultContacts;
  }
  console.log('getStartContacts', currentValue);
  return currentValue;
};
