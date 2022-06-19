<template>
  <div class="main">
    <div class="flex justify-between " style="padding-top: 200px">
        <div>
          <img :src="girl">
        </div>
        <div class="" style="width: 620px; padding-top: 95px">
          <h3 class="text-weight-bold q-ma-none text-white" style="margin-bottom: 100px">83% казахстанцев страдают от недостатка витаминов</h3>
          <p class="text-white text-h6">
            Для наших людей характерен полигиповитаминоз - недостаточность сразу нескольких витаминов группы В, Д, С и каротина.
            Причем этот голод практически не зависит от времени года: он обнаруживается не только весной, но и летом, и усугубляется
            недостатком важнейших микронутриентов - кальция, магния, йода, железа, цинка.
          </p>
        </div>
    </div>
    <h6 class="text-weight-light text-center items-center text-white q-ma-none" style="margin-top: 100px">Даже если вы покупаете натуральные полезные продукты, то всё равно<br>  недополучаете около 20% витаминов*</h6>
  </div>
</template>

<script>
import girl from '../assets/images/girl.png'
export default {
  name: "InfoBlock",
  data(){
    return{
      girl
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  background-image: url("../assets/images/blue.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 0 310px  0 310px;
}
</style>