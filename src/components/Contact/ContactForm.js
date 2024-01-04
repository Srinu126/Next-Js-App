"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is <input
       className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
       focus:border-gray bg-transparent"
       type="text" placeholder="your name" {...register} />
      and I want to discuss a potential project. You can email me at{" "}
      <input
        type="email"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
       focus:border-gray bg-transparent"
        placeholder="your@email"
        {...register("Email", { required: true })}
      />
      or reach out to me on
      <input
        type="tel"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
       focus:border-gray bg-transparent"
        placeholder="your phone"
        {...register("Phone Number", { required: true })}
      />
      Here are some details about my project: <br/>
      <textarea placeholder="My Project is about...." rows={3} className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray
       focus:border-gray bg-transparent" {...register("Project Details", {})} />
      <input value='Send Request' className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark rounded cursor-pointer" type="submit" />
    </form>
  );
}
