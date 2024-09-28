import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID TM6cI_k7-K-0hdXS6HQwpAg1jWTDOmk6qwYVr_aHOKY",
    },
    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};
export default searchImage;
