<template>
  <div class="form">
    <div>
      <h5 class="q-ma-none">Контактные данные</h5>
      <div class="flex justify-between">
        <q-input label="Имя" v-model="userData.name" rounded outlined label-color="grey" color="grey" dense/>
        <q-input label="Фамилия" v-model="userData.surname" rounded outlined label-color="grey" color="grey" dense/>
        <q-input label="Телефон" v-model="userData.phoneNumber" rounded outlined mask="+# (###) ### - ####" label-color="grey" color="grey" dense/>
        <span class="">*Номер телефона требуется для курьера или SMS от транспортной компании</span>
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
        phoneNumber: ''
      },
      dense: true
    }
  }
}
</script>

<style lang="scss" scoped>
.form{
  background: #FFFFFF;
  border-radius: 50px;
}
</style>