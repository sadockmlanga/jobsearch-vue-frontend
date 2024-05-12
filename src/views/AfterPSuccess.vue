<template>
    <div class="bg-blue-100 min-h-screen flex justify-center items-center">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h2 class="text-3xl font-semibold text-blue-800 mb-4">Payment Successful!</h2>
        <p class="text-lg text-blue-700 mb-6">Thank you for your purchase. Your payment has been successfully processed.</p>
        <button @click="dashboard()" class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Back To Home</button>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  const dashboard = () => {
    window.location.assign('/');
  }
  </script>
  
 
  