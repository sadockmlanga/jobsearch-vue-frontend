<template>
  <div class="screen-h-100vh">
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="ADD JOB" />

    <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-2 max-w-2xl">
      <h2 class="text-2xl font-medium mb-4 text-center">
        FILL THE FORM TO CREATE JOB
      </h2>
      <div
        v-if="successMessage"
        class="mt-4 text-white bg-green-600 p-4 text-center capitalize"
      >
        {{ successMessage }}
      </div>
      <div
        v-if="failMessage"
        class="mt-4 text-white bg-red-600 p-4 text-center capitalize"
      >
        {{ failMessage }}
      </div>

      <form @submit.prevent="handleCreate">
        <div class="mb-2">
          <label for="title" class="block text-gray-700 font-medium mb-2"
            >Job Title</label
          >
          <input
            type="text"
            id="title"
            name="title"
            v-model="title"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div class="mb-2">
          <label for="location" class="block text-gray-700 font-medium mb-2"
            >Job Category</label
          >
          <select
            v-model="category"
            id="location"
            name="location"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option disabled>Select Job Category</option>
            <option v-for="category in listCategory" :key="category.id" :value="category.id">{{ category.name }}</option>

          </select>
        </div>
        <div class="mb-2">
          <label for="location" class="block text-gray-700 font-medium mb-2"
            >Job Location</label
          >
          <select
            v-model="location"
            id="location"
            name="location"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option disabled>Select Job Location</option>
            <option v-for="location in listLocation" :key="location.id" :value="location.id">{{ location.name }}</option>

          </select>
        </div>


        <div class="mb-2">
          <label for="details" class="block text-gray-700 font-medium mb-2"
            >Job Description</label
          >
          <textarea
            id="details"
            name="details"
            v-model="description"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="5"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600"
          >
            ADD JOB
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Breadcrumb from "../partials/Breadcrumb.vue";
import axios from "axios";
import { useGeneralStore } from "../store/GenetalStore.ts";

const gen = useGeneralStore();

const title = ref("");
const listLocation = ref(""); 
const listCategory = ref(""); 
const category = ref("");
const location = ref("");
const description = ref("");
const successMessage = ref("");
const failMessage = ref("");

const handleCreate = async () => {
  const jobData = {
    title: title.value,
    category_id: category.value,
    location_id: location.value, 
    description: description.value,
  };

  try {
    await axios.post("/jobs", jobData);
    successMessage.value = "Job added successfully";

    title.value = "";
    listLocation.value = ""; // Use the new variable name here
    description.value = "";
  } catch (error) {
    failMessage.value = "Failed To add Job";

    console.log("Failed to Add Job:", error);
  }
};

onMounted(async () => {
  await gen.fetchCategories();
  await gen.fetchLocations();
  listLocation.value = gen.locations;
  listCategory.value = gen.categories; 
  
});
</script>
