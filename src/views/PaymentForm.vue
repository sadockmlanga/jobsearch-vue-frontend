<template>
  <div class="bg-gray-100 min-h-screen flex justify-center items-center">
    <div class="max-w-lg rounded-lg overflow-hidden">
      <div class="px-6 py-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Premium Job Posting Package
        </h1>
        <p class="text-lg text-gray-600 mb-6">
          Unlock exclusive features with our premium job posting package. Reach
          more candidates and find the perfect fit for your company.
        </p>
        <span class="text-xl font-semibold text-gray-800">$100</span>

        <div>
          <StripeCheckout
            ref="checkoutRef"
            :pk="publishableKey"
            :sessionId="sessionId"
          />
          <button @click="submit" :disabled="processing" class="bg-sky-500 hover:bg-sky-700 p-4 rounded-sm white">
            <span v-if="processing">Processing...</span>
            <span v-else>Pay now!</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import axios from "axios";

const publishableKey = "pk_test_51OMSreChVPmo7x9G4DGQairUnplVtd0ESLzeKXmCIo3Us6KpC2PYQfbknnbdxalJQRL3Kxt4lgZ7bV55mPeewjc500vVJiUbep";
let sessionId = ref(null);
let checkoutRef = ref(null);
const processing = ref(false);

const getSession = async () => {
  try {
    const response = await axios.get('/getSession');
    sessionId.value = response.data.id;
  } catch (error) {
    console.error('Error fetching session:', error);
  }
};

const submit = async () => {
  processing.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the timeout as needed
    checkoutRef.value.redirectToCheckout();
    // $refs.checkoutRef.redirectToCheckout();
  } catch (error) {
    console.error('Error during payment processing:', error);
  } finally {
    processing.value = false;
  }
};

onMounted(() => {
  getSession();
});
</script>


