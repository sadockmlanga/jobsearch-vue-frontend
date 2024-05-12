<template>
  <div class="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 to-purple-600">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-3xl font-semibold mb-6 text-center">Register</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium mb-1">First Name</label>
          <input type="text" id="firstName" v-model="firstName" class="form-input" required>
        </div>
        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium mb-1">Last Name</label>
          <input type="text" id="lastName" v-model="lastName" class="form-input" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" v-model="email" class="form-input" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium mb-1">Password</label>
          <input type="password" id="password" v-model="password" class="form-input" required>
        </div>
        <div class="mb-4">
          <label for="role" class="block text-sm font-medium mb-1">Join as</label>
          <select id="role" v-model="role" class="form-select" required>
            <option value="" disabled>--select--</option>
            <option value="user">User</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>
        <div v-if="role === 'recruiter'" class="mb-4">
          <label for="companyName" class="block text-sm font-medium mb-1">Company Name</label>
          <input type="text" id="companyName" v-model="companyName" class="form-input">
        </div>
        <div class="flex justify-between items-center mt-6">
          <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Register</button>
          <p class="text-sm">Already Registered? <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../store/AuthStore";

const authStore = useAuthStore();

const firstName = ref("");
const lastName = ref("");
const companyName = ref("");
const email = ref("");
const password = ref("");
const role = ref("");

const register = async () => {
  const credentials = {
    firstName: firstName.value,
    lastName: lastName.value,
    company: companyName.value,
    role: role.value,
    email: email.value,
    password: password.value,
  };

  try {
    await authStore.register(credentials);
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

</script>

<style>
.form-input {
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.form-select {
  appearance: none;
  padding: 0.5rem 0.75rem;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
}

.form-select:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

</style>
