import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contactsList = await readContacts();
    if (contactsList?.length) {
      await writeContacts(contactsList.slice(0, -1));
    }
  } catch (e) {
    console.error(e);
  }
};

removeLastContact();
