<template>
  <Breadcrumb breadcrumb="RecruiterApplications" />

  <div class="container mx-auto">
    <div class="flex flex-row justify-between">
      <div>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search ..."
          class="my-4 px-4 py-2 w-auto border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
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
      <table
        v-else-if="paginatedData.length > 0"
        class="min-w-full bg-white border border-gray-300"
      >
        <thead class="bg-gray-100">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Job
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="(item, index) in paginatedData" :key="index">
            <td class="px-6 py-4 whitespace-nowrap">{{ item.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.fullName }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.job }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.status }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <router-link
                :to="{ name: 'UserDetails', params: { id: item.dataId } }"
              >
                <button
                  class="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                >
                  View
                </button>
              </router-link>
              <button
                @click="deleteItem(item.dataId)"
                class="text-red-600 hover:text-red-900 focus:outline-none ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-center my-4">No User found.</div>
    </div>
    <div
      class="flex justify-between items-center mt-4"
      v-if="!loading && paginatedData.length > 0"
    >
      <div>
        <span class="text-sm text-gray-700">{{ paginationInfo }}</span>
      </div>
      <div>
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md mr-2 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Breadcrumb from "../../partials/Breadcrumb.vue";
import { useApplicationStore } from "../../store/ApplicationStore";

interface Application {
  id: number;
  name: string;
  title: string;
  status: string;
}

const tableData = ref<Application[]>([]);
const loading = ref(true);
const dash = useApplicationStore();

// const recruiterId = Number(route.params.id);

onMounted(async () => {
  try {
    await dash.fetchMyApplicants();

    tableData.value = dash.recruiterApplicants.map(
      (item: any, index: number) => ({
        id: index + 1,
        dataId: item.id,
        fullName: `${item.user.firstName} ${item.user.lastName}`,
        job: item.job.title,
        status: item.status,
      })
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
  } finally {
    loading.value = false;
  }
});

const searchQuery = ref("");
const itemsPerPage = 10;
let currentPage = ref(1);

const filteredData = computed(() => {
  const query = searchQuery.value.toLowerCase();
  if (!query) return tableData.value;

  return tableData.value.filter(
    (item) =>
      item.fullName.toLowerCase().includes(query) ||
      item.job.toLowerCase().includes(query)
  );
});

const totalPages = computed(() =>
  Math.ceil(filteredData.value.length / itemsPerPage)
);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredData.value.slice(start, start + itemsPerPage);
});

const paginationInfo = computed(
  () =>
    `Showing ${Math.min(
      (currentPage.value - 1) * itemsPerPage + 1,
      filteredData.value.length
    )} to ${Math.min(
      currentPage.value * itemsPerPage,
      filteredData.value.length
    )} of ${filteredData.value.length} entries`
);

// Methods
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

const deleteItem = async (dataId: number) => {
  try {
    await dash.deleteApplication(dataId);

    // Find the index of the item to be deleted
    const index = tableData.value.findIndex((item) => item.dataId === dataId);
    if (index !== -1) {
      // Remove the item from the tableData array
      tableData.value.splice(index, 1);
    }
  } catch (error) {
    console.error("Failed to delete item:", error);
  }
};
</script>
