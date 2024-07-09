import { banner, bannerImgOne } from "../../../assets/images";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <span
      className={`${className} icon right-circle-1icon- rounded-full bg-black hover:bg-black me-10 z-30`}
      onClick={onClick}
    ></span>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <span
      className={`${className} icon left-circle-1icon- rounded-full bg-black hover:bg-black ms-10 z-30`}
      onClick={onClick}
    ></span>
  );
}

const CustomSlide = ({ Subtext, imgSrc, text, buttonText, buttonLink }) => (

    <section className={`relative bg-[url(${banner})] bg-cover bg-center bg-no-repeat w-full h-[550px]`}>
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-14 py-32 sm:px-14 lg:flex lg:items-center lg:px-12">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              {text}
          </h1>

          <p className="hidden max-w-lg text-white/90 xs:mt-6 xs:block xs:text-lg xs:leading-relaxed">
          {Subtext}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
          <Link
        to={buttonLink}
        className="block w-full rounded bg-white px-12 py-3 focus:outline-none focus:ring sm:w-auto p-2 text-xl hover:bg-black hover:text-white duration-200 font-bold"
      >
        {buttonText}
      </Link>
          </div>
        </div>
      </div>
    </section>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Restez droit dans vos bottes",
      Subtext:
        "Avec les bottes de AfroChic, lorem ipsum dolor sit amet et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap",
      buttonLink: "/offer",
      buttonText: "Voir",
    },
    {
      imgSrc: bannerImgOne,
      text: "Nos nouveaux manteaux contre le froid",
      Subtext:
        "Avec les manteaux de AfroChic, lorem ipsum dolor sit amet et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap",
      buttonLink: "/shop",
      buttonText: "About-us",
    },
    {
      imgSrc: bannerImgOne,
      text: "Noblesse, Dignite, elegance",
      Subtext:
        "Avec les costumes de AfroChic, lorem ipsum dolor sit amet et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap et sap",
      buttonLink: "/contact",
      buttonText: "Contact-us",
    },

    // Add more slides as needed
  ];
  return (
    <div className="p-2 w-full">
      <div className="w-ful bg-transparent ">
        <Slider {...settings} className="mx-auto">
          {slides.map((slide, index) => (
            <CustomSlide key={index} {...slide} />
          ))}
        </Slider>
      </div>

      <div className="w-full bg-transparent border-b-[1px] py-4 border-b-gray-200 px-4">
        <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 w-72 shadow-sm hover:shadow-md duration-300">
            <span className="text-4xl text-center icon back-in-timeicon-"></span>
            <p className="text-lightText text-base">Deux ans de garantie</p>
          </div>
          <div className="flex md:w-auto items-center gap-3 w-72 shadow-sm hover:shadow-md duration-300">
            <span className="text-4xl text-center icon truckicon-"></span>
            <p className="text-xl text-lightText">
              Free shipping <br />{" "}
              <span className="text-xs text-lightText">
                Free Shipping World Wide
              </span>
            </p>
          </div>
          <div className="flex md:w-auto items-center gap-3 w-72 shadow-sm hover:shadow-md duration-300">
            <span className="text-4xl text-center icon historyicon-"></span>
            <p className="text-lightText text-base">Return policy in 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
