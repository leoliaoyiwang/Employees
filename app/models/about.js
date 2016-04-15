import DS from 'ember-data';
  
export default DS.Model.extend({
  id: DS.attr('string'),    
  fname: DS.attr('string'),
  lname: DS.attr('string'),
  email: DS.attr('string')
  tel: DS.attr('string')
  dept: DS.attr('string')

});