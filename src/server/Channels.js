const channels = [
    {
      id: 1,
      name: "Kindergarten",
      users: [],
    },
    {
      id: 2,
      name: "Easter Celebration",
      users: [],
    },
    {
      id: 3,
      name: "Events",
      users: [],
    },
   ];
   
   const addUserToChannel = (channel, nickname) => {
    channels.filter((c) => c.name === channel).map((c) => {
      c.users.push(nickname);
   
      return c;
    });
   }
   const addUserChannelToChannels = (user) => {
      const newChannel = { id: user.id, name:user.name, users: [user.id]};
      setSearches(channels => [...channels, newChannel])
   }
   module.exports = { channels, addUserToChannel, addUserChannelToChannels};