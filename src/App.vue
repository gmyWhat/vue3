<script setup lang="ts">
import todomvc from './composiable/todomvc' // todomvc方法
import useMouse from './composiable/mouse' // 获取鼠标移动方法
const { iptValue, todoList, active, total, allDone, delTodo: removeTodo, addTodo: addTodoFn } = todomvc()
const { x, y } = useMouse()
// 添加
function addTodo() {
  addTodoFn()
}
// 删除
function delTodo(ind: number) {
  removeTodo(ind)
}
</script>
<template>
  <div>
    鼠标移动坐标：<h2>{{ x }}:{{ y }}</h2>
  </div>
  <div>
    <h2>todomvc:</h2>
    <input v-model.trim="iptValue" type="text">
    <button @click="addTodo">
      添加
    </button>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        <input v-model="item.done" type="checkbox">
        <span :class="{done:item.done}">{{ item.title }}</span>
        <span @click="delTodo(index)">❎</span>
      </li>
    </ul>
    <div>
      <span>全选：</span>
      <input v-model="allDone" type="checkbox">
      <span>{{ active }}/{{ total }}</span>
    </div>
  </div>
</template>
<style>
.done{
  text-decoration: line-through;
  color:gray;
}
</style>
