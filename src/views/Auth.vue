<template>
  <form class="container" @submit.prevent="onSubmit">
    <div class="title">Authorization</div>
    <div class="text">
      If you don't have an account you can
      <p>Register</p>
    </div>

    <div class="form-control">
      <div class="input-wrapper">
        <div class="email">
          <label for="email">Email</label>
          <input
            :class="['myInput', { invalid: eError }]"
            type="email"
            id="email"
            v-model="email"
            @blur="eBlur"
          />
          <small class="error-message" v-if="eError">{{ eError }}</small>
        </div>
        <div class="password">
          <label for="password">Password</label>
          <input
            :class="['myInput', { invalid: pError }]"
            type="password"
            id="password"
            v-model="password"
            @blur="pBlur"
          />
          <small class="error-message" v-if="pError">{{ pError }}</small>
        </div>
      </div>
      <div class="footer-wrapper">
        <div class="info-text">Lorem ipsum dolor sit amet consectetur.</div>
        <button class="button" type="submit" :disabled="isSubmitting">Enter</button>
      </div>
    </div>
  </form>
</template>

<script>
import { useLogin } from '../helpers/login.form'

export default {
  setup () {
    return { ...useLogin() }
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
  width: 650px;

  .title {
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
      .email {
        margin-right: 10px;
      }
      .email,
      .password {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        .error-message {
          position: absolute;
          top: 85px;
          left: 20px;
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
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;
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
      }
      .info-text {
      }
    }
  }
}
</style>
