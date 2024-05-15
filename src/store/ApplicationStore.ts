import axios from "axios";
import { defineStore } from "pinia";

interface ApplicationState {
    allApplications: any[];
    recruiterApplications: any;
    recruiterApplicants: any;
    jobApplication: any;
}

export const useApplicationStore = defineStore('application', {
    state: (): ApplicationState => ({
        allApplications: [],
        recruiterApplications: null,
        recruiterApplicants: null,
        jobApplication: null,
    }),
    actions: {
        async fetchAllApplications() {
            try {
                const response = await axios.get('/applications');
                this.allApplications = response.data.data;
                
            } catch (error) {
                console.log('Error fetching jobs:', error);
            }
        },
        async fetchRecruiterApplications(id: number) {
            try {
                const response = await axios.get(`/applications/rec/${id}`);
                this.recruiterApplications = response.data.data;
                
            } catch (error) {
                console.log('Error fetching job:', error);
            }
        },
        async fetchMyApplicants() {
            try {
                const response = await axios.get(`/applicant/recruiter-applications`);
                this.recruiterApplicants = response.data.data;
                
            } catch (error) {
                console.log('Error fetching job:', error);
            }
        },
        async getApplicantDetails(id: number) {
            try {
                const response = await axios.get(`/applications/${id}`)
                
                this.jobApplication = response.data.data;
                console.log('getApplicationdetailsNNN', this.jobApplication);
                
            } catch (error) {
                console.log(error);
                
            }
        },

        async updateApplicationStatus(id: number, status: string) {
            try {
                               
                await axios.post(`/applications/${id}`, { 'status': status});
               
                await this.getApplicantDetails(id);
                // this.fetchAllApplications()
            } catch (error) {
                console.log('Error fetching job:', error);
            }
        },
        
        async deleteApplication(id: number) {
            try {
                await axios.delete(`/applications/${id}`);
                await this.getApplicantDetails(id);
            } catch (error) {
                console.log('Error fetching job:', error);
            }
        },
    }
})