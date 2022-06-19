<template>
  <div class="back">

    <div class="flex column items-center" style="padding-top: 100px">
      <h4 class="text-weight-bold q-ma-none q-mb-sm">Как это работает</h4>
      <span class="text-weight-light">6 простых шагов</span>
    </div>

    <div>
      <q-timeline :layout="layout" color="orange">

        <q-timeline-entry side="right">
          <div class="q-pa-sm" style="border-radius: 15px; background-color: orange; display: inline-flex">
              <q-icon name="fa-solid fa-1" />
          </div>
          <h6 class="text-weight-medium q-ma-none q-mt-lg">Пройдите опрос</h6>
          <p class="text-body2 text-weight-light q-mt-lg" style="width: 565px; float: left">Ответьте на вопросы врачей и нутрициологов о вашем образе жизни, питании, физических нагрузках,
            качестве сна, аллергиях, хронических заболеваниях, принимаемых препаратах и т. д.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left">
          <div class="q-pa-sm" style="border-radius: 15px; background-color: orange; display: inline-flex">
              <q-icon name="fa-solid fa-2" />
          </div>
          <h6 class="text-weight-medium q-ma-none q-mt-lg">Изучите рекомендацию</h6>
          <p class="text-body2 text-weight-light q-mt-lg" style="width: 565px; float: right">Учтём ваши особенности, составим персональную рекомендацию и пришлём результаты на почту.
            Объясним, как и почему приём этих витаминов поможет достичь ваших целей.</p>
        </q-timeline-entry>

        <q-timeline-entry side="right">
          <div class="q-pa-sm" style="border-radius: 15px; background-color: orange; display: inline-flex">
            <q-icon name="fa-solid fa-3" />
          </div>
          <h6 class="text-weight-medium q-ma-none q-mt-lg">Поставьте приоритеты</h6>
          <p class="text-body2 text-weight-light q-mt-lg" style="width: 565px; float: left">Например: я хочу улучшить свой сон, я хочу улучшить состояние
            своих волос или я хочу принимать витамины во время своей беременности.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left">
          <div class="q-pa-sm" style="border-radius: 15px; background-color: orange; display: inline-flex">
            <q-icon name="fa-solid fa-4" />
          </div>
          <h6 class="text-weight-medium q-ma-none q-mt-lg">Управляйте набором</h6>
          <p class="text-body2 text-weight-light q-mt-lg" style="width: 565px; float: right">Ориентируйтесь на свои приоритеты и настройте окончательный состав набора. После оформления
            заказа вы получите подтверждение на почту и номер для отслеживания посылки.</p>
        </q-timeline-entry>

        <q-timeline-entry side="right">
          <div class="q-pa-sm" style="border-radius: 15px; background-color: orange; display: inline-flex">
            <q-icon name="fa-solid fa-5" />
          </div>
          <h6 class="text-weight-medium q-ma-none q-mt-lg">Следите за прогресом</h6>
          <p class="text-body2 text-weight-light q-mt-lg" style="width: 565px; float: left">Принимайте витамины и следите за изменениями в самочувствии. В конце
            месяца мы пришлём вам на почту мини-опрос, чтобы зафиксировать текущий прогресс.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left">
          <div class="q-pa-sm" style="border-radius: 15px; background-color: orange; display: inline-flex">
            <q-icon name="fa-solid fa-6" />
          </div>
          <h6 class="text-weight-medium q-ma-none q-mt-lg">Получите заказ</h6>
          <p class="text-body2 text-weight-light q-mt-lg" style="width: 565px; float: right">Курьер свяжется с вами заранее, чтобы уточнить удобную дату, время и место
            доставки вашего набора витаминов. Либо заберите посылку из ближайшего постамата или пункта выдачи.</p>
        </q-timeline-entry>

      </q-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowTo",
  props:{
    title:{
      type: String,
    },
    icon:{
      type: String
    },
    text: {
      type: String
    }
  },
  computed:{
    layout(){
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>

<style lang="scss" scoped>
.back{
  background-image: url("../assets/images/backround.svg");

  background-repeat: no-repeat;
  background-size: 100%;
}
</style>