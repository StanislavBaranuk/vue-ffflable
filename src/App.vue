<template>
  <div id="app" class="app-container">
    <div class="header">
      <button @click="prepareUsersForOutput">DONE</button>
    </div>
    <div class="app">
      <div class="wrapper">
        <forms-list :users="users" :countries="countries"/>
      </div>
      <div class="wrapper">
        <output-list :items="usersWillOutput"/>
      </div>
    </div>
  </div>
</template>

<script>
import FormsList from './components/FormsList'
import OutputList from './components/OutputList'
import Countries from '@/CountriesLoader'

export default {
  name: 'App',
  components: {
    FormsList,
    OutputList
  },
  data: () => {
    return {
      users: [
        {
          name: '',
          phone: ''
        }
      ],
      usersWillOutput: [],
      countries: Countries.countriesWithIcons
    }
  },
  methods: {
    prepareUsersForOutput: function () {
      this.usersWillOutput = JSON.parse(JSON.stringify(this.users.filter(function (user) { return user.status })))
    }
  }
}
</script>

<style scoped lang="scss">
  .app-container {
    .header {
      position: fixed;
      z-index: 2000;
      width: 100%;
      height: 100px;
      padding: auto;
      background-color: #2c3e50;

      button {
        margin-top: 25px;
        margin-left: calc(50% - 75px);
        padding: 10px;
        width: 150px;
        height: 50px;
        color: white;
        border-radius: 25px;
        border: 2px solid white;
        background-color: #2c3e50;
        outline: none;
        cursor: pointer;
      }

      button:hover {
        color: #9b9b9b;
        border: 2px solid #9b9b9b;
      }
    }

    .app {
      display: flex;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;

      .wrapper {
        margin-top: 100px;
      }

      .wrapper:first-child {
        width: 500px;
      }

      .wrapper:last-child {
        width: calc(100vw - 250px);
        min-width: 500px;
      }

    }
  }
</style>
