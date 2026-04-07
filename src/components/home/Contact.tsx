"use client";

import { useForm } from "react-hook-form";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({ mode: "onBlur" });

  const email = watch("email");
  const mobileNumber = watch("mobileNumber");

  const onSubmit = async (data: ContactFormData) => {
    // TODO: wire up submission
    console.log(data);
  };

  const inputBase =
    "w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-[#FB8C00]";
  const inputNormal = `${inputBase} border-gray-600`;
  const inputError = `${inputBase} border-red-500`;

  return (
    <section
      id="contact"
      className="w-full bg-[#0d0d14] py-20 px-6 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-3"
          style={{ fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif" }}
        >
          Contact us
        </h2>
        <p className="text-gray-400 mb-12">
          Get in touch with our talent specialists.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form card */}
          <div className="bg-[#16161f] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-1">Send us a Message</h3>
            <p className="text-gray-400 text-sm mb-6">
              Got a question? Send it through and we&apos;ll get back to you.
            </p>

            {isSubmitSuccessful ? (
              <p className="text-green-400 font-medium py-8 text-center">
                Message sent! We&apos;ll be in touch shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                {/* First / Last name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("firstName", { required: "Required" })}
                      placeholder="First Name*"
                      className={errors.firstName ? inputError : inputNormal}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("lastName", { required: "Required" })}
                      placeholder="Last Name*"
                      className={errors.lastName ? inputError : inputNormal}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    {...register("email", {
                      validate: (v) =>
                        v || mobileNumber || "Please provide an email or mobile number",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Email*"
                    className={errors.email ? inputError : inputNormal}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Mobile number */}
                <div>
                  <input
                    {...register("mobileNumber", {
                      validate: (v) =>
                        v || email || "Please provide an email or mobile number",
                    })}
                    type="tel"
                    placeholder="Mobile Number*"
                    className={errors.mobileNumber ? inputError : inputNormal}
                  />
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-xs mt-1">{errors.mobileNumber.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    {...register("message", { required: "Please enter a message" })}
                    rows={5}
                    placeholder="Your role requirements / additional info*"
                    className={`${errors.message ? inputError : inputNormal} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-semibold text-gray-900 transition hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#FB8C00" }}
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right side placeholder */}
          <div className="hidden md:block rounded-2xl overflow-hidden h-full min-h-120 relative">
            <img
              src="/world-trade-center.jpg"
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
