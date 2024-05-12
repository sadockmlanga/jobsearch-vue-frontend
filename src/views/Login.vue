<template>
  <div class="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 to-purple-600">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-3xl font-semibold mb-6 text-center">Login</h2>
      <form @submit.prevent="handleLogin">
  
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" v-model="email" class="form-input" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium mb-1">Password</label>
          <input type="password" id="password" v-model="password" class="form-input" required>
        </div>

        <div class="flex justify-between items-center mt-6">
          <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Sign in</button>
          <p class="text-sm">Dont Have account? <router-link to="/register" class="text-blue-600 hover:underline">Register</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../store/AuthStore";

const authStore = useAuthStore();


const email = ref("");
const password = ref("");

const handleLogin = async () => {
  const credentials = {
    email: email.value,
    password: password.value,
  };
  try {
    await authStore.login(credentials);
    
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>
