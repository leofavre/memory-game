import modelUser from './modelUser.js';

export default async login => {
  const url = `https://api.github.com/users/${login}/following`;

  try {
    const data = await fetch(url).then(response => response.json());
    return data.map(modelUser).filter(user => user.name !== login);
  } catch (err) {}

  return [];
};
