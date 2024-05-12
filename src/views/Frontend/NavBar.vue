<template>
    <nav class="bg-sky-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo on the left -->
          <div class="flex-shrink-0">
            <router-link to="/" class="text-white font-semibold">R-JOBZ</router-link>
          </div>
  
          <!-- Centered navigation links -->
          <div class="hidden md:flex flex-1 justify-center">
            <router-link
              to="/"
              class="text-gray-100 hover:bg-sky-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Home</router-link>
            <router-link
              to="/jobs-applied"
              class="text-gray-100 hover:bg-sky-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Applied Jobs</router-link>
          </div>
  
          <!-- Conditional rendering of sign-in or logout link -->
          <div class="hidden md:flex md:items-center">
            <!-- If user is authenticated, show logout link -->
            <button
              v-if="isAuthenticated"
              @click="() => auth.logout()"
              class="text-gray-100 hover:bg-sky-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Logout</button>
            <!-- If user is not authenticated, show sign-in link -->
            <router-link
              v-else
              to="/login"
              class="text-gray-100 hover:bg-sky-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Sign in</router-link>
          </div>
  
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="text-gray-100 hover:bg-sky-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile menu, show/hide based on menu state -->
      <div v-show="isOpen" class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            to="/"
            class="text-gray-100 hover:bg-sky-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Home</router-link>
          <router-link
            to="/jobs-applied"
            class="text-gray-100 hover:bg-sky-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Applied Jobs</router-link>
          <!-- Conditional rendering of sign-in or logout link on mobile -->
          <button
            v-if="isAuthenticated"
            @click="logout"
            class="text-gray-100 hover:bg-sky-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Logout</button>
          <router-link
            v-else
            to="/register"
            class="text-gray-100 hover:bg-sky-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Sign in</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useAuthStore} from '../../store/AuthStore.ts'
  
  const auth = useAuthStore();
  const isOpen = ref(false);

  function isAuthenticated() {
  const token = localStorage.getItem('token');
  return !!token;
 }
  

  </script>
  
  <style>
  body {
    font-family: "Poppins", sans-serif;
  }
  </style>
  