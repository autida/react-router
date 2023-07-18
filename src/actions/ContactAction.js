import { redirect } from "react-router-dom";
import axios from "axios";

const ContactAction = async ({ request }) => {
  const data = await request.formData();
  const postData = {
    email: data.get("email"),
    message: data.get("message"),
  };
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHVkZW50Iiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpYXQiOjE2ODk2NjUxNTksImV4cCI6MTY5MDA5NzE1OX0.W5V-1Za75o_aFPghlV1bWRagEh1KVerdslObXJL1Pac",
    },
  };

  // Make the POST request
  try {
    const response = await axios.post(
      "http://localhost:8080/api/messages",
      postData,
      config
    );

    // Handle the response as needed
    console.log(response.data); // or do something else with the data
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error("Error:", error.message);
  }

  return redirect("/");
};

export default ContactAction;
