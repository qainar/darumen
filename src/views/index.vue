<template>
  <div>
    <Header/>
    <FirstBlock class="q-mt-xl"/>
    <HowTo class="" style="padding-bottom: 300px"/>
    <InfoBlock style="margin-top: -300px;padding-bottom: 400px"/>

    <div class="cards">
      <h3 class="text-weight-bolder text-center" style="margin-bottom: 120px">Несколько фактов о нас</h3>
      <div class="flex justify-between">
        <template v-for="fact in facts">
          <FactsAboutUs :key="fact.title" :icon="fact.icon" :title="fact.title" :text="fact.text"/>
        </template>
      </div>
    </div>

    <div class="delivery">
      <h3 class="text-weight-bolder text-center">Бесплатная доставка по Казахстану</h3>
      <div class="flex justify-between items-center">
        <p class="text-weight-light text-h4 text-center" style="width: 550px">
          После оформления заказа мы отправим на ваш email подтверждение и трек-номер для отслеживания посылки.
          Вы можете оплатить заказ удобным для вас способом при получении: по карте или наличными.
        </p>
        <img :src="express"/>

      </div>
    </div>

    <Footer style="margin-top: -300px;padding-bottom: 50px"/>

  </div>
</template>

<script>
import Header from "../components/header";
import FirstBlock from "../components/FirstBlock";
import HowTo from "../components/HowTo";
import InfoBlock from "../components/InfoBlock";
import FactsAboutUs from "../components/FactsAboutUs";
import ai from '../assets/icons/AI.svg'
import gmo from '../assets/icons/gmo.svg'
import list from '../assets/icons/list.svg'
import express from '../assets/images/express.png'
import Footer from "../components/Footer";

export default {
  name: "index",
  components: {Footer, FactsAboutUs, InfoBlock, HowTo, FirstBlock, Header},
  data(){
    return{
      express,
      facts:[
        {
          icon: list,
          title: 'Соблюдаем стандарты ВОЗ',
          text: 'Дозировки витаминов подбираются на основе рекомендаций Всемирной организации здравоохранения и соответствуют суточным нормам. ' +
              'Мы корректируем набор каждый месяц в зависимости от ваших целей и того, какие витамины вы уже принимали'
        },
        {
          icon: gmo,
          title: 'Проверенные ингредиенты',
          text: 'Используем продукцию высшего качества. Закупаем вещества у сертифицированных международных поставщиков. Витамины не содержат ГМО, искусственные красители и консерванты'
        },
        {
          icon: ai,
          title: 'Используем искусственный интеллект',
          text: 'Несмотря на то, что наш подход основан на многолетнем опыте различных специалистов в сфере здоровья, при подборе вашего индивидуального ' +
              'набора витаминов мы исключаем человеческий фактор и доверяем решение умным алгоритмам'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cards{
  padding: 100px 310px  300px 310px;
  background-image: url("../assets/images/yellow.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: -300px;
}
.delivery{
  padding: 100px 310px  400px 310px;
  background-image: url("../assets/images/gray.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: -300px;
}
</style>