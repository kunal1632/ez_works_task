import { apiConnector } from "../apiConnector";
import { emailEndpoints } from "../apis";
import toast from "react-hot-toast";

const { EMAIL_SUBMIT_API } = emailEndpoints;

export async function emailSubmit(data) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", EMAIL_SUBMIT_API, data);
    console.log("EMAIL_SUBMIT_API....", response);
    return response?.data;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  } finally {
    toast.dismiss(toastId);
  }
}
