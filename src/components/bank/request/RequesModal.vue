<template>
  <form class="container" @submit.prevent="onSubmit">
    <div class="title">Request</div>

    <div class="form-control">
      <div class="input-wrapper">
        <div class="form-item">
          <label for="name">Name</label>
          <input
            :class="['myInput', { invalid: nameError }]"
            type="text"
            id="name"
            v-model="name"
            @blur="nameBlur"
          />
          <small class="error-message" v-if="nameError">{{ nameError }}</small>
        </div>

        <div class="form-item">
          <label for="phone">Phone</label>
          <input
            :class="['myInput', { invalid: phoneError }]"
            type="text"
            id="phone"
            v-model="phone"
            @blur="phoneBlur"
          />
          <small class="error-message" v-if="phoneError">{{
            phoneError
          }}</small>
        </div>

        <div class="form-item">
          <label for="amount">Amount</label>
          <input
            :class="['myInput', { invalid: amountError }]"
            type="number"
            id="amount"
            v-model.number="amount"
            @blur="amountBlur"
          />
          <small class="error-message" v-if="amountError">{{
            amountError
          }}</small>
        </div>

        <div class="form-item">
          <label for="status">Status</label>
          <select class="myInput" id="status" v-model="status">
            <option value="done">Done</option>
            <option value="canceled">Canceled</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      <div class="footer-wrapper">
        <button class="button" type="submit" :disabled="isSubmitting">
          Create
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { useStore } from 'vuex'
import { useRequestForm } from '../../../helpers/request.form'

export default {
  emits: ['created'],
  setup (_, { emit }) {
    const store = useStore()
    const submit = async values => {
      await store.dispatch('request/create', values)
      emit('created')
    }

    return {
      ...useRequestForm(submit)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-family: 'Didact Gothic', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
  padding: 20px;
  width:400px;

  .title {
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    letter-spacing: 0.005em;
  }
  .text {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 40px;
    & > p {
      color: #5db678;
      margin: 0;
      display: inline-block;
      cursor: pointer;
    }
  }

  .form-control {
    .input-wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      .email {
        margin-right: 10px;
      }
      .form-item {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 5px;

        &:first-child {
          margin: 0px;
        }
        .error-message {
          position: absolute;
          top: 0px;
          left: 100px;
          color: #d40d1e;
        }
        .myInput {
          margin-top: 10px;
          background: #ffffff;
          border: 1px solid #b7c3d6;
          box-sizing: border-box;
          border-radius: 40px;
          height: 50px;
          padding: 0px 20px;

          &:focus {
            outline: none;
            border: 1px solid #5db678;
            box-shadow: 0px 4px 10px rgba(93, 182, 120, 0.5);
            box-sizing: border-box;
            border-radius: 40px;
            height: 50px;
          }
          &.invalid {
            border: 1px solid #d40d1e;
            box-shadow: 0px 4px 10px rgba(248, 53, 4, 0.5);
          }
        }

        label {
          margin-left: 20px;
        }
      }
    }
    .footer-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      .button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 16px;
        background: linear-gradient(180deg, #25af86 0%, #7cd46f 100%);
        border-radius: 24px;
        border: 1px solid #ffffff;
        width: 218px;
        height: 48px;
        color: #ffffff;
        &:focus {
          outline: none;
          border: 1px solid #ffffff;
          box-shadow: 0px 4px 10px rgba(93, 182, 120, 0.5);
        }
        &[disabled] {
          background: linear-gradient(180deg, #6a6d6c 0%, #9b9c9b 100%);
        }
      }
    }
  }
}
</style>
