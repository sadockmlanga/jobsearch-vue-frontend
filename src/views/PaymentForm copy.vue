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
          <stripe-checkout
            ref="checkoutRef"
            :pk="publishableKey"
            :sessionId="sessionId"
          />
          <button @click="submit" class="bg-sky-500 p-4 rounded-sm bg-white">
            Pay now!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"; // Import ref function from Vue Composition API
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import axios from "axios";

// Create a ref for StripeCheckout component
// const checkoutRef = ref();

const publishableKey =
  "pk_test_51OMSreChVPmo7x9G4DGQairUnplVtd0ESLzeKXmCIo3Us6KpC2PYQfbknnbdxalJQRL3Kxt4lgZ7bV55mPeewjc500vVJiUbep";
let sessionId = ref(null); // Declare sessionId as a ref
let checkoutRef = ref(null);

const getSession = async () => {
  try {
    const res = await axios.get("/getSession");
    sessionId.value = res.data.id; // Access the value property of ref
  } catch (err) {
    console.error(err);
  }
};

const submit = () => {
  if (checkoutRef.value) {
    checkoutRef.value.redirectToCheckout(); // Access the value property of ref
  }
};

onMounted(getSession);
</script>
