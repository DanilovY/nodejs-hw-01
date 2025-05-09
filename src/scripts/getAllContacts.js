import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return Array.isArray(data) ? [...data] : [];
  } catch (e) {
    console.error(e);
  }
};

console.log(await getAllContacts());
