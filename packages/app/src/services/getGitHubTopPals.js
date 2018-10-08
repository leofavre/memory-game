import modelUser from './modelUser.js';
import toFlatArray from '../helpers/toFlatArray.js';
import rankUsers from './rankUsers.js';

export default async login => {
  const url = `https://api.github.com/users/${login}/events`;

  try {
    const data = await fetch(url).then(response => response.json());

    const pals = data
      .filter(event => event.type.startsWith('PullRequest'))
      .map(pullReq => {
        const pull = pullReq.payload.pull_request;
        return [
          ...pull.requested_reviewers,
          ...pull.assignees
        ];
      })
      .reduce(toFlatArray, [])
      .map(modelUser)
      .filter(user => user.name !== login);

    return rankUsers(pals);
  } catch (err) {}

  return [];
};
