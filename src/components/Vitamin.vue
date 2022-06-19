<template>

    <div class="flex q-pa-sm cards">
      <div style="width: 390px" class="q-pa-sm">

        <div class="flex items-start justify-between">
          <img :src="picture">

          <div class="flex">
            <div class="flex column">
              <h5 class="q-ma-none">{{name}}</h5>
              <div class="flex column items-start">
                <div class="items-center flex">
                  <img :src="countryIcon" class="q-mr-sm"/>
                  <span class="text-weight-light" style="color: #000000; opacity: 0.6; font-size: 14px">{{countryName}}</span>
                </div>

                <span class="text-weight-light" style="color: #000000; opacity: 0.6; font-size: 14px">({{count}} капсул)</span>
              </div>
            </div>
            <span class="text-weight-light q-ml-sm q-mt-sm" style="color: #000000; opacity: 0.6; font-size: 14px">{{weight}}</span>
          </div>

          <q-icon name="fa-solid fa-xmark" size="19px"/>
        </div>

        <div class="q-mt-sm">
          <p>{{description}}</p>
          <router-link to="#" class="q-mt-sm" style="text-decoration: none">еще</router-link>
        </div>

        <div>
          <q-btn label="Дозировка" outline rounded class="float-right"/>
        </div>

      </div>
    </div>

</template>

<script>

export default {
  name: "Vitamin",
  data(){
  },
  props:{
    picture:{
      type: String
    },
    name:{
      type: String
    },
    countryIcon:{
      type: String
    },
    countryName:{
      type: String
    },
    weight:{
      type: String
    },
    count:{
      type: String
    },
    description:{
      type: String
    }
  }
}
</script>

<style scoped>
.cards{
  background: #FFFFFF;
  border-radius: 16px;

}
</style>