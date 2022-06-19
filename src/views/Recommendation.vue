<template>
  <div>
    <Header/>
    <div class="wrapper" style="background: #8EAA9B;">
      <div style="padding: 110px 0 110px 0">
        <h4 class="text-white q-ma-none q-mb-xl">Артём, ваш ежедневный набор
          на месяц готов!
        </h4>
        <p class="text-white text-h6" style="width: 880px">Посмотрите, почему мы рекомендуем вам именно эти <br>
          витамины. Не стесняйтесь задавать вопросы –<br>
          всегда подскажем и поможем</p>
      </div>

    </div>

    <div class="main wrapper">

      <div class="flex justify-between q-pt-xl q-mb-lg">
        <div class="flex column items-start" style="width: 400px">
          <img src="../assets/icons/pills.svg" />
          <span class="text-caption" style="width: 300px">30 удобных саше-пакетов по 5 витаминов в каждом</span>
        </div>
        <div class="flex column items-start" style="width: 400px">
          <img src="../assets/icons/glass.svg" />
          <span class="text-caption" style="width: 300px">Принимайте сразу после завтрака или обеда, запивая водой</span>
        </div>
        <div class="flex column items-start" style="width: 400px">
          <img src="../assets/icons/vitamins.svg" />
          <span class="text-caption" style="width: 300px">Все компоненты набора сочетаются между собой</span>
        </div>
      </div>


      <div class="flex" style="gap: 20px">
        <template v-for="item in items">
          <Vitamin :key="item.name" :picture="item.picture" :name="item.name" :country-icon="item.countryIcon" :country-name="item.countryName" :count="item.count" :weight="item.weight" :description="item.description"/>
        </template>
      </div>

      <div class="flex q-mt-xl items-start">
        <q-icon name="fa-solid fa-circle-info q-mt-sm" size="20px"/>
        <div class="flex column q-ml-sm">
          <p class="text-h6 text-weight-light q-ma-none">Наша продукция сертифицирована в РК, а производство соответствует стандарту ISO</p>
          <router-link to="#" class="text-caption text-weight-light" style="text-decoration: none">Подробнее</router-link>
        </div>
      </div>
    </div>

    <div class="next" style="margin-top: -150px">
      <div class="wrapper">
        <h3 class="text-weight-bolder text-white text-center q-pt-xl">Что дальше?</h3>
        <Next/>
      </div>
    </div>

    <div class="set">

      <div class="wrapper">

        <div class="q-pt-xl">
          <h3 class="text-weight-bold text-center q-ma-none">Ваш набор</h3>
        </div>

        <div class="flex justify-center">
          <div class="">
            <img :src="darumen" style="width: 500px"/>
          </div>
          <div class="q-mt-xl">
            <div class="flex column">
              <template v-for="item in product">
                <Set :key="item.name" :icon="item.icon" :name="item.name" :country-icon="item.countryIcon" :country-name="item.countryName" :weight="item.weight" :count="item.count"/>
              </template>
            </div>
          </div>
        </div>

        <hr class="hr text-center"/>

        <div class="flex justify-center q-mt-lg">
          <div class="price flex column">
            <div class="flex justify-between">
              <h6 class="text-weight-bold q-ma-none">Сумма заказа</h6>
              <span class="text-weight-bold">{{count}} <q-icon name="fa-solid fa-ruble-sign" size="15px"/></span>
            </div>
            <div class="flex justify-between">
              <h6 class="text-weight-bold q-ma-none">Скидка по промокоду</h6>
              <span class="text-weight-bold">{{promo}}  <q-icon name="fa-solid fa-ruble-sign" size="15px"/></span>
            </div>
            <div class="flex justify-between">
              <h6 class="text-weight-bold q-ma-none">Итого</h6>
              <span class="text-weight-bold">{{allCount}}  <q-icon name="fa-solid fa-ruble-sign" size="15px"/></span>
            </div>
            <div class="q-mt-xl">
              <router-link to="/order" style="text-decoration: none; color: black">
                <q-btn label="Оформить" no-caps style="background: #E88F6D;border-radius: 40px;" class="float-right"/>
              </router-link>

            </div>
          </div>
        </div>


      </div>

    </div>
    <Footer style="margin-top: -300px;padding-bottom: 50px"/>
  </div>
</template>

<script>
import Header from "../components/header";
import Vitamin from "../components/Vitamin";
import vitamin_d from '../assets/icons/vitamin_d.svg'
import germany from '../assets/icons/german.svg'
import Next from "../components/Next";
import darumen from '../assets/images/picture.png'
import Set from "../components/Set";
import Footer from "../components/Footer";
export default {
  name: "Recommendation",
  components: {Footer, Set, Next, Vitamin, Header},
  data(){
    return{
      price: 0,
      promo: 300,

      germany, darumen,
      items:[
        {
          picture: vitamin_d,
          name: 'Витамин D',
          countryIcon: germany,
          countryName: 'Германия',
          count: '30',
          weight: '15 мкг',
          description: 'Вы очень активно занимаетесь спортом, поэтому вам рекомендован прием Витамина D. Активные занятия...'
        },
        {
          picture: vitamin_d,
          name: 'Витамин D',
          countryIcon: germany,
          countryName: 'Германия',
          count: '30',
          weight: '15 мкг',
          description: 'Вы очень активно занимаетесь спортом, поэтому вам рекомендован прием Витамина D. Активные занятия...'
        },
        {
          picture: vitamin_d,
          name: 'Витамин D',
          countryIcon: germany,
          countryName: 'Германия',
          count: '30',
          weight: '15 мкг',
          description: 'Вы очень активно занимаетесь спортом, поэтому вам рекомендован прием Витамина D. Активные занятия...'
        },
        {
          picture: vitamin_d,
          name: 'Витамин D',
          countryIcon: germany,
          countryName: 'Германия',
          count: '30',
          weight: '15 мкг',
          description: 'Вы очень активно занимаетесь спортом, поэтому вам рекомендован прием Витамина D. Активные занятия...'
        },
      ],
      product:[
        {
          icon: vitamin_d,
          name: 'Витамин D',
          countryIcon: germany,
          countryName: 'Германия',
          count: '30',
          weight: '15 мкг',
          price: 200
        },
        {
          icon: vitamin_d,
          name: 'Витамин D',
          countryIcon: germany,
          countryName: 'Германия',
          count: '30',
          weight: '15 мкг',
          price: 250
        },
        {
          icon: vitamin_d,
          name: 'Витамин D',
          countryIcon: germany,
          countryName: 'Германия',
          count: '30',
          weight: '15 мкг',
          price: 200
        },
        {
          icon: vitamin_d,
          name: 'Витамин D',
          countryIcon: germany,
          countryName: 'Германия',
          count: '30',
          weight: '15 мкг',
          price: 300
        },
      ]
    }
  },
  computed:{
    count(){
      let price = 0
      this.product.forEach(product=> (
          price += product.price
      ))
      return price
    },
    allCount(){
      return this.count - this.promo
    }
  },

}
</script>

<style lang="scss" scoped>
.wrapper{
  padding: 0 310px  0 310px;
}
.main{
  background: #FAE48B;
  padding-bottom: 300px;
}
.next{
  background-image: url("../assets/images/next_back.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: 40px;
}
.set{
  background: #E2F5F4;
  padding-bottom: 350px;

}
.hr{
  margin: auto;
  background: #C2D1D0;
  border-radius: 5px;
  width: 430px;
  height: 6px;
  border: none;
}
.price{
  width: 430px;
}
</style>