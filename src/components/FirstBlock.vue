<template>
  <div class="flex justify-between first">
    <div class="left flex column items-start q-mt-xl">
      <h2 class="text-weight-bold q-mb-lg">Индивидуальный<br>
        набор витаминов для вас
      </h2>
      <hr class="hr items-start q-ma-none q-mb-lg"/>
      <p class="text-body1 text-weight-regular q-mb-xl">Пройдите опрос и получите персональную рекомендацию бесплатно</p>
      <q-btn label="Пройти опрос" style="background: #F7C73F;"></q-btn>
    </div>
    <div class="right">
      <div>
        <img :src="darumen" style="width: 500px"/>
      </div>
    </div>
  </div>
</template>

<script>
import darumen from '../assets/images/picture.png'
export default {
  name: "FirstBlock",
  data(){
    return{
      darumen
    }
  }
}
</script>

<style lang="scss" scoped>
.first{
  padding: 0 310px  0 310px;
}
.hr{
    background: #F7C73F;
    width: 154px;
    height: 2px;
    border: none;
}
</style>