<template>
  <div class="container">
    <div class="item" v-for="(item, index) in items" :key="index">
      <div class="text">
        <span>name</span>
        <i>{{item.name}}</i>
      </div>
      <div class="text" v-if="item.phone.length > 0">
        <span>phone</span>
        <img :src="item.phoneCode.iconUrl" alt="" height="30" width="30">
        <i>{{item.phoneCode.tooltip}} {{item.phone}}</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutputList',
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    width: 100%;

    .item {
      background-color: #f2f8fe;
      height: 100%;
      padding: 10px;

      .text {
        padding: 10px;
        font-size: 15px;
        background-color: white;

        span {
          font-size: 20px;
          font-weight: bold;
          text-transform: uppercase;
        }

        i {
          margin-left: 20px;
        }

        img {
          margin-bottom: -8px;
          margin-left: 20px;
        }
      }
    }
  }
</style>
