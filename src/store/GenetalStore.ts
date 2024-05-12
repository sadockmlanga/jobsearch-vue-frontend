import axios from "axios";
import { defineStore } from "pinia";

interface JobState {
    categories: any;
    locations: any;
    
}

export const useGeneralStore = defineStore('general', {
    state: (): JobState => ({
        categories: [],
        locations: [],
    }),
    actions: {
        async fetchCategories() {
            try {
                const response = await axios.get('/categories');
                this.categories = response.data.data;
                
            } catch (error) {
                console.log('Error fetching categ:', error);
            }
        },
        async fetchLocations() {
            try {
                const response = await axios.get('/location');
                this.locations = response.data.data;
                
            } catch (error) {
                console.log('Error fetching locations:', error);
            }
        },



    }
})