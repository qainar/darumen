<template>
  <div class="flex items-baseline">
    <div class="flex column items-center">
      <img :src="done" />
      <p class="text-caption text-white text-center q-mt-md" style="width: 150px">Получите набор в ближайшем пункте выдачи или курьером</p>
    </div>
    <hr class="hr"/>
    <div class="flex column items-center">
      <img :src="done" />
      <p class="text-caption text-white text-center q-mt-md" style="width: 150px">Принимайте витамины каждый день после завтрака или обеда</p>
    </div>
    <hr class="hr"/>
    <div class="flex column items-center">
      <img :src="done" />
      <p class="text-caption text-white text-center q-mt-md" style="width: 150px">Мы отправим новую персональную рекомендацию на 30-й день приема витаминов</p>
    </div>
    <hr class="hr"/>
    <div class="flex column items-center">
      <img :src="done" />
      <p class="text-caption text-white text-center q-mt-md" style="width: 150px">Получите новый набор для достижения ваших целей</p>
    </div>
    <hr class="hr"/>
    <div class="flex column items-center">
      <img :src="done" />
      <p class="text-caption text-white text-center q-mt-md" style="width: 150px">Продолжайте заботиться о себе</p>
    </div>
  </div>
</template>

<script>
import done from '../assets/icons/done.svg'
export default {
  name: "Next",
  data(){
    return{
      done
    }
  },
}
</script>

<style lang="scss" scoped>
.hr{
  background: #E88F6D;
  border-radius: 5px;
  height: 6px;
  width: 130px;
  border: none;
  margin: 0;
}
</style>