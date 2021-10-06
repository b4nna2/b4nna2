import axios from "axios";

export default axios.create({
  baseURL: "http://b6b8-3-108-92-91.ngrok.io/api",
  headers: {
    "Content-type": "application/json"
  }
});
