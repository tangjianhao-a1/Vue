const vm = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '红楼梦',
        date: '2006-9',  
        price: 85.00,  
        count: 1
      },{
        id: 2,
        name: '西游记',
        date: '2006-8',  
        price: 59.00,  
        count: 1
      },{
        id: 3,
        name: '三国演义',
        date: '2006-1',  
        price: 39.00,  
        count: 1
      },{
        id: 4,
        name: '水浒传',
        date: '2006-6',  
        price: 125.00,  
        count: 1
      },
    ]
  },
  filters:{
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  },

  computed: {
    total() {
      let num = 0;  
      this.books.forEach(val=>{
        num += val.price * val.count
      })
      return num
    }
  },

  methods:{
    increment(index) {
      this.books[index].count++
    },

    decrement(index) {
      this.books[index].count--
    },

    remove(index) {
      this.books.splice(index,1)
    }

  }
})