<template>
  <div class="header flex justify-between">
    <div class="left flex items-center">
      <router-link to="/">
        <img :src="logo" />
      </router-link>

      <nav class="flex head_first">
        <ul class="flex">
          <li class="q-mr-xl" style="list-style-type: none">
            <a href="/" class="text-caption text-center text-black text-weight-medium" style=" text-decoration: none">О нас</a>
          </li>
          <li class="q-mr-xl" style="list-style-type: none">
            <a href="#howto" class="text-caption text-center text-black text-weight-medium" style=" text-decoration: none">Как это работает</a>
          </li>
          <li class="q-mr-xl" style="list-style-type: none">
            <a href="#info" class="text-caption text-center text-black text-weight-medium" style=" text-decoration: none">FAQ</a>
          </li>
          <li class="" style="list-style-type: none">
            <a href="#delivery" class="text-caption text-center text-black text-weight-medium" style=" text-decoration: none">Доставка</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="right flex items-center head_second">
      <nav class="flex">
        <ul class="flex items-center">
          <li class="q-mr-xl" style="list-style-type: none">
            <span class="text-caption text-center text-weight-medium">+7 (707) 837 20 70</span>
          </li>
          <li class="q-mr-sm " style="list-style-type: none">
            <a href="https://t.me/Qqainnkaey" style="text-decoration: none; color: black" tabindex="1">
              <q-icon name="fa-brands fa-telegram" rounded size="sm"/>
            </a>
          </li>
          <li class="q-mr-xl" style="list-style-type: none">
            <a href="https://www.instagram.com/haidukuruipaq/" style="text-decoration: none; color: black" tabindex="1">
              <q-icon name="fa-brands fa-instagram-square" rounded size="sm"/>
            </a>
          </li>
          <li class="q-mr-sm" style="list-style-type: none">
              <q-btn color="black" label="Подобрать витамины" rounded size="sm"/>
          </li>
          <li class="">
            <a href="/recommendation">
              <q-icon name="fa-solid fa-circle-user" size="sm"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="hamburger_menu">
      <input id="menu__toggle" type="checkbox"/>
      <label class="menu__btn" for="menu__toggle"><span></span></label>

      <ul class="menu__box" style="list-style-type: none">
        <li><a href="#" class="menu__item">О нас</a></li>
        <li><a href="#" class="menu__item">Как это работает</a></li>
        <li><a href="#" class="menu__item">FAQ</a></li>
        <li><a href="#" class="menu__item">Доставка</a></li>
        <li><a href="#" class="menu__item">+7 (707) 837 20 70</a></li>
        <li class="flex">
          <a href="#" class="menu__item"><q-icon name="fa-brands fa-telegram" rounded size="sm"/></a>
          <a href="#" class="menu__item"><q-icon name="fa-brands fa-instagram-square" rounded size="sm"/></a>
        </li>
        <li><a href="#" class="menu__item"><q-btn color="orange" label="Пройти опрос" no-caps rounded size="sm"/></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import logo from '../assets/icons/logo.svg'
import instagram from '../assets/icons/instagram.svg'
import telegram from '../assets/icons/telegram.svg'
export default {
  name: "header",
  data(){
    return{
      logo, instagram, telegram
    }
  }
}
</script>

<style scoped>
.header{
  padding: 0 310px  0 310px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
}
.hamburger_menu{
  display: none;
}
a{
  text-decoration: none;
}
a:link, a:visited{
  color: black;
}
a:hover{
  color: black;
}

@media  (max-width: 479px){
  .hamburger_menu{
    display: flex;
  }
  .head_first, .head_second{
    overflow: hidden;
  }
  #menu__toggle {
    opacity: 0;
  }

  #menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
  }
  #menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    visibility: visible;
    left: 0;
  }

  .menu__btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 20px;

    width: 26px;
    height: 26px;

    cursor: pointer;
    z-index: 1;
  }

  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;

    width: 100%;
    height: 2px;

    background-color: #616161;

    transition-duration: .25s;
  }
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }

  .menu__box {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    left: -100%;

    width: 300px;
    height: 100%;

    margin: 0;
    padding: 80px 0;

    list-style: none;

    background-color: #ECEFF1;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);

    transition-duration: .25s;
  }

  .menu__item {
    display: block;
    padding: 12px 24px;

    color: #333;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;

    text-decoration: none;

    transition-duration: .25s;
  }
  .menu__item:hover {
    background-color: #CFD8DC;
  }
}

</style>