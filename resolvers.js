const user = {
  _id: '1',
  name: 'Margo',
  email: '44fff@email.com',
  picture: 'https://cloudnary/',
};

module.exports = {
  
  Query: {
    me: () => user
  }
};
