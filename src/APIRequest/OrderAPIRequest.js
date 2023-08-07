import { errorToast, successToast } from "../utils/TostMessage";
import axiosInstance from "../utils/axiosInstance";

export const placeOrderReq = async (data) => {
  try {
    const response = await axiosInstance.post("/placeOrder", data);
    if (response.status === 200 && response.data["data"].status === "success") {
      successToast("Order placed successfully!");
    } else {
      errorToast("Something went wrong! Try again.");
    }
  } catch (error) {
    errorToast("Something went wrong! Try again.");
  }
};
