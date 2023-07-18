import { useParams } from "react-router-dom";
import axios from "axios";
const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(
      "http://localhost:8080/api/careers/" + id,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHVkZW50Iiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpYXQiOjE2ODk2NDc2MzIsImV4cCI6MTY5MDA3OTYzMn0.5Bp291NXhuyf9LwdcnG1YFWXfGCsUk9SGCM3jgAETG4",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error or failed request
  }
};

export default CareerDetailsLoader;
