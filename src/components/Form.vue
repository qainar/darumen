<template>
  <div class="form">
    <div class="q-pa-xl">
      <h5 class="q-ma-none">Контактные данные</h5>
      <div class="flex justify-between q-mt-md" style="gap: 30px">
        <q-input label="Имя" v-model="userData.name" rounded outlined label-color="grey" color="grey" dense/>
        <q-input label="Фамилия" v-model="userData.surname" rounded outlined label-color="grey" color="grey" dense/>
        <q-input label="Телефон" v-model="userData.phoneNumber" rounded outlined mask="+# (###) ### - ####" label-color="grey" color="grey" dense/>
      </div>

      <div class="q-mt-sm">
        <span class="text-caption text-weight-light" style="opacity: 0.5">*Номер телефона требуется для курьера или SMS от транспортной компании</span>
        <hr class="hr">
      </div>

      <div class="q-mt-md">
        <h5 class="q-ma-none">Доставка (бесплатна при оплате онлайн)</h5>
        <h6 class="q-ma-none">Пожалуйста, укажите ваш адрес</h6>
        <q-input label="Адрес" v-model="userData.address" rounded outlined label-color="grey" color="grey" dense class="q-mt-sm"/>
        <hr class="hr q-mt-lg">
      </div>

      <div class="q-mt-md">
        <h5 class="q-ma-none">Оплата</h5>
        <div class="flex justify-between q-mt-sm" style=" gap: 14px;">
          <div @click="pay='Online'" class="pay" :class="{active: pay==='Online'}">Онлайн</div>
          <div @click="pay='Get'" class="pay" :class="{active: pay==='Get'}">При получении</div>
        </div>
      </div>

      <div class="q-mt-md" >
        <h5 class="q-ma-none">Промокод</h5>
        <q-input label="Промокод" v-model="userData.promo" rounded outlined label-color="grey" color="grey" dense class="q-mt-sm"/>
      </div>

      <q-btn label="Отменить" class="full-width text-weight-bold q-mt-sm" style="background: #FAE48C; border-radius: 50px; font-size: 14px; color:#00000080;" />
      <q-btn label="Промокод применён" class="full-width text-weight-bold q-mt-sm" style="background: #C2D1D0; border-radius: 50px; font-size: 14px; color:#00000080;" disable/>
      <div class="flex justify-center q-mt-md">
        <p class="text-center text-caption text-weight-light" style="width: 400px">Заполняя форму вы соглашаетесь с нашей политикой конфиденциальности и принимаете пользовательское соглашение ,
          договор оферты и условия доставки и оплаты</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data(){
    return{
      userData:{
        name: '',
        surname: '',
        phoneNumber: '',
        address: '',
        promo: ''
      },
      dense: true,
      pay: '',

    }
  }
}
</script>

<style lang="scss" scoped>
.form{
  background: #FFFFFF;
  border-radius: 50px;
}
.hr{
  background: #000000;
  border-radius: 5px;
}
.pay{
  border: 1px solid rgba(0, 0, 0, 0.46);
  border-radius: 55px;
  cursor: pointer;
  padding: 10px 20px 10px 20px;
  font-size: 14px;
  width: 48%;
  &:hover{
    transition: 0.5s;
    background: #526EDA;
    border: 1px solid #526EDA;
  }
}
.active{
  background: #526EDA;
  border: 1px solid #526EDA;
}

</style>