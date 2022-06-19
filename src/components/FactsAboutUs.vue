<template>
      <div class="flex column items-center">
        <img class="text-center" :src="icon"/>
        <h6 class="text-center q-mt-lg q-ma-none text-weight-bold">{{title}}</h6>
        <p class="text-center q-mt-lg" style="width: 300px">{{text}}</p>
      </div>
</template>

<script>
export default {
  name: "FactsAboutUs",
  props:{
    icon:{
      type: String
    },
    title:{
      type: String
    },
    text:{
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .icons{
    width: 143px;
    height: 143px;
  }
</style>