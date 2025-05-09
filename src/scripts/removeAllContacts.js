import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (e) {
    console.error(e);
  }
};

removeAllContacts();
