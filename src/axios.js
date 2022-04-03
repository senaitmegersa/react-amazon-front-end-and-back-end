import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: 'http://localhost:5001/project-cb65f/us-central1/api',
  baseURL:'https://us-central1-project-cb65f.cloudfunctions.net/api',
});

export default instance;
// http://localhost:5001/project-cb65f/us-central1/api