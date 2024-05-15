import axios from "axios";
import { defineStore } from "pinia";

interface JobState {
    allJobs: any[];
    job: any;
    recruiterJobs: any;
    
}

export const useJobStore = defineStore('job', {
    state: (): JobState => ({
        allJobs: [],
        job: null,
        recruiterJobs: null,
    }),
    actions: {
        async fetchJobs() {
            try {
                const response = await axios.get('/jobs');
                this.allJobs = response.data.data;
                
            } catch (error) {
                console.log('Error fetching jobs:', error);
            }
        },
        async getJobById(id: number) {
            try {
                const response = await axios.get(`/jobs/${id}`);
                this.job = response.data.data;
                
            } catch (error) {
                console.log('Error fetching job:', error);
            }
        },
        async fetchMyJobsPosted() {
            try {
                const response = await axios.get(`/applicant/recruiter-jobs`);
                this.recruiterJobs = response.data.data;
                console.log('reccc', this.recruiterJobs);
                
                
            } catch (error) {
                console.log('Error fetching job:', error);
            }
        },

        async deleteJob(id: number) {
            try {
                await axios.delete(`/jobs/${id}`);
                
            } catch (error) {
                console.log('Error fetching job:', error);
            }
        },
    }
})