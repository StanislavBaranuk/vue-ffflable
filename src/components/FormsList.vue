<template>
  <div class="container">
    <div v-for="(item, index) in users" :key="index+1">
      <custom-form :countries="countries" :user="item" :form-key="index+1"></custom-form>
    </div>
    <button @click="users.push({name: '', phone: ''})">ADD USER</button>
  </div>
</template>

<script>

import CustomForm from './Form/Form'

export default {
  name: 'FormsList',
  components: {
    CustomForm
  },
  props: {
    users: {
      type: Array
    },
    countries: {
      type: Array
    }
  },
  data: () => {
    return {
      formsCounter: 1
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    padding-bottom: 50px;
    width: 100%;

    button {
      margin-top: 25px;
      margin-left: calc(50% - 75px);
      padding: 10px;
      width: 150px;
      height: 50px;
      color: #92d58f;
      background-color: white;
      border-radius: 25px;
      border: 2px solid #92d58f;
      outline: none;
      cursor: pointer;
    }

    button:hover {
      color: green;
      border: 2px solid green;
    }
  }
</style>
