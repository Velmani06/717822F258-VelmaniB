import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/test";

const companyDetails = {
  companyName: "Karpagam college of Engineering,Coimbatore",
  ownerName: "Velmani",
  rollNo: "717822F258",
  ownerEmail: "717822f258@kce.ac.in",
  accessCode: "GEVSsY",
};

export const registerCompany = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/register`,
      companyDetails
    );
    console.log(" Registration Success:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      " Registration Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getAuthToken = async (clientID, clientSecret) => {
  try {
    const authData = {
      companyName: companyDetails.companyName,
      clientID,
      clientSecret,
      ownerName: companyDetails.ownerName,
      ownerEmail: companyDetails.ownerEmail,
      rollNo: companyDetails.rollNo,
    };

    const response = await axios.post(`${API_BASE_URL}/auth`, authData);
    console.log(" Auth Token Received:", response.data);
    return response.data.access_token;
  } catch (error) {
    console.error(" Auth Token Error:", error.response?.data || error.message);
    throw error;
  }
};
