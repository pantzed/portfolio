
exports.seed = function(knex, Promise) {
  return knex('experience').del()
    .then(function () {
      return knex('experience').insert([
        { 
          title: 'Marketing Manager',
          company: 'eGauge Systems',
          start: 'Jul 2015',
          end: 'Apr 2018',
          imageURL: 'http://www.egauge.net/django_static/images/logo_eGauge_bug_54x54.png',
          point_1: 'Designed a new website with UI/UX principals from the book “Don’t Make Me Think” and graphic tools such as Adobe Illustrator and Moqups wireframing. Measured KPIs with Google Analytics and found an increased customer conversion rate of 15%.',
          point_2: 'Adjusted advertising budget after establishing Google Analytics and comparing user data to initial expectations.',
          point_3: 'Led staff training for products to ensure accurate advertisement of technology and increased customer satisfaction.'
        },
        { 
          title: 'Account Manager',
          company: 'eGauge Systems',
          start: 'Feb 2012',
          end: 'Jul 2015',
          imageURL: 'http://www.egauge.net/django_static/images/logo_eGauge_bug_54x54.png',
          point_1: 'Grew a yearly revenue of $750,000 to over $4.2 million in three years by hosting webinars, in-person technical training, and attending 15+ tradeshows.',
          point_2: 'Became an expert on topics in renewable energy, utility billing, and power analysis markets and shared that knowledge with blog posts and white papers.',
          point_3: null
        }
      ]);
    });
};
