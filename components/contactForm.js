"use client";


import { useState } from "react";
import { useForm } from "react-hook-form";
import { SendIcon } from "./icons";

const ContactForm = () => {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setSubmitError("");

      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Handle success
      setSubmitSuccess(true);
      reset(); // Reset form fields

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <form
      className="mt-[60px] sm:mt-[90px] md:mt-[120px] xl:mt-[148px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-red_reign text-[24px] sm:text-[28px] xl:text-[32px] leading-[120%] font-inter font-medium pb-[20px] sm:pb-[30px] xl:pb-[41px]">
        Talk to our experts
      </h1>

      {submitSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p className="font-inter font-normal text-[14px] sm:text-[15px]">
            Thank you for contacting us! We&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {submitError && (
        <div className="bg-red_republic border border-red_republic text-white px-4 py-3 rounded mb-4">
          <p className="font-inter font-normal text-[14px] sm:text-[15px]">
            {submitError}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-[16px] sm:gap-[18px] xl:gap-[22px] text-private-jet">
        {/* Email */}
        <div>
          <input
            type="email"
            className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] focus:outline-1 outline-red_reign rounded-[10px] border ${
              errors.email ? "border-red_republic" : "border-[#797B86]"
            } font-inter font-normal`}
            placeholder="Email Address*"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red_republic text-[12px] mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* First Name and Last Name */}
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[18px]">
          <div className="w-full">
            <input
              type="text"
              className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] focus:outline-1 outline-red_reign rounded-[10px] border ${
                errors.firstName ? "border-red_republic" : "border-[#797B86]"
              } font-inter font-normal`}
              placeholder="First Name*"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-red_republic text-[12px] mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] focus:outline-1 outline-red_reign rounded-[10px] border ${
                errors.lastName ? "border-red_republic" : "border-[#797B86]"
              } font-inter font-normal`}
              placeholder="Last Name*"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="text-red_republic text-[12px] mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="tel"
            className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] focus:outline-1 outline-red_reign rounded-[10px] border ${
              errors.phone ? "border-red_republic" : "border-[#797B86]"
            } font-inter font-normal`}
            placeholder="Phone Number*"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9+\-\s()]{7,15}$/,
                message: "Please enter a valid phone number",
              },
              minLength: {
                value: 10,
                message: "Phone number must be at least 7 characters long",
              },
              maxLength: {
                value: 15,
                message: "Phone number must not exceed 13 characters",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red_republic text-[12px] mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

      

        {/* Message TextArea */}
        <div>
          <textarea
            className={`p-[15px] sm:p-[18px] xl:p-[20px] w-full text-[14px] sm:text-[15px] xl:text-[16px] focus:outline-1 outline-red_reign rounded-[10px] border ${
              errors.message ? "border-red_republic" : "border-[#797B86]"
            } font-inter font-normal`}
            placeholder="Message*"
            rows="6"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red_republic text-[12px] mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-start gap-[10px]">
          <input
            type="checkbox"
            id="terms"
            className={`w-4 sm:w-5 h-4 sm:h-5  cursor-pointer border ${
              errors.agreeToTerms ? "border-red_republic" : "border-[#797B86]"
            } mt-1`}
            {...register("agreeToTerms", {
              required: "You must agree to receive communications",
            })}
          />
          <div>
            <label
              htmlFor="terms"
              className="text-[14px] sm:text-[15px] xl:text-[16px] text-black font-inter font-normal"
            >
              I agree to receive communications from KaziAfya
            </label>
            {errors.agreeToTerms && (
              <p className="text-red_republic text-[12px] mt-1">
                {errors.agreeToTerms.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end w-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-[8px] sm:py-[9px] xl:py-[10px] px-[20px] sm:px-[25px] xl:px-[30px] bg-red_republic hover:bg-red_republic transition-all duration-700 ease-in-out w-[120px] sm:w-[132px] text-white text-[14px] sm:text-[15px] xl:text-[16px] font-inter font-normal rounded-[30px] flex gap-[10px] items-center justify-center disabled:bg-red_reign disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? "Sending..." : "Send"}</span>
            {!isSubmitting && <SendIcon />}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
