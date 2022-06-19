<template>
      <div class="flex justify-between q-mb-lg">
        <img :src="icon" class="q-mr-lg"/>

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

      </div>
</template>

<script>
export default {
  name: "Set",
  data(){
    return{

    }
  },
  props:{
    icon: {
      type: String
    },
    name: {
      type: String
    },
    weight: {
      type: String
    },
    countryIcon: {
      type: String
    },
    countryName: {
      type: String
    },
    count:{
      type: String
    },
    price:{
      type: Number
    }
  }
}
</script>

<style scoped>

</style>