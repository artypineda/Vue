//reactive so it can change in the dom / console to test
var app = new Vue({
    el: '#app',
    data: {
        message: 'This is Fine'
    }
})

//these are directives
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: `You have loaded a page on ${ new Date().toLocaleDateString() }`
    }
})

//Conditionals and Loops
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

//directive ForLoop
///app4.todos.push({ text: 'New item' }) in cli for reactiveness
var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            {textstuff: "test1"},
            {textstuff: "test2"},
            {textstuff: "test3"},
            {textstuff: "test4"},
            {textstuff: "test5"},
        ]
    }
})

//handle Usr Input. ON Directive to handle event handlers. 
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: "Hello I'm the 5th Div",
        message2: "I'm Reversing Now! KayBye."
    },
    methods: {
        sayHiLow: function(){
            this.message = "hi low";
        },
        reverseMessageOnClick: function(){
            this.message2 = this.message2.split('').reverse('').join('');
        }
    }
})

//two-way binding directive under v-model
var app6 = new Vue({
    el: "#app-6",
    data: {
        message1: "Hello :)",
        message2: "Nurse !"
    }
})


/****************/
/** Components **/
/****************/
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.textstuff }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, textstuff: 'Vegetables' },
      { id: 1, textstuff: 'Cheese' },
      { id: 2, textstuff: 'Whatever else humans are supposed to eat' },
      { id: 3, textstuff: 'Whatever else humans are supposed to eat' },
      { id: 4, textstuff: 'Whatever else humans are supposed to eat' }
    ]
  }
})