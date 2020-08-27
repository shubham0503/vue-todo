<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <TodoList />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Home',
  components: {
    TodoList
  }
}
</script>
