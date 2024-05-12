# Simple Recruitment Website - Vue Frontend

This is the frontend repository for the Simple Recruitment Website project. It provides a user interface for recruiters to post jobs, users to search for jobs, apply, and view the job progress.

## Features

- **Job Posting:** Recruiters can post job openings, including job title, description, and requirements.
- **Job Search:** Users can search for jobs based on keywords, location, or category.
- **Job Application:** Users can apply for jobs directly through the website.
- **Job Progress:** Users can view the progress of their job applications, including status updates.
- **Premium Features:** Recruiters can pay for premium features to enhance their job postings and visibility.
- **Applicant Management:** Recruiters can see job applicants and manage applications by accepting or rejecting them.

## Technologies Used

- **Vue.js:** Frontend framework for building user interfaces.
- **Pinia:** State management library for Vue.js applications.
- **Vue Router:** Official router for Vue.js applications, enabling navigation between pages.
- **Vue Stripe:** 
- **Axios:** Promise-based HTTP client for making AJAX requests.

## Getting Started

To get started with the frontend application, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Configure the backend API endpoint in the `.env` file or directly in the code.
4. Run the development server using `npm run serve`.

## Configuration

Before running the frontend application, make sure to configure the backend API endpoint in the `.env` file or directly in the code. This will ensure that the frontend can communicate with the backend for fetching and updating data.

Example:

```
VUE_APP_API_BASE_URL=http://localhost:8090/api
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
