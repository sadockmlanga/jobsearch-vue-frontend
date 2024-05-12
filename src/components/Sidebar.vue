<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <span class="mx-2 text-2xl font-semibold text-white">z-JOBS</span>
        </div>
      </div>

      <nav class="mt-10">
        <!-- <p class="pl-4 text-xs font-semibold mb-4 text-gray-400">GENERAL</p> -->
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          to="/dashboard"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>

          <span class="mx-4">Dashboard</span>
        </router-link>
        <!-- <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          Examples
        </p> -->

        <router-link
          v-if="isAdmin"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'UsersList' ? activeClass : inactiveClass]"
          to="/list-users"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mx-4">Users</span>
        </router-link>

        <router-link
          v-if="isAdmin"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'Applications' ? activeClass : inactiveClass,
          ]"
          to="/applications"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mx-4">Applications</span>
        </router-link>

        <router-link
          v-if="isOwner"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'RecruiterJobs' ? activeClass : inactiveClass,
          ]"
          to="/rec-jobs"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mx-4">Jobs Posted</span>
        </router-link>

        <router-link
          v-if="isOwner"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'RecruiterApplications'
              ? activeClass
              : inactiveClass,
          ]"
          to="/rec-applications"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mx-4">Applicants</span>
        </router-link>

        <router-link
          v-if="isAdmin"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'JobsList' ? activeClass : inactiveClass]"
          to="/list-jobs"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mx-4">All Jobs</span>
        </router-link>

        <router-link
          v-if="isOwner"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Payments' ? activeClass : inactiveClass]"
          to="/payments"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mx-4">Package Payment</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "../hooks/useSidebar";

// Function to get user roles from localStorage
const getUserRoles = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log("user role", userData.role);

  if (userData.role) {
    return userData.role;
  } else {
    return [];
  }
};

// Check if the user has a specific role
const hasRole = (role) => {
  const userRole = getUserRoles();
  return userRole === role;
};

const isAdmin = hasRole(1);
const isOwner = hasRole(2);

const { isOpen } = useSidebar();
const activeClass = ref(
  "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
);
const inactiveClass = ref(
  "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
);
</script>
