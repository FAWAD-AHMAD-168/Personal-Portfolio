"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import Button from "@/components/customUI/Button";

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
  } = useForm<ContactFormData>({
    mode: "onBlur",
  });

  const submit = async (data: ContactFormData) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent!", {
          description: "I'll get back to you shortly.",
        });
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);

      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-[96%] sm:w-[85%] mx-auto flex flex-col gap-5 pb-10 bg-(--bg-secondary-color)"
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          autoComplete="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: {
              value: 30,
              message: "Name cannot exceed 30 characters",
            },
          })}
          className="w-full p-3 border border-(--text-secondary-color) rounded-sm text-(--text-primary-color) bg-(--bg-secondary-color) placeholder:text-(--text-secondary-color) outline-none focus:border-(--primary-color)"
        />
        {errors.name && (
          <p className="text-[12px] text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="w-full p-3 border border-(--text-secondary-color) rounded-sm text-(--text-primary-color) bg-(--bg-secondary-color) placeholder:text-(--text-secondary-color) outline-none focus:border-(--primary-color)"
        />
        {errors.email && (
          <p className="text-[10px] text-red-500 ">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Subject"
          autoComplete="off"
          {...register("subject", {
            required: "Subject is required",
            minLength: {
              value: 5,
              message: "Subject must be at least 5 characters",
            },
            maxLength: {
              value: 50,
              message: "Subject cannot exceed 50 characters",
            },
          })}
          className="w-full p-3 border border-(--text-secondary-color) rounded-sm text-(--text-primary-color) bg-(--bg-secondary-color) placeholder:text-(--text-secondary-color) outline-none focus:border-(--primary-color)"
        />
        {errors.subject && (
          <p className="text-[12px] text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Message"
          autoComplete="off"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 20,
              message: "Message must be at least 20 characters",
            },
            maxLength: {
              value: 500,
              message: "Message cannot exceed 500 characters",
            },
          })}
          className="w-full h-37.5 p-3 border border-(--text-secondary-color) rounded-sm text-(--text-primary-color) bg-(--bg-secondary-color) placeholder:text-(--text-secondary-color) outline-none focus:border-(--primary-color)"
        />
        {errors.message && (
          <p className="text-[12px] text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="md"
        variant="primary"
        className="w-full"
      >
        Send
      </Button>
    </form>
  );
};

export default Contact;
