import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = async (method, url, bodyData, headers, params) => {
  try {
    const response = await axiosInstance({
      method: method,
      url: url,
      data: bodyData || null,
      headers: headers || null,
      params: params || null,
    });
    return {
      data: response,
    };
  } catch (error) {
    // Check if the error response exists
    if (error.response) {
      return {
        data: error.response,
      };
    }
  }
};
