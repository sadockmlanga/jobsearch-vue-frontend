import axios from 'axios';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();

interface User {
    name: string;
    email: string;
    role: number;
    token: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: null,
        isAuthenticated: false,
    }),

    getters: {
        getUser(): User | null {
            const user = this.user;
            const token = localStorage.getItem('token');
            const isAuthenticated = !!user && !!token; // Check both user and token

            if (isAuthenticated && !this.isAuthenticated) {
                this.isAuthenticated = true;
            }

            return user;
        },
    },

    actions: {
        async login(credentials: object) {
            try {
                const response = await axios.post('/login', credentials);
                const userData = response.data.user as User;
                
                localStorage.setItem('user', JSON.stringify(userData));
                localStorage.setItem('token', JSON.stringify(userData.token));

                if (userData.role == 1 || userData.role == 2) {
                    console.log('here');
                    window.location.assign('/dashboard');

                    // router.push('/dashboard');
                } else {
                    // router.push('/');
                    window.location.assign('/');

                }

                this.user = userData;

                return true;
            } catch (error) {
                console.error('Authentication failed:', error);
                throw new Error('Authentication failed');
            }
        },

        async register(credentials: object) {
            try {
                const response = await axios.post('/register', credentials);
                const userData = response.data.user as User;

                localStorage.setItem('user', JSON.stringify(userData));
                localStorage.setItem('token', JSON.stringify(userData.token));

                // Checking user role ..role is inform of Number 1 = admin, 2 = recruiter. 3 = admin
                if (userData.role == 1 || userData.role == 2) {
                    console.log('here');
                    window.location.assign('/dashboard');
                    // router.push('/dashboard');
                } else {
                    // router.push('/');
                    window.location.assign('/');
                }
                this.user = userData;

                return true;
            } catch (error) {
                console.error('Authentication failed:', error);
                throw new Error('Authentication failed');
            }
        },

        logout(): void {
            localStorage.clear();
            this.user = null;
            this.isAuthenticated = false;
        },
    },
});
