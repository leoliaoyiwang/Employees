import Ember from 'ember';

export default Ember.Controller.extend({

	 actions: {
  
              saveItem: function() {

                     var fname = this.get('fname');
                     var lname = this.get('lname');
                     var email = this.get('email');
                     var tel = this.get('tel');
                     var dept = this.get('dept');
                     var employee = this.store.createRecord('about', {
                            fname: fname,
                            lname: lname,
                            email: email,
                            tel : tel,
                            dept : dept
                     });
                     employee.save();  

                     this.set('fname', "");
                     this.set('lname', "");
                     this.set('email', "");
                     this.set('tel', "");
                     this.set('dept', "");
              }
       }
});
