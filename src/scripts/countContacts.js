import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    return data?.length || 0;
  } catch (e) {
    console.error(e);
  }
};

console.log(await countContacts());
