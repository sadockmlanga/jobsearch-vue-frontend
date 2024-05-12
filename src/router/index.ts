import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

import JobCreate from "../views/JobCreate.vue";
import JobsList from "../views/JobsList.vue";
import UsersList from "../views/UsersList.vue";

import Login from "../views/Login.vue";

import NotFound from "../views/NotFound.vue";
import Applications from "@/views/Applications/Applications.vue";
import RecruiterApplications from "@/views/Applications/RecruiterApplications.vue";
import PaymentForm from "@/views/PaymentForm.vue";
import RecruiterJobs from "@/views/Applications/RecruiterJobs.vue";

import Jobs from "@/views/Frontend/Jobs.vue";
import JobApplication from "@/views/Frontend/JobApplication.vue";
// import HomePage from "@/views/Frontend/HomePage.vue";
import JobsApplied from "@/views/Frontend/JobsApplied.vue";
import Register from "@/views/Register.vue";

import PaymentSuccess from "@/views/PaymentSuccess.vue";

import UserDetails from "@/views/Applications/ApplicantDetails.vue"

const routes: Array<RouteRecordRaw> = [

  {
    path: "/",
    name: "Home",
    component: Jobs,
    meta: { layout: "empty" },
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { layout: "empty" },
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },

  {
    path: '/job-application/:id',
    name: 'apply',
    component: JobApplication,
    meta: { layout: "empty" },
  },

  {
    path: '/jobs-applied',
    name: 'JobsApplied',
    component: JobsApplied,
    meta: { layout: "empty" },
  },



  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/payment-sucess",
    name: "PaymentSuccess",
    component: PaymentSuccess,
  },


  {
    path: "/applications",
    name: "Applications",
    component: Applications,
  },
  {
    path: "/user-details/:id",
    name: "UserDetails",
    component: UserDetails,
  },

  {
    path: "/rec-jobs",
    name: "RecruiterJobs",
    component: RecruiterJobs,
  },

  {
    path: "/rec-applications",
    name: "RecruiterApplications",
    component: RecruiterApplications,
  },

  // {
  //   path: "/recruiter-applications/:id",
  //   name: "RecruiterApplications",
  //   component: RecruiterApplications,
  // },
  {
    path: "/payments",
    name: "Payments",
    component: PaymentForm,
  },
  {
    path: "/add-job",
    name: "JobCreate",
    component: JobCreate,
  },
  {
    path: "/list-jobs",
    name: "JobsList",
    component: JobsList,
  },
  {
    path: "/list-users",
    name: "UsersList",
    component: UsersList,
  },


  { path: "/:pathMatch(.*)*", component: NotFound , meta: { layout: "empty" },},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
