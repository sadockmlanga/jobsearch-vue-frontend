<template>
  <NavBar />
  <div class="container mx-auto px-4 md:px-16 py-8">
    <h1 class="text-3xl font-semibold mb-8 text-center">Find Your Dream Job</h1>

    <!-- Category Select -->
    <div class="flex flex-wrap mb-8">
      <div class="w-full md:w-1/2 lg:w-1/3 pr-4 md:my-2">
        <!-- <label for="category" class="block text-gray-700 font-medium mb-2"
          >Category</label
        > -->
        <select
          v-model="selectedCategory"
          id="category"
          name="category"
          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
        >
          <option value="">All Categories</option>
          <option
            v-for="category in listCategory"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>

      <div class="w-full md:w-1/2 lg:w-1/3 pr-4 my-2">
        <!-- <label for="location" class="block text-gray-700 font-medium mb-2"
          >Location</label
        > -->
        <select
          v-model="selectedLocation"
          id="location"
          name="location"
          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
        >
          <option value="">All Locations</option>
          <option
            v-for="location in listLocation"
            :key="location.id"
            :value="location.id"
          >
            {{ location.name }}
          </option>
        </select>
      </div>

      <div class="w-full lg:w-1/3 md:my-2">
        <!-- <label for="searchQuery" class="block text-gray-700 font-medium mb-2"
          >Search</label
        > -->
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search jobs..."
          id="searchQuery"
          name="searchQuery"
          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
        />
      </div>
    </div>

    <!-- Job Cards -->
    <div v-if="isLoading" class="text-center text-gray-600">Loading...</div>
    <div
      v-else-if="paginatedJobs.length === 0"
      class="text-center text-gray-600"
    >
      No Jobs Found
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
      <div
        v-for="job in paginatedJobs"
        :key="job.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden uppercase"
      >
        <div class="px-4 py-2">
          <h2 class="text-lg font-bold text-gray-800 mb-1">{{ job.title }}</h2>
          <h2 class="text-lg font-bold text-gray-700 mb-1"><span class="text-sm text-gray-500 uppercase px-2">Company:</span> {{ job.user.company }}</h2>
          <p class="text-md text-gray-600 mb-1"><span class="text-sm text-gray-500 uppercase px-2">Category:</span> {{ job.category.name }}</p>
          <p class="text-sm text-gray-500"><span class="text-sm text-gray-500 uppercase px-2">Location:</span>{{ job.location.name }}</p>
          <p class="text-sm text-gray-500"> <span class="text-sm text-gray-500 uppercase px-2">Posted on:</span>
            {{ formatDate(job.created_at) }}
          </p>
        </div>
        <div class="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <button
            @click="applyJob(job)"
            class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>

    <div v-if="totalPages > 1" class="mt-8 flex justify-center items-center">
      <span class="mr-4">Page {{ currentPage }} of {{ totalPages }}</span>

      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 mr-2 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
      >
        Prev
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from "vue";
import { useJobStore } from "../../store/JobStore";
import { useRouter } from "vue-router";
import NavBar from "@/views/Frontend/NavBar.vue";
import { useGeneralStore } from "@/store/GenetalStore";

const gen = useGeneralStore();

const jobStore = useJobStore();
const isLoading = ref(false);
const searchQuery = ref("");
const selectedCategory = ref("");
const selectedLocation = ref("");
const router = useRouter();

const listLocation = ref("");
const listCategory = ref("");

jobStore.fetchJobs();

onMounted(async () => {
  await gen.fetchCategories();
  await gen.fetchLocations();
  listLocation.value = gen.locations;
  listCategory.value = gen.categories;
});

const filteredJobs = computed(() => {
  let filtered = jobStore.allJobs;

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.user.company.toLowerCase().includes(query) ||
        job.location.name.toLowerCase().includes(query)
    );
  }

  // Filter by selected category
  if (selectedCategory.value) {
    filtered = filtered.filter(
      (job) => job.category.id === selectedCategory.value
    );
  }

  // Filter by selected location
  if (selectedLocation.value) {
    filtered = filtered.filter(
      (job) => job.location.id === selectedLocation.value
    );
  }

  return filtered;
});

const applyJob = (job: any) => {
  router.push({ name: "apply", params: { id: job.id } });
  console.log("Applying for job:", job);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Pagination
const itemsPerPage = 10;
let currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(filteredJobs.value.length / itemsPerPage)
);

const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredJobs.value.slice(start, start + itemsPerPage);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Watching currentPage changes and scroll to top of the page
watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>
