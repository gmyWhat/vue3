// interface
import { computed, ref } from 'vue'
export default function todeMvc() {
  interface Todo{
    title: string
    done: boolean
  }
  // 初始歘totomvc数据
  const iptValue = ref<string>('') // input 框内容
  const todoList = ref<Todo[]>([ // todo列表数据
    { title: '吃饭', done: false },
    { title: '睡觉', done: false },
    { title: '学vue3', done: false },
  ])
  // 添加
  function addTodo() {
    if (iptValue.value !== '') {
      // 给todo列表增加内容
      todoList.value.push({
        title: iptValue.value,
        done: false,
      })
      // 清空input框值
      iptValue.value = ''
    }
  }
  // 删除
  function delTodo(ind: number) {
    todoList.value.splice(ind, 1)
  }
  // 当前选中个数
  const active = computed<number>(() => todoList.value.filter(item => item.done).length)
  // 全部个数
  const total = computed<number>(() => todoList.value.length)
  // 全选复选框
  const allDone = computed<boolean>({
    get() {
      // 全选状态
      return active.value === todoList.value.length
    },
    set(val) {
      todoList.value.forEach((todo) => {
        todo.done = val
      })
    },
  })
  return {
    iptValue, // 输入框value值
    todoList, // todolist 数据
    active, // 当前选中内容
    total, // 总条数
    allDone, // 全选复选状态
    delTodo, // 删除方法
    addTodo, // 添加方法
  }
}
