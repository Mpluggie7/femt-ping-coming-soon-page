import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

type Inputs = {
  email: string;
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email"));

  return (
    <div className="min-h-screen md:h-[1024px] w-full flex flex-col items-center justify-between p-8">
      <div className="md:w-1/2 flex flex-col items-center">
        <img src="./images/logo.svg" alt="logo" className="w-12 md:w-20 my-8" />
        <h1 className="text-[var(--Gray)] md:text-[2.65em] mb-4 md:mb-2">
          We are launching{" "}
          <span className="text-black font-bold md:text-[1em]">soon!</span>
        </h1>
        <p className="text-xs md:text-lg mb-8">Subscribe and get notified</p>
        <form
          className="w-full md:flex gap-4 mb-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="md:w-2/3 mb-2">
            <input
              type="text"
              id="email"
              placeholder="Your email address..."
              className={`w-full h-8 md:h-10 border border-[var(--Blue)] rounded-full text-xs px-8 md:px-6
              ${errors.email ? "border-[var(--Light-Red)]" : ""}
              `}
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
            {errors.email && (
              <div className="text-center md:text-left md:px-6 text-[12px] text-[var(--Light-Red)] italic mt-1 mb-4">
                Please provide a valid email address
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full md:w-1/3 h-8 md:h-10 bg-[var(--Blue)] rounded-full text-white font-semibold text-xs"
          >
            Notify Me
          </button>
        </form>
        <img
          src="./images/illustration-dashboard.png"
          alt="illustration-dashboard"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-4 text-[var(--Blue)] mb-4">
          <FaFacebookF
            size={28}
            className="hover:bg-[var(--Blue)] hover:text-white border border-[var(--Blue)] rounded-full p-1"
          />
          <FaTwitter
            size={28}
            className="hover:bg-[var(--Blue)] hover:text-white border border-[var(--Blue)] rounded-full p-1"
          />
          <FaInstagram
            size={28}
            className="hover:bg-[var(--Blue)] hover:text-white border border-[var(--Blue)] rounded-full p-1"
          />
        </div>
        <p className="text-[12px] text-[var(--Gray)]">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
