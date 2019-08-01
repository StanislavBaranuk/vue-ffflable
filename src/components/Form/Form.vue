<template>
  <form class="custom-form" action="#">
    <p class="header">New user</p>
    <div class="field">
      <p>Name</p>
      <div class="input">
        <input :class="$v.user.name.$invalid ? 'error-input' : ''" id="name" type="text" placeholder="Name" v-model="user.name" @input="changeAdditionalUserInfo">
        <div class="error-text" v-if="!$v.user.name.required">Field is required</div>
      </div>
    </div>
    <div class="field">
      <p>Phone</p>
      <div class="input">
        <div class="country-selector" @click="changeAdditionalUserInfo">
          <country-selector :items="countries" :active="activeCountry"></country-selector>
        </div>
        <input :class="!$v.user.phone.required || !$v.user.phone.numeric || !$v.user.phone.minLength ? 'error-input' : ''" id="mobile" type="text" placeholder="Phone" v-model="user.phone" @input="changeAdditionalUserInfo">
        <div class="error-text" v-if="!$v.user.phone.required">Field is required</div>
        <div class="error-text" v-if="!$v.user.phone.numeric">Number must contain just the numbers</div>
        <div class="error-text" v-if="$v.user.phone.numeric && !$v.user.phone.minLength">Number must contain at least 9 numbers </div>
      </div>
    </div>
  </form>

</template>

<script>
import CountrySelector from './Dropdown'
import { required, minLength, numeric, requiredIf } from 'vuelidate/lib/validators'

export default {
  name: 'Form',
  components: {
    CountrySelector
  },
  props: {
    user: {
      type: Object
    },
    formKey: {
      type: Number
    },
    countries: {
      type: Array
    }
  },
  data: () => {
    return {
      activeCountry: {
        index: 0
      }
    }
  },
  computed: {
    isPhoneWillRequired () {
      return this.formKey % 2 !== 0
    }
  },
  methods: {
    changeAdditionalUserInfo: function () {
      this.user.status = !this.$v.user.name.$invalid && !(this.formKey % 2 !== 0 && this.user.phone.length < 1) && !this.$v.user.phone.$invalid
      this.user.phoneCode = this.countries[this.activeCountry.index]
      this.user.index = this.formKey
    }
  },
  validations: {
    user: {
      name: {
        required
      },
      phone: {
        required: requiredIf(function () {
          return this.isPhoneWillRequired
        }),
        numeric,
        minLength: minLength(9)
      }
    }
  }
}
</script>

<style scoped lang="scss">

  $from-padding: 30px;
  $form-background: #2a2d32;
  $form-text-color: white;
  $fields-interval: 30px;
  $label-input-interval: 10px;
  $input-blocks-interval: 5px;

  .custom-form {
    padding-top: $from-padding;
    padding-bottom: $from-padding;
    width: 500px;
    background-color: $form-background;
    color: $form-text-color;

    .error-input {
      border: 1px solid red !important;
    }

    .error-text {
      position: absolute;
      margin-top: 60px;
      font-size: 10px;
      color: red;
    }

    .header {
      margin-bottom: $from-padding - 10px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
    }

    .field {
      margin-bottom: $fields-interval;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      height: 70px;

      p {
        font-size: 12px;
        text-transform: uppercase;
      }

      .input {
        margin-top: $label-input-interval;
        display: flex;

        .country-selector {
          margin-right: $input-blocks-interval;
          width: 100px;
          border-radius: 5px;
        }

        input {
          padding: 15px 10px 15px 10px;
          display: block;
          width: calc(100% - 22px);
          border: 1px solid darkgray;
          border-radius: 5px;
          outline: none;
        }
      }
    }
  }
</style>
