import frequencyProp from '../helpers/frequencyProp.js';

export default users => frequencyProp(users, (a, b) => a.name === b.name);
