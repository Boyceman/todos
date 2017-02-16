<template>
  <div id="todo_list">
    <input v-model="newTodo" v-on:keyup.enter="addTodo">
    <ol>
      <li v-for="(todo, index) in todos">
        <span> {{ todo.text }} </span>
        <button v-on:click="removeTodo(index)">删除</button>
      </li>
    </ol>
  </div>
</template>

<script type="text/javascript" charset="utf-8">
  export default {
    name: 'todo_list',
    data: () => {
      return {
        newTodo: '',
        todos: [{ text: 'Add some todos' }]
      }
    },
    methods: {
      addTodo: function(){
        console.log(this);
        let text = this.newTodo.trim();
        if (text) {
          this.todos.push({ text: text });
          this.newTodo = ''
        }
      },
      removeTodo: function(index) {
        this.todos.splice(index, 1)
      }
    }
  }
</script>
