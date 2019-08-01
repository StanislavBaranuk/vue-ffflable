<template>
  <div class="selector">
    <button type="button" @click="toggle" v-if="items.length">
      <img :src="items[active.index].iconUrl" alt="" height="30" width="30" >
      <span>{{items[active.index].tooltip}}</span>
    </button>
    <div class="items-list" v-if="isOpen">
      <div class="item" v-for="(item, index) in items" :key="index" @click="setActive(index)" v-if="item.iconUrl !== undefined">
        <img class="icon" :src="item.iconUrl" height="30" width="30" alt="">
        <span class="title">{{item.title}}</span>
        <span class="tooltip">{{item.tooltip}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            iconUrl: '',
            title: 'default',
            tooltip: ''
          }
        ]
      }
    },
    active: {
      type: Object
    }
  },
  data: () => {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    },
    setActive: function (index) {
      this.active.index = index
      this.toggle()
    }
  }
}
</script>

<style scoped lang="scss">
  .selector {
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
    border-radius: 5px;

    button {
      height: 100%;
      width: 100%;
      display: flex;
      outline: none;
      border: none;
      background-color: white;
      border-radius: 5px;

      * {
        margin-top: auto;
        margin-bottom: auto;
      }

      span {
        margin-left: 10px;
      }
    }

    button:active {
      background-color: #737373;
    }

    .items-list {
      margin-top: -5px;
      position: absolute;
      z-index: 1000;
      max-height: 500px;
      width: 320px;
      overflow-y: scroll;
      overflow-x: hidden;

      .item {
        padding: 10px;
        display: flex;
        width: 100%;
        height: 50px;
        background-color: white;

        * {
          margin-top: auto;
          margin-bottom: auto;
        }

        span {
          margin-left: 10px;
        }

        .tooltip {
          color: #646464;
          font-size: 13px;
        }
      }

      .item:hover {
        background-color: #bebebe;
      }
    }
  }
</style>
