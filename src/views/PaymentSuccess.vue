<template>
  <div class="bg-gray-100 min-h-screen flex justify-center items-center">
    <div class="max-w-md p-8 bg-white shadow-lg rounded-lg">
      <div class="text-center">
        <svg class="h-20 w-20 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h1 class="text-3xl font-semibold text-gray-800 mb-2">Payment Successful</h1>
        <p class="text-gray-600 mb-4">Thank you for your Service payment!</p>
      </div>
      <div class="text-center">
        <router-link to="/" @click="redirectToHome" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>