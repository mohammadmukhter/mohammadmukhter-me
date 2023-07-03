import {
  FaAngleDoubleRight,
  FaDrawPolygon,
  FaPager,
  FaReact,
  FaServer,
} from "react-icons/fa";
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
      <h2 className="text-6xl font-bold uppercase text-center drop-shadow-2xl">
        What I do?
      </h2>
      <h3 className="text-center text-2xl drop-shadow-2xl">
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
          <SwiperSlide className="rounded-lg">
            <div className="card w-full h-96 rounded-md bg-neutral text-neutral-content shadow-md">
              <div className="card-body items-center text-white ">
                <span>
                  <FaReact className="text-7xl"></FaReact>
                </span>
                <h2 className="card-title text-center">
                  Front End Development
                </h2>
                <div className="text-left">
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    HTML/CSS
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    Bootstrap/TailwindCSS
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    Javascript
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    React JS
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    Animation
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <div className="card w-full h-96 rounded-md bg-neutral text-neutral-content shadow-md">
              <div className="card-body items-center text-white">
                <span>
                  <FaServer className="text-7xl"></FaServer>
                </span>
                <h2 className="card-title text-center">
                  Backend/server side Development
                </h2>
                <div className="text-left">
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    node JS
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    express JS
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    mongoDB
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    JWT
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    Payment system integrate
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <div className="card w-full h-96 rounded-md bg-neutral text-neutral-content shadow-md">
              <div className="card-body items-center text-white">
                <span>
                  <FaPager className="text-7xl"></FaPager>
                </span>
                <h2 className="card-title text-center">
                  Full Stack Web Development
                </h2>
                <div className="text-left">
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    MongoDB
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    Express JS
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    React JS
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    Node JS
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <div className="card w-full h-96 rounded-md bg-neutral text-neutral-content shadow-md">
              <div className="card-body items-center text-white">
                <span>
                  <FaDrawPolygon className="text-7xl"></FaDrawPolygon>
                </span>
                <h2 className="card-title text-center">Figma to HTML/React</h2>
                <div className="text-left">
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    pixel perfect design
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    figma to Html
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    figma to react
                  </p>
                  <p className="flex items-center">
                    <span>
                      <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>
                    </span>
                    source code
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
