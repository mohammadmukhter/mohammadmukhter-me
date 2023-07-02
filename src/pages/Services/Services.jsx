import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Services = () => {
  return (
    <div className="py-12 bg-gray-800/90">
      <h2 className="text-6xl font-bold uppercase text-center">What I do?</h2>
      <h3 className="text-center text-2xl">
        <span className="text-orange-600">My</span> Services
      </h3>
      <div className="px-4 py-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-96 bg-neutral text-neutral-content">
              <div className="card-body items-center ">
                <h2 className="card-title text-center">
                  Front End Development
                </h2>
                <div className="text-left">
                  <p>
                    <span>=</span>HTML/CSS
                  </p>
                  <p>
                    <span>=</span>Bootstrap/TailwindCSS
                  </p>
                  <p>
                    <span>=</span>Javascript
                  </p>
                  <p>
                    <span>=</span>React JS
                  </p>
                  <p>
                    <span>=</span>Animation
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-neutral text-neutral-content">
              <div className="card-body items-center ">
                <h2 className="card-title text-center">
                  Front End Development
                </h2>
                <div className="text-left">
                  <p>
                    <span>=</span>HTML/CSS
                  </p>
                  <p>
                    <span>=</span>Bootstrap/TailwindCSS
                  </p>
                  <p>
                    <span>=</span>Javascript
                  </p>
                  <p>
                    <span>=</span>React JS
                  </p>
                  <p>
                    <span>=</span>Animation
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-neutral text-neutral-content">
              <div className="card-body items-center ">
                <h2 className="card-title text-center">
                  Front End Development
                </h2>
                <div className="text-left">
                  <p>
                    <span>=</span>HTML/CSS
                  </p>
                  <p>
                    <span>=</span>Bootstrap/TailwindCSS
                  </p>
                  <p>
                    <span>=</span>Javascript
                  </p>
                  <p>
                    <span>=</span>React JS
                  </p>
                  <p>
                    <span>=</span>Animation
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-neutral text-neutral-content">
              <div className="card-body items-center ">
                <h2 className="card-title text-center">
                  Front End Development
                </h2>
                <div className="text-left">
                  <p>
                    <span>=</span>HTML/CSS
                  </p>
                  <p>
                    <span>=</span>Bootstrap/TailwindCSS
                  </p>
                  <p>
                    <span>=</span>Javascript
                  </p>
                  <p>
                    <span>=</span>React JS
                  </p>
                  <p>
                    <span>=</span>Animation
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
