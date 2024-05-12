<template>
      <Breadcrumb breadcrumb="Payments" />
      <h1 class="text-center uppercase p-2 py-4">Pay With Stripe</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="cardholder" class="block text-gray-700 font-bold mb-2">Cardholder's Name</label>
        <input v-model="cardHolder" id="cardholder" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <label for="cardnumber" class="block text-gray-700 font-bold mb-2">Card Number</label>
        <input v-model="cardNumber" id="cardnumber" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="mb-4">
          <label for="expiry" class="block text-gray-700 font-bold mb-2">Expiration Date</label>
          <input v-model="expDate" id="expiry" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-4">
          <label for="cvv" class="block text-gray-700 font-bold mb-2">CVV/CVC</label>
          <input v-model="ccv" id="cvv" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
import axios from "axios";
import Breadcrumb from '../partials/Breadcrumb.vue'

const cardHolder = ref('');
const cardNumber = ref(null);
const ccv = ref(null);
const expDate = ref(null);


const handleSubmit = () => {
  const paymentData = {
    cardNumber: cardNumber.value,
    ccv: ccv.value,
    expDate: expDate.value,
  }
};
</script>
  </script>
  
  
  