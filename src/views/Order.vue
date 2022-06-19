<template>
  <div>
    <Header/>
    <div class="order">
      <div class="wrapper">
        <h3 class="q-ma-none text-weight-bold q-pt-xl">Оформление заказа</h3>
        <div class="q-pt-md">
          Мы вернём 100% стоимости, если витамины вам не понравятся
        </div>


        <div class="flex q-mt-xl" style="gap: 60px">
          <div>
            <Form/>
          </div>
          <div class="set q-pa-xl">
            <h5 class="q-ma-none">Ваш набор</h5>
            <span class="text-weight-light">30 саше-пакетов по 5 витаминов в каждом</span>
            <div class="flex column q-mt-md">
              <template v-for="item in product">
                <Set :key="item.name" :icon="item.icon" :name="item.name" :country-icon="item.countryIcon" :country-name="item.countryName" :weight="item.weight" :count="item.count"/>
              </template>
            </div>
            <div class="flex justify-center q-mt-lg">
              <div class="price flex column">
                <div class="flex justify-between">
                  <span class="text-caption q-ma-none text-weight-bold">Сумма заказа</span>
                  <span class="text-weight-bold">{{count}} <q-icon name="fa-solid fa-ruble-sign" size="15px"/></span>
                </div>
                <div class="flex justify-between">
                  <span class="text-caption q-ma-none text-weight-bold text-blue">Скидка на первый месяц</span>
                  <span class="text-weight-bold text-blue">{{promo}}  <q-icon name="fa-solid fa-ruble-sign" size="15px" color="blue"/></span>
                </div>
                <hr class="hr q-mt-md">
                <div class="flex justify-between">
                  <span class="text-caption q-ma-none text-weight-bold">Итого</span>
                  <span class="text-weight-bold">{{allCount}}  <q-icon name="fa-solid fa-ruble-sign" size="15px"/></span>
                </div>
              </div>
            </div>

            <div>
              <q-btn style="background: #C2D1D0; border-radius: 40px; color:  #8EAA9B;" label="Оформить" no-caps class="q-pa-sm float-right q-mt-lg"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import Form from "../components/Form";
import Set from "../components/Set";
import vitamin_d from "../assets/icons/vitamin_d.svg";
import germany from "../assets/icons/german.svg";
export default {
  name: "Order",
  components: {Set, Form, Header},
  data(){
    return{
      price: 0,
      promo: 300,
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
      this.product.forEach(product=>(
          price += product.price
      ))
      return price
    },
    allCount() {
      return this.count - this.promo
    }
  }
}
</script>

<style lang="scss" scoped>
.order{
  background: #E2F5F4;
  .wrapper{
    padding: 0 310px  0 310px;
  }
  .set{
    background: #FFFFFF;
    border-radius: 50px;
    .hr{
      background: rgba(0, 0, 0, 0.48);
      height: 2px;
      width: 325px;
    }
  }
}
</style>