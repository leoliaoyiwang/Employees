import Ember from 'ember';

  
export default Ember.Route.extend({
       model: function() {


			var employees = this.store.createRecord('about', {
      			id: "2",
      			fname: "Jane",
      			lname: "Doe",
      			email: "jane.doe@asdf.com",
      			tel: "555-555-5555",
      			dept: "sales" } );
			
              return  employees;
 
       }
});