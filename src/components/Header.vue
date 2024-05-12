<template>
  <header
    class="
      flex
      items-center
      justify-between
      px-6
      py-2
      bg-white
      border-b-4 border-indigo-600
    "
  >
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      
    </div>

    <div class="flex items-center">
      <div class="flex items-center">
        <div class="relative">
          <button
            @click="notificationOpen = !notificationOpen"
            class="flex mx-4 text-gray-600 focus:outline-none"
          >
          <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
          </button>

          <button @click="() => auth.logout()" class="px-2">OUT</button>


          
        </div>
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "../hooks/useSidebar";
import { useAuthStore } from "../store/AuthStore.ts"

const auth = useAuthStore();

const dropdownOpen = ref(false);
const { isOpen } = useSidebar();
const notificationOpen = ref(false);
</script>
