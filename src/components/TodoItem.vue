<template>
  <div class="todo-item">
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      {{ title }}
      <b-button pill variant="outline-danger" size="sm" @click="removeTodo(index)">Remove &times;</b-button>
    </b-list-group-item>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex'
  export default {
    name: 'todo-item',
    props: {
      todo: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        id: this.todo.id,
        title: this.todo.title
      }
    },
    methods: {
      ...mapActions(['removeTodo'])
    },
    directives: {
      focus: {
        // directive definition
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
</script>