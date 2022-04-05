import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'
const add = 'add'
// 鼠标移动获取坐标方法
export default function useMouse() {
  const x: Ref = ref(0)
  const y: Ref = ref(0)
  function update(event: MouseEvent) {
    x.value = event.pageX
    y.value = event.pageY
  }
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return {
    x,
    y,
  }
}
