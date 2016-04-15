import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
              var blogPost = this.store.createRecord('blog-post', {
                     title: 'DEFdNT', 
                     intro: "Codone dash in their name. ",
                     body: "Componedlly.",
                     author: 'ubuntuvim'
              });

              return blogPost;
       }
});
