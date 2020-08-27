<template>
  <b-col md="6" offset-md="3">
    <b-form-group
      label="Add New To Do"
      label-for="new-todo"
    >
      <b-form-input id="new-todo" type="text" placeholder="Add your next target" @keyup.enter="addToDo" v-model="newTodo"></b-form-input>
    </b-form-group>
    
    <b-form-group
      label="Search To Do"
      label-for="search-todo"
    >
      <b-form-input id="search-todo" type="text" placeholder="Search To Do .." v-model="search"></b-form-input>
    </b-form-group>
  
    <b-list-group>
      <TodoItem v-for="(todo, index) in filteredList" :key="todo.id" :index="index" :todo="todo" />
    </b-list-group>
  </b-col>
</template>

<script>
  import TodoItem from './TodoItem'
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    name: 'todo-list',
    components: {
      TodoItem
    },
    computed: {
      ...mapGetters([
        'todoList'
      ]),
      filteredList() {
        return this.search !== ''? this.todoList.filter(todo => {
          return todo.title.toLowerCase().includes(this.search.toLowerCase())
        }) : this.todoList
      }
    },
    data() {
      return {
        newTodo: '',
        idForTodo: 3,
        search: ''
      }
    },
    methods: {
      ...mapActions(['setTodo']),
      addToDo() {
        if (this.newTodo.trim() === 0) return false
        this.setTodo({
          id: this.idForTodo,
          title: this.newTodo
        })
        this.newTodo = ''
        this.idForTodo += 1
      }
    }
  }
</script>
