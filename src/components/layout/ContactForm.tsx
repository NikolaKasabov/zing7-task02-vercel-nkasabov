"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../ui/Button";

type Inputs = {
  username: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
    toast.success("Thank you for contacting us.");
  };

  return (
    <form className="space-y-[24px]" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="relative">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full h-[72px] px-[22px] rounded-xl placeholder:text-[21px] placeholder:font-medium placeholder:text-[#787878] placeholder:tracking-[-0.29px] text-[21px] font-medium"
          {...register("username", {
            required: "This field is required",
          })}
        />
        <p className="absolute top-[calc(100%+4px)] left-[10px] text-red-500 text-xs">{errors.username?.message}</p>
      </div>

      <div className="relative">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full h-[72px] px-[22px] rounded-xl placeholder:text-[21px] placeholder:font-medium placeholder:text-[#787878] placeholder:tracking-[-0.29px] text-[21px] font-medium"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        <p className="absolute top-[calc(100%+4px)] left-[10px] text-red-500 text-xs">{errors.email?.message}</p>
      </div>

      <div className="relative">
        <textarea
          cols={30}
          rows={10}
          placeholder="Message"
          className="w-full h-[190px] px-[22px] py-[12px] resize-none rounded-xl placeholder:text-[21px] placeholder:font-medium placeholder:text-[#787878] placeholder:tracking-[-0.29px] text-[21px] font-medium"
          {...register("message", {
            required: "This field is required",
          })}
        ></textarea>
        <p className="absolute top-[calc(100%)] left-[10px] text-red-500 text-xs">{errors.message?.message}</p>
      </div>

      <Button
        primary
        className="!mt-[18px] !h-[56px] !px-5 !text-lg !font-bold !bg-[#00CC61] hover:!bg-[#40b87a] !border-[#00CC61] !rounded-lg max-sm:!w-full"
      >
        Send message <span className="ml-5">&gt;</span>
      </Button>
    </form>
  );
}
