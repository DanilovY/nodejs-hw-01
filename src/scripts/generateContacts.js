import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

let contactsList;

const generateContacts = async (number) => {
  try {
    contactsList = await readContacts();
  } catch (e) {
    console.log('error:', e);
    contactsList = [];
  }
  for (let i = 0; i < number; i++) {
    contactsList.push(createFakeContact());
  }
  await writeContacts(contactsList);
};

generateContacts(5);
