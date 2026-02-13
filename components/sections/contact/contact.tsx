"use client";

import { useForm } from "react-hook-form";

import Button from "@/components/customUI/Button";
import { toast } from "react-toastify";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const submit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mwvnlrpr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },

        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Thanks for connecting — I’ll get back to you shortly!");
        reset();
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred while sending the message.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-[85%]  mx-auto flex flex-col gap-5 pb-10 bg-(--bg-secondary-color)"
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className="w-full mx-auto p-3 border border-(--text-secondary-color) rounded-sm text-(--text-primary-color) bg-(--bg-secondary-color) placeholder:text-(--text-secondary-color) outline-none focus:border-(--primary-color) autofill:none "
        />
        {errors.name && (
          <span className="text-[12px] text-red-500">
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-full mx-auto p-3 border border-(--text-secondary-color) rounded-sm text-(--text-primary-color) bg-(--bg-secondary-color) placeholder:text-(--text-secondary-color) outline-none focus:border-(--primary-color) autofill:none "
        />
        {errors.email && (
          <p className="text-[12px] text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: "Subject is required" })}
          className="w-full mx-auto p-3 border border-(--text-secondary-color) rounded-sm text-(--text-primary-color) bg-(--bg-secondary-color) placeholder:text-(--text-secondary-color) outline-none focus:border-(--primary-color) autofill:none "
        />
        {errors.subject && (
          <p className="text-[12px] text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
          className="w-full h-37.5 mx-auto p-3  border border-(--text-secondary-color) rounded-sm text-(--text-primary-color) bg-(--bg-secondary-color) placeholder:text-(--text-secondary-color) outline-none focus:border-(--primary-color) autofill:none "
        />
        {errors.message && (
          <p className="text-[12px] text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="md" variant="primary" className="w-full ">
        Send
      </Button>
    </form>
  );
};

export default Contact;
