import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import car from "../src/assets/car.json";
import Lottie from "lottie-react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {}, []);
  return (
    <>
      <section className="pb-10 ">
        <div className="flex justify-center items-center  flex-col">
          <div className="flex justify-center items-center gap-10 mb-10">
            <h1
              className="text-5xl font-bold "
              data-aos="fade-right"
              data-aos-offset="300"
            >
              Pring Driving School
            </h1>
            <div className="w-20">
              <Lottie animationData={car} />
            </div>
          </div>

          <div className="relative  sm:w-[600px]  lg:w-[1150px] flex center justify-center items-center">
            <div className="  sm:w-[300px] sm:h-72 lg:w-[600px] lg:h-80 relative overflow-hidden ">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686063467/photo-1593199180432-241e7f099180_wng1is.avif"
                alt="driving school"
                className="z-20 absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                data-aos="fade-left"
              />
            </div>
            <div className="z-40 bg-back backdrop-blur-[20px] p-4 lg:p-10 max-w-[400px] lg:max-w-[400px] border border-back rounded-lg  sm:-translate-x-20 sm:translate-y-14 ">
              <h3 className="text-lg font-bold mb-4 ">Pring Driving School</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, totam. Molestiae nemo dicta perferendis voluptatum
                neque non assumenda officiis est facilis minus labore architecto
                distinctio voluptatibus, optio, autem dolorem natus. Lorem,
              </p>
            </div>
          </div>
          <div className="flex gap-20 mt-20" data-aos="fade-left">
            <a href="#">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686062345/icons8-facebook-50_naymvp.png"
                alt=""
                className="h-6 w-6"
              />
            </a>
            <a href="">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686062345/icons8-instagram-50_qjxzii.png"
                alt=""
                className="h-6 w-6"
              />
            </a>
            <a href="">
              {" "}
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686062345/icons8-linkedin-50_gnzhjp.png"
                alt=""
                className="h-6 w-6"
              />
            </a>
            <a href="">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686062345/icons8-twitter-30_vt54dq.png"
                alt=""
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="pb-10">
        <div
          className="flex justify-center items-center  flex-col"
          data-aos="zoom-in"
        >
          <h3 className="text-3xl font-bold my-16" data-aos="fade-right">
            About Us
          </h3>
          <div className="  flex  items-center gap-10">
            <div className=" max-w-[400px] lg:w-[500px] h-80 relative overflow-hidden">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686063468/photo-1541412094143-627a222be46d_zv3k4r.avif"
                className="z-20 absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="info sm:max-w-[400px] lg:max-w-[400px] ">
              <h4 className="text-lg font-semibold ">Description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, architecto, minima quam soluta incidunt molestiae
                optio, laudantium ipsam quia eius et ab. Cum, sapiente! Repellat
                delectus hic repellendus itaque incidunt!. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Nihil accusamus placeat
                lorum aut obcaecati delectus in voluptates, quos dolorem beatae
                unde.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className="flex items-center flex-col justify-center ">
          <h3 className=" text-3xl font-bold my-10  " data-aos="fade-right">
            Contact us
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <div
            className=" flex flex-col w-[250px]     gap-12 "
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <a href="#" className="pl-10 ">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686062345/icons8-facebook-50_naymvp.png"
                alt=""
                className="h-6 w-6 inline-block"
              />
              Facebook
            </a>

            <a href="">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686062345/icons8-instagram-50_qjxzii.png"
                alt=""
                className="h-6 w-6 inline-block"
              />
              Instagram
            </a>
            <a href="">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686062345/icons8-linkedin-50_gnzhjp.png"
                alt=""
                className="h-6 w-6 inline-block"
              />
              Linkedin
            </a>
            <a href="" className="pl-10">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686062345/icons8-twitter-30_vt54dq.png"
                alt=""
                className="h-6 w-6 inline-block"
              />
              Twitter
            </a>
          </div>
          <div
            className="w-[500px] h-80 relative overflow-hidden"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1686063468/photo-1434187008486-2768576189ee_nya3l0.avif"
              alt=""
              className="z-20 absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
