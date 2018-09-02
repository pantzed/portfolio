
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
        }
      ]);
    });
};
