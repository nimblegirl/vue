var card = new Vue({
  el: '#card',
  data: {
    title: 'Movies',
    description: '<h1>Find the latest new movies now playing in theaters.</h1> Get the latest buzz, find showtimes, watch trailers, and read reviews & ratings all on <a href="www.imdb.com/movies-in-theaters">IMDb</a>.',
    items: [
      { 
        text: 'Intouchables',
        genre: 'Biography, Comedy, Drama'
      },
      { 
        text: 'The Shawshank Redemption',
        genre: 'Drama, Crime'
      },
      { 
        text: 'Pulp Fiction',
        genre: 'Drama, Crime'
      },
      { 
        text: 'Schindler\'s List',
        genre: 'Drama, History'
      },
      {
        text: 'Inception',
        genre: 'Action, Adventure, Sci-Fi'
      },
      {
        text: 'Whiplash',
        genre: 'Drama, Music'
      }
    ],
  },
  methods: {
    addItem: function(){
      var input = document.getElementById('itemForm');
      
      if( input.value !== ''){
        this.items.push({
          text: input.value
        })
        input.value = '';
      }
    },
    deleteItem: function(index){
      this.items.splice(index, 1);
    }
  },
  filters: {
    capitalize: function(value){
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    url: function(value){
      if (!value) return '';
      value = value.toString();
      return 'https://en.wikipedia.org/wiki/' + value;
    },
    replace: function(value){
      if (!value) return '';
      value = value.toString();
      return value.replace(/ /g, "_");
    }
  }
  
})