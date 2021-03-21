import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mN3UH7vCDoBT9p8aGG_t3BNjOS9BXFxGYAzOUg5fYes",
  }
});
