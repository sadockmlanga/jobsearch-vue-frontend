<template class="bg-gray-400 h-screen">
  <NavBar />
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col-reverse md:flex-row md:gap-8">
      <!-- Job Details -->
      <div
        v-if="job"
        class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 md:mr-4"
      >
        <div class=" text-center py-2">
          <h2 class="text-lg font-semibold ">Job Details:</h2>
        </div>
        <div class="px-6 py-4">
          <h2 class="text-xl font-bold text-gray-800 mb-2">{{ job.title }}</h2>
          <p class="text-gray-700 mb-4">{{ job.description }}</p>
          <div class="flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm10 10H6v-.707l3.646-3.647a1 1 0 011.415 0L14 9.293V12zm-8 0h2v2H6v-2zm0-4h8v2H6V8z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-gray-500 text-sm">{{ job.location }}</span>
          </div>
        </div>
        <div class="px-6 py-4 flex justify-between items-center">
          <span class="text-gray-500 text-sm"
            >Posted on {{ formatDate(job.created_at) }}</span
          >
        </div>
      </div>

      <!-- Application Form -->
      <div class="mt-8 flex-1">
        <h3 class="text-lg font-semibold mb-4 text-center">
          Apply for this Job
        </h3>
        <div class="text-center text-white w-auto">
          <div
            v-if="errorMessage"
            class="bg-red-500 p-4 uppercase font-semibold"
          >
            {{ errorMessage }}
          </div>
          <div
            v-if="successMessage"
            class="bg-sky-500 p-4 uppercase font-semibold"
          >
            {{ successMessage }}
          </div>
        </div>
        <form
          @submit.prevent="submitApplication"
          class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="coverLetter"
              >Cover Letter</label
            >
            <textarea
              v-model="coverLetter"
              id="coverLetter"
              name="coverLetter"
              rows="4"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Write your cover letter here..."
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="cv"
              >Upload CV</label
            >
            <input
              type="file"
              id="cv"
              name="cv"
              class="hidden"
              @change="handleFileUpload"
              ref="fileInput"
            />
            <button
              type="button"
              @click="openFileInput"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Select File
            </button>
            <span v-if="selectedFileName" class="text-gray-600">{{
              selectedFileName
            }}</span>
          </div>
          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import NavBar from "./NavBar";
import { useJobStore } from "../../store/JobStore";
import { useRoute } from "vue-router";
import axios from "axios";

const jobStore = useJobStore();
const route = useRoute();

const jobId = Number(route.params.id);
const job = ref<any>(null);

const coverLetter = ref("");

const fileInput = ref<HTMLInputElement | null>(null);
const selectedFileName = ref("");
const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);

const openFileInput = () => {
  fileInput.value?.click();
};

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (file) {
    selectedFileName.value = file.name;
  }
};

const submitApplication = async () => {
  errorMessage.value = null;
  successMessage.value = null;

  const formData = new FormData();
  formData.append("cover_letter", coverLetter.value);
  formData.append("job_id", jobId);
  const file = fileInput.value?.files?.[0];
  if (file) {
    formData.append("resume", file);
  }

  try {
    const response = await axios.post("/applications", formData);
    successMessage.value = response.data.message;

    coverLetter.value = "";
    // fileInput.value.value = "";
  } catch (error) {
    console.error("Error submitting application:", error);
    errorMessage.value = `Error submitting application. Please try again later.`;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

onMounted(async () => {
  await jobStore.getJobById(jobId);
  job.value = jobStore.job;
});
</script>
