import emailjs from "emailjs-com";
import { useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form.current.name.value.length > 0 &&
      form.current.email.value.length > 0
    ) {
      emailjs
        .sendForm(
          import.meta.env.VITE_service_id,
          import.meta.env.VITE_template_id,
          form.current,
          import.meta.env.VITE_user_email_id
        )
        .then(
          (result) => {
            console.log(result);
            form.current.reset();
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log("input filed required");
    }
  };

  return (
    <div className="py-12 bg-gray-800/90">
      <h2 className="text-6xl font-bold uppercase text-center">Contact Me</h2>
      <h3 className="text-center text-2xl">
        <span className="text-orange-600">Let's</span> Talk about your ideas
      </h3>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mb-12  text-white mt-8"
      >
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6 text-white">
            <p className="text-xl font-bold mb-5">
              Address: <br />
              <span className="text-lg font-normal text-gray-200">
                Chittagong, Bangladesh
              </span>
            </p>
            <p className="text-xl font-bold mb-5">
              Email: <br />
              <span className="text-lg font-normal text-gray-200">
                mohammadmukhter@gmail.com
              </span>
            </p>
            <p className="text-xl font-bold mb-5">
              Phone: <br />
              <span className="text-lg font-normal text-gray-200">
                +8801820707315
              </span>
            </p>
            <p className="text-xl font-bold mb-5">
              Freelance: <br />
              <span className="text-lg font-normal text-gray-200">
                Available right now
              </span>
            </p>
          </div>
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  name="name"
                  className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-[#292524] focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  name="subject"
                  className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-[#292524] focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  name="email"
                  className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-[#292524] focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-[#292524] focus:outline-none
              "
                  rows="4"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>

              <button
                className=" text-white bg-gray-800 border-[1px] uppercase hover:text-gray-800 hover:bg-orange-200 focus:visited:text-red-600 focus:visited:bg-orange-200 w-full px-6
                  py-2.5
                  font-bold
                  text-xs
                  leading-tight
                  rounded
                  shadow-md hover:shadow-lg
                  focus:bg-[#0e0d0d] focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-[#0e0d0d] active:shadow-lg
                  transition
                  duration-150
                  ease-in-out flex justify-center items-center"
              >
                <span className="text-xl mr-2">
                  <FaTelegramPlane></FaTelegramPlane>
                </span>{" "}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
