import { defineStore } from 'pinia';
import axios from 'axios';

interface DashboardState {
  usersCount: number;
  recruitersCount: number;
  jobsCount: number;
  applicationsCount: number;
  recruiters: any[]; // Change this type based on your backend response
  users: any[]; // Change this type based on your backend response
}

export const useDashboardStore = defineStore({
  id: 'dashboard',
  state: (): DashboardState => ({
    usersCount: 0,
    recruitersCount: 0,
    jobsCount: 0,
    applicationsCount: 0,
    recruiters: [],
    users: [],
  }),
  actions: {
    async fetchCounts() {
      try {
        const response = await axios.get('/admin/dash/counts');
        const data = response.data;
        this.usersCount = data.usersCount;
        this.recruitersCount = data.recruitersCount;
        this.jobsCount = data.jobsCount;
        this.applicationsCount = data.applicationsCount;
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    },
    async fetchRecruiters() {
      try {
        const response = await axios.get('/admin/dash/recruiters');
        this.recruiters = response.data;
      } catch (error) {
        console.error('Error fetching recruiters:', error);
      }
    },
    async fetchUsers() {
      try {
        const response = await axios.get('/admin/dash/users');
        
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
});
