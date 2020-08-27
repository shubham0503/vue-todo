import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: 'all',
    todos: []
  },
  getters: {
    todoList: state => {
      if(state.filter === 'all'){
        return state.todos
      }

      return state.todos
    }
  },
  mutations: {
    [types.ADD_TODO](state, todo){
      state.todos.push({
        id: todo.id,
        title: todo.title
      })
    },
    [types.CHANGE_FILTER](state, filter){
      state.filter = filter
    },
    [types.REMOVE_TODO](state, index){
      state.todos.splice(index, 1)
    },
    updateTodo(state, todo){
      const index = state.todos.findIndex(t => t.id === todo.id)
      state.todos.splice(index, 1, {
        id: todo.id,
        title: todo.title
      })
    }
  },
  actions: {
    setTodo({commit}, todo){
      commit(types.ADD_TODO, todo)
    },
    changeFilter({commit}, filter){
      commit(types.CHANGE_FILTER, filter)
    },
    removeTodo({commit}, index){
      commit(types.REMOVE_TODO, index)
    }
  }
})
