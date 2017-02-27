var product = new Vue ({
  el: '#products',
  data: {
    title: 'Products',
    totalProducts:0,
    totalSpecies: 0,
    items: [
      {name: 'cheese', amount: 2},
      {name: 'bread', amount: 1},
      {name: 'milk', amount: 3},
      {name: 'apples', amount: 5},
      {name: 'cookies', amount: 4}
    ]
  },
    methods:{
      addItem: function(){
        var input = document.getElementById('itemForm');
        if( input.value !== ''){
          this.items.push({
            name: input.value,
            amount: 1
          })
          input.value = "";
        }
      }
    },
    computed: {
      totalProducts: function() {
        var sum = 0;
        var items = this.items;

        for(var i in items){
          sum += items[i].amount;
        }
        return sum;
      },
      totalSpecies: function(){
        return this.items.length;
      }
    }
})