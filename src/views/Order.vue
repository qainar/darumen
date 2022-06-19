<template>
  <div>
    <Header/>
    <div class="order">
      <div class="wrapper">
        <h2 class="q-ma-none text-weight-bold">Оформление заказа</h2>
        <span class="q-mt-lg">Мы вернём 100% стоимости, если витамины вам не понравятся</span>

        <div class="flex">
          <div>
            <Form/>
          </div>
          <div>dasdas</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import Form from "../components/Form";
export default {
  name: "Order",
  components: {Form, Header}
}
</script>

<style lang="scss" scoped>
.order{
  background: #E2F5F4;
  .wrapper{
    padding: 0 310px  0 310px;
  }
}
</style>