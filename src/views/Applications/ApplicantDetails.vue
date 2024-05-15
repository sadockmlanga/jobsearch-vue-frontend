<template>
  <div>
    <template v-if="userDetails">
      <div
       
        class="bg-white overflow-hidden shadow rounded-lg border mb-4"
      >
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Applicant Profile
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the applicant.
          </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ userDetails.user.firstName }} {{ userDetails.user.lastName }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Job Title</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ userDetails.user.email }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ userDetails.job.title }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Application Date
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ new Date(userDetails.created_at).toLocaleDateString() }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Resume</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a
                  :href="rootUrl + userDetails.resume"
                  target="_blank"
                  class="bg-sky-500 text-white p-2 rounded-md hover:bg-sky-700"
                  >View Resume</a
                >
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Cover Letter</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ userDetails.cover_letter }}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Status</dt>
              <dd
                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 uppercase font-bold"
              >
                {{ userDetails.status }}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Form to change application status -->
      <form @submit.prevent="updateStatus">
        <label for="status" class="block text-sm font-medium text-gray-700"
          >Change Status:</label
        >
        <select
          id="status"
          v-model="newStatus"
          class="mt-1 block w-full p-2 border-gray-300 rounded-md"
        >
          <option value="processing">Processing</option>
          <option value="rejected">Rejected</option>
          <option value="accepted">Accepted</option>
        </select>
        <button
          type="submit"
          class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Update Status
        </button>
      </form>
    </template>

    <div v-else class="text-gray-500">No user details found.</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useApplicationStore } from "../../store/ApplicationStore";

const route = useRoute();
const applicationId = Number(route.params.id);
const userDetails = ref(null);
const newStatus = ref("");
const application = useApplicationStore();

const rootUrl = `http://127.0.0.1:8090/`;

onMounted(async () => {
  try {
    await fetchUserDetails();
  } catch (error) {
    console.error("Failed to fetch user application details:", error);
  }
});

const fetchUserDetails = async () => {
  try {
    await application.getApplicantDetails(applicationId);
    
    userDetails.value = application.jobApplication;
    console.log('Fetched UserDetails:', userDetails.value);
  } catch (error) {
    console.error("Failed to fetch user application details:", error);
  }
};

const updateStatus = async () => {
  try {
    await application.updateApplicationStatus(applicationId, newStatus.value); //status changes to the database
    await fetchUserDetails(); 
    console.log('updatess', userDetails.value); //still returns same unupdated data
    
  } catch (error) {
    console.error("Failed to update application status:", error);
  }
};
</script>
