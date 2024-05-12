
<template>
  <div>
    <Breadcrumb breadcrumb="" />
  
 
    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 28 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                  fill="currentColor"
                />
                <path
                  d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                  fill="currentColor"
                />
                <path
                  d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                  fill="currentColor"
                />
                <path
                  d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                  fill="currentColor"
                />
                <path
                  d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                  fill="currentColor"
                />
                <path
                  d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{ totalUsers }}</h4>
              <div class="text-gray-500">Total Users</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                  fill="currentColor"
                />
                <path
                  d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                  fill="currentColor"
                />
                <path
                  d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{ totalRecruters }}</h4>
              <div class="text-gray-500">Total Recruiters</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{ totalJobs }}</h4>
              <div class="text-gray-500">Jobs</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8"></div>

    <div class="flex flex-col mt-8">
      <div class="container mx-auto">
    <div class="flex flex-row justify-between">
      <div>
        <input type="text" v-model="searchQuery" placeholder="Search..." class="my-4 px-4 py-2 w-auto border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <!-- <div>
        <button class="bg-sky-500 hover:bg-sky-700 text-white my-4 px-4 py-2 rounded-md">Add Job</button>
      </div> -->
  </div>

    <div class="overflow-x-auto">
      <table v-if="loading" class="min-w-full bg-white border border-gray-300">
        <tbody>
          <tr>
            <td class="px-6 py-4 text-center" colspan="4">Loading data...</td>
          </tr>
        </tbody>
      </table>
      <table v-else-if="paginatedData.length > 0" class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="(item, index) in paginatedData" :key="index">
            <td class="px-6 py-4 whitespace-nowrap">{{ item.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.fullName }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <!-- <button @click="editItem(index)" class="text-indigo-600 hover:text-indigo-900 focus:outline-none">Edit</button> -->
              <button @click="deleteItem(index)" class="text-red-600 hover:text-red-900 focus:outline-none ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-center my-4">No Recruiter found.</div>
    </div>
    <div class="flex justify-between items-center mt-4" v-if="!loading && paginatedData.length > 0">
      <div>
        <span class="text-sm text-gray-700">{{ paginationInfo }}</span>
      </div>
      <div>
        <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md mr-2 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Prev</button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Next</button>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Breadcrumb from "../partials/Breadcrumb.vue";
import { useDashboardStore } from "../store/DashboardStore";

interface Recruiters {
  id: number;
  firstName: string;
  lastName: string;
}

const dash = useDashboardStore();
const loading = ref(true);

const totalUsers = computed(() => dash.usersCount);
const totalRecruters = computed(() => dash.recruitersCount);
const totalJobs = computed(() => dash.jobsCount);
// const totalApplications = computed(() => dash.applicationsCount);

const tableData = ref<Recruiters[]>([]);
const searchQuery = ref('');
const itemsPerPage = 6;
let currentPage = ref(1);

const filteredData = computed(() => {
  const query = searchQuery.value.toLowerCase();
  if (!query) return tableData.value;

  return tableData.value.filter(item =>
    item.fullName.toLowerCase().includes(query) || item.email.toLowerCase().includes(query)
  );
});

onMounted(async () => {
  try {
    await dash.fetchCounts();
    await dash.fetchRecruiters();

    tableData.value = dash.recruiters.data.map((item: any, index: number) => ({
      id: index + 1,
      fullName: `${item.firstName} ${item.lastName}`,
      email: item.email,
    }));
  } catch (error) {
    console.error("Failed to fetch recruiters data:", error);
  } finally {
    loading.value = false;
  }
});

const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage));

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredData.value.slice(start, start + itemsPerPage);
});

const paginationInfo = computed(() => `Showing ${Math.min((currentPage.value - 1) * itemsPerPage + 1, filteredData.value.length)} to ${Math.min(currentPage.value * itemsPerPage, filteredData.value.length)} of ${filteredData.value.length} entries`);

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

// function editItem(index: number) {
//   console.log('Editing item at index:', index);
// }

function deleteItem(index: number) {
  console.log('Deleting item at index:', index);
}
</script>
