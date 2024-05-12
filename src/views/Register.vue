<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700">Register</span>
      </div>

      <form class="mt-4" @submit.prevent="register">
        <label class="block">
          <span class="text-sm text-gray-700">First Name</span>
          <input
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="firstName"
            placeholder="Enter First Name"
          />
        </label>
        <label class="block">
          <span class="text-sm text-gray-700">Last Name</span>
          <input
            type="text"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="lastName"
            placeholder="Enter Last Name"
          />
        </label>
        <label class="block mt-4">
          <span class="text-sm text-gray-700">Register as</span>
          <select
            v-model="selectedRole"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          >
            <!-- <option value="user" defail>Select Role</option> -->
            <option value="user" default>User</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </label>
        <label class="block">
          <span class="text-sm text-gray-700">Email</span>
          <input
            type="email"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="email"
            placeholder="Enter Email"
            autocomplete="new-email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
            v-model="password"
            placeholder="Enter Password"
            autocomplete="new-password"
            
          />
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <a
              class="block text-sm text-indigo-700 fontme hover:underline"
              href="/login"
              >Having an Account? Login</a
            >
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
          >
            Sign Up
          </button>
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
const email = ref("");
const password = ref("");
const selectedRole = ref("");

const register = async () => {
  const credentials = {
    firstName: firstName.value,
    lastName: lastName.value,
    role: selectedRole.value,
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
