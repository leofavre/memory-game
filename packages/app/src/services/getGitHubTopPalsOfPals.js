import rankUsers from './rankUsers.js';
import getGitHubTopPals from './getGitHubTopPals.js';
import toFlatArray from '../helpers/toFlatArray.js';

export default async (login, pals = []) => {
  try {
    const data = await Promise
      .all(pals.map(pal => getGitHubTopPals(pal.name)));

    return rankUsers(data.reduce(toFlatArray, [])
      .filter(user => user.name !== login));
  } catch (err) {}

  return [];
};
