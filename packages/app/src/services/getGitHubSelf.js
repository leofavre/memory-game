import modelUser from './modelUser.js';

export default async login => {
  const url = `https://api.github.com/users/${login}`;

  try {
    const data = await fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Failed: ${url}`);
      });
    return modelUser(data);
  } catch (err) {}

  return undefined;
};
