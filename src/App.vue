<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="page">
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',

  components: {

  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },

}
</script>

<style scoped>
.page{
  scroll-behavior: smooth;
}
</style>
