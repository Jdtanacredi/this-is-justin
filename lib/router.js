Router.configure({
  layoutTemplate: 'Main'
});

Router.route('/', function() {

  if ( this.ready() ) {
		this.render('home', {});
	} else {
		this.render('Loading');
	}


});

// Router.route('/list-:number', function() {
//
// 	this.wait(Meteor.subscribe('list', this.params.number));
//
// 	if ( this.ready() ) {
// 		this.render('list', {
// 			data: {
// 				listNumber: this.params.number,
// 				list: Lists.findOne( { listNumber: parseInt( this.params.number ) })
// 			}
// 		});
// 	} else {
// 		this.render('Loading');
// 	}
//
// });
