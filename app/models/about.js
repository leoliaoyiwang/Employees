import DS from 'ember-data';
  
export default DS.Model.extend({
  title: DS.attr('string'),   
  intro: DS.attr('string'),
  body: DS.attr('string'),
  author: DS.attr('string')
});