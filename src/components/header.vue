<template>
  <div class="header flex justify-between">
    <div class="left flex items-center">
      <router-link to="/">
        <img :src="logo" />
      </router-link>

      <nav class="flex">
        <ul class="flex">
          <li class="q-mr-xl" style="list-style-type: none">
            <router-link to="/" class="text-caption text-center text-black text-weight-medium" style=" text-decoration: none">О нас</router-link>
          </li>
          <li class="q-mr-xl" style="list-style-type: none">
            <router-link to="/" class="text-caption text-center text-black text-weight-medium" style=" text-decoration: none">Как это работает</router-link>
          </li>
          <li class="q-mr-xl" style="list-style-type: none">
            <router-link to="/" class="text-caption text-center text-black text-weight-medium" style=" text-decoration: none">FAQ</router-link>
          </li>
          <li class="" style="list-style-type: none">
            <router-link to="/" class="text-caption text-center text-black text-weight-medium" style=" text-decoration: none">Доставка</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="right flex items-center">
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
a{
  text-decoration: none;
}
a:link, a:visited{
  color: black;
}
a:hover{
  color: black;
}

</style>