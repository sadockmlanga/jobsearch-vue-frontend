<!-- <template>
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
          <button @click="submit" :disabled="processing" class="bg-sky-500 p-4 rounded-sm bg-white">
            <span v-if="processing">Processing...</span>
            <span v-else>Pay now!</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import axios from "axios";

export default {
  components: {
    StripeCheckout,
  },
  data() {
    return {
      publishableKey: "pk_test_51OMSreChVPmo7x9G4DGQairUnplVtd0ESLzeKXmCIo3Us6KpC2PYQfbknnbdxalJQRL3Kxt4lgZ7bV55mPeewjc500vVJiUbep",
      sessionId: null,
      processing: false // Added processing state
    }
  },
  mounted() {
    this.getSession()
  },
  methods: {
    async getSession() {
      try {
        const response = await axios.get('/getSession');
        this.sessionId = response.data.id;
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    },
    async submit() {
      this.processing = true; // Set processing state to true
      try {
        // Simulate some processing time before redirecting to Stripe
        await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the timeout as needed
        this.$refs.checkoutRef.redirectToCheckout();
      } catch (error) {
        console.error('Error during payment processing:', error);
      } finally {
        this.processing = false; // Reset processing state
      }
    }
  }
}
</script> -->
