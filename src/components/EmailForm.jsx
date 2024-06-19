import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { emailSubmit } from "../services/operation/email";

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmitFunc = async (data) => {
    try {
      const response = await emailSubmit(data);
      if (response.status === 200) {
        setMessage(response?.data?.message);
      } else {
        setMessage(`response code ${response?.status}`);
      }
      console.log(message);
    } catch (error) {
      console.error(error);
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "" });
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmitFunc)}>
      <div className="flex flex-col items-center xl:flex-row gap-5">
        <input
          type="email"
          placeholder="Email Address"
          className="border-[1px] border-[#ABABAB] bg-white bg-no-repeat text-2xl lg:text-[2rem] p-5 w-[350px] h-[49px] lg:w-[514px] lg:h-[78px] rounded-[10px]
        "
          {...register("email", { required: true })}
        />

        <button className="text-2xl lg:text-[2rem] border-[1px] border-[#EA7B2C] bg-[#EA7B2C] text-white px-5 py-[10px] rounded-[10px] lg:h-[78px] flex items-center justify-center w-[213px]">
          Contact Me
        </button>
      </div>
      {errors.email && (
        <span className="-mt-1 text-[20px] text-red-500 flex justify-center lg:justify-start">
          Email address is required
        </span>
      )}
      {message && (
        <span
          className={`mt-1 text-2xl text-red-500 flex justify-center lg:justify-start ${
            message === "form submitted" && "text-green-500 font-semibold"
          }`}
        >
          {message}
        </span>
      )}
    </form>
  );
};

export default EmailForm;
