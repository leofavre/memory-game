import '@leofavre/memory-game-component';
import '@leofavre/flip-card-component';

import getGitHubSelf from './services/getGitHubSelf.js';
import getGitHubTopPals from './services/getGitHubTopPals.js';
import getGitHubTopPalsOfPals from './services/getGitHubTopPalsOfPals.js';
import getGitHubFollowers from './services/getGitHubFollowers.js';
import getGitHubFollowing from './services/getGitHubFollowing.js';
import rankUsers from './services/rankUsers.js';

const getGitHubCards = async login => {
  let cards = [];

  const self = await getGitHubSelf(login);

  if (!self) {
    console.log('I could not find this login on GitHub!');
    return [];
  }

  const pals = await getGitHubTopPals(login);
  cards = [self, ...rankUsers([...pals])];
  if (cards.length >= 12) {
    return cards.slice(0, 12);
  }

  const palsOfPals = await getGitHubTopPalsOfPals(login, pals.slice(0, 5));
  cards = [self, ...rankUsers([...pals, ...palsOfPals])];
  if (cards.length >= 12) {
    return cards.slice(0, 12);
  }

  const following = await getGitHubFollowing(login);
  cards = [self, ...rankUsers([...pals, ...palsOfPals, ...following])];
  if (cards.length >= 12) {
    return cards.slice(0, 12);
  }

  const followers = await getGitHubFollowers(login);
  cards = [self,
    ...rankUsers([...pals, ...palsOfPals, ...following, ...followers])];
  if (cards.length >= 12) {
    return cards.slice(0, 12);
  }

  if (cards.length >= 9) {
    return cards.slice(0, 9);
  }

  if (cards.length >= 6) {
    return cards.slice(0, 6);
  }

  console.log('I could not find enough GitHub users related to this login!');
};

const $memoryGame = document.querySelector('memory-game');

getGitHubCards('leofavre')
  .then(cards => {
    $memoryGame.cards = cards;
  });
