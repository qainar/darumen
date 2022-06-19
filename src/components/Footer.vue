<template>
  <div class="footer" id="footer">
    <div class="flex row justify-between items-start" style="padding-top: 200px">

      <div class="flex column">
        <h3 class="text-weight-light">DARUMEN</h3>
      </div>

      <div class="flex column">
        <ul class="q-pl-none">
          <li class="q-mb-sm" style="list-style: none">
            <a href="#" class="text-weight-light text-caption q-mb-sm text-white" style="text-decoration: none">МЕНЮ</a>
          </li>
          <li class="q-mb-sm" style="list-style: none">
            <a href="#" class="text-weight-light text-caption q-mb-sm text-white" style="text-decoration: none">МОБИЛЬНАЯ СВЯЗЬ</a>
          </li>
          <li class="q-mb-sm" style="list-style: none">
            <a href="#" class="text-weight-light text-caption q-mb-sm text-white" style="text-decoration: none">ПОДДЕРЖКА</a>
          </li>
        </ul>
      </div>

      <div class="flex column">
        <ul class="q-pl-none">
          <li class="q-mb-sm" style="list-style: none">
            <a href="#" class="text-weight-light text-caption q-mb-sm text-white" style="text-decoration: none">ПОМОЩЬ</a>
          </li>
          <li class="q-mb-sm" style="list-style: none">
            <a href="#" class="text-weight-light text-caption q-mb-sm text-white" style="text-decoration: none">НАПИСАТЬ В ЧАТ</a>
          </li>
        </ul>
      </div>

      <div class="flex column">
        <ul class="q-pl-none">
          <li class="q-mb-sm" style="list-style: none">
            <a href="#" class="text-weight-light text-caption q-mb-sm text-white" style="text-decoration: none">АДРЕС</a>
          </li>
          <li class="q-mb-sm" style="list-style: none">
            <a href="#" class="text-weight-light text-caption q-mb-sm text-white" style="text-decoration: none">АЛМАТЫ, АБАЯ 52</a>
          </li>
          <li class="q-mb-sm" style="list-style: none">
            <a href="#" class="text-weight-light text-caption q-mb-sm text-white" style="text-decoration: none">Пн-Сб: с 09:00 до 20:00</a>
          </li>
        </ul>
        <div class="q-mt-lg">
          <span class="text-caption text-weight-light text-white">МЫ В СОЦСЕТЯХ</span>
          <div class="flex justify-around">
            <img :src="youtube"/>
            <img :src="vk"/>
            <img :src="facebook"/>
            <img :src="twitter"/>
          </div>
        </div>
      </div>

    </div>
    <div class="flex items-center column">
      <h6 class="text-weight-light text-white q-ma-none q-mb-lg">Не является лекарством</h6>
      <p class="text-weight-light text-white text-caption text-center" style="width: 768px">
        © 2021 ТОО «Дарумен». Все права защищены. Содержимое Сайта, в том числе любая текстовая информация и графические изображения,
        являются интеллектуальной собственностью ТОО «Дарумен». Использование их третьими лицами, в том числе копирование,
        воспроизведение и иное использование в любой форме запрещено.
      </p>
    </div>

    <div class="flex items-center column">
      <h3 class="q-ma-none q-mt-xl text-center">Получите ваш персональный<br> набор витаминов</h3>
      <p class="text-h6 q-mt-xl">Пройдите опрос, и мы пришлём персональную рекомендацию на ваш email.</p>
      <q-btn class="q-mt-xl" label="Подобрать витамины" rounded style="background: #F7C73F;" no-caps size="lg"/>
    </div>
  </div>
</template>

<script>
import youtube from '../assets/icons/youtube.svg'
import vk from '../assets/icons/vk.svg'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
export default {
  name: "Footer",
  data(){
    return{
      youtube,vk,facebook,twitter
    }

  }
}
</script>

<style lang="scss" scoped>
.footer{
  background-image: url("../assets/images/orange.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 0 310px  0 310px;
}
</style>