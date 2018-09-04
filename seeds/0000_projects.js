
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          title: 'Stroke with Friends', 
          description: 'A collaborative painting application that allows users to draw on a public HTML canvas with any number of other users.',
          img: 'https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
          url: 'https://stroke-with-friends.herokuapp.com/',
          git: 'https://github.com/pantzed/stroke-with-friends'
        },
        {
          title: 'New Here', 
          description: 'A social site that helps people find activities when they are new to a place.',
          img: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
          url: 'https://new-here.herokuapp.com/',
          git: 'https://github.com/pantzed/new-here'
        },
        {
          title: 'Energy Live', 
          description: 'A revision of the original "energy-live" using node/express to serve a webpage showing electrical energy data.',
          img: 'https://images.pexels.com/photos/45072/pexels-photo-45072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
          url: 'http://eds-pixel-art-maker.surge.sh/',
          git: 'https://github.com/pantzed/energy-live2'
        },
        {
          title: 'Pixel Art Maker', 
          description: 'An artistic outlet for creating pixelated artwork.',
          img: 'https://images.pexels.com/photos/1044989/pexels-photo-1044989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
          url: 'https://energy-live.herokuapp.com/',
          git: 'https://github.com/pantzed/pixel-art-maker'
        },
      ]);
    });
};
