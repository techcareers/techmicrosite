import React, { useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./Index.module.css";
import Image from "next/image";
import VideoBackground from "../components/VideoBackground";
import ImageWithText from "/components/ImageWithText";
import DepartmentCard from "/components/DepartmentCard";
import LocationCard from "/components/LocationCard";
import ScrollingCards from "/components/ScrollingCards";
import ArrowDown from "/public/icons/arrow-down.svg";
import ArrowUp from "/public/icons/arrow-up.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedJobsCard from "/components/FeaturedJobsCard";
import Footer from "/components/Footer";
import Navbar from "/components/Navbar";

/* 

h1 för headertexterna och Locations snurret

h2 för section rubrikerna (Find your fit etc.)

h3 för rubriker inom sections (feautred jobs job titles etc.)

h4 för den bolda rubriken (FAQ frågorna och job listing rubriker)

h5 är snabblänkarna i pilboxarna

h6 rubrikerna i footern

h7 Copyright texten i footern

h8 Texten under benefits ikonerna

h9 Job family pill på job cards


*/

const HomePage = ({ imageTechAtHmGroup }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(376));
  const isSm = useMediaQuery(theme.breakpoints.down(769));

  const departmentSliderSettings = {
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: isXs ? 1 : isSm ? 2.5 : 4,
    slidesToScroll: 1,
    autoplay: false,
  };

  const featuredJobsSliderSettings = {
    arrows: true,
    slidesToShow: isXs ? 1 : isSm ? 3 : 5,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    centerPadding: isXs ? "70px" : isSm ? "0px" : "0px",
    initialSlide: 2,
  };

  const scrollingCardsSettings1 = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: isXs ? 1.5 : isSm ? 3 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: -100,
    pauseOnFocus: true,
    pauseOnHover: true,
    rows: 1,
    slidesPerRow: 1,
    easing: "linear",
  };

  const scrollingCardsSettings2 = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: isXs ? 1.5 : isSm ? 3 : 4,
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    rows: 1,
    slidesPerRow: 1,
    easing: "linear",
  };

  const departmentSliderRef = useRef(null);
  const featuredJobsSliderRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar />
      <div className="videoBackgroundContainer">
        <VideoBackground
          videoUrl="../videos/hero-video.mp4"
          posterUrl="/images/start/techathmgroup.jpg"
          title="Join the future of fashion and lifestyle"
          cta={{ text: "Explore our tech jobs", href: "www.hm.com" }}
        />
      </div>
      <div className="imageWithTextContainer" style={{ color: "#000000" }}>
        <ImageWithText
          className={styles.imageWithText}
          style={{ color: "#000000" }}
          imageUrl={imageTechAtHmGroup}
          title="Tech @ H&M Group"
          paragraph="We are a community of creators, doers, learners, entrepreneurs, and innovators. Our mission is to re- invent the world of fashion through technology, creating meaningful growth along the way. With the right people and cutting-edge tech, we can help drive change towards a more sustainable future."
          cta={{ text: "Discover our approach", href: "/techathmgroup" }}
        />
      </div>
      <div className="departmentCardsContainer">
        <h2
          style={{
            color: "#2c2c2c",
            margin: "auto",
            display: "block",
            width: "fit-content",
            marginBottom: "20px",
          }}
        >
          Explore our tech areas
        </h2>
        {/* <h4
          style={{
            color: "#2c2c2c",
            margin: "auto",
            display: "block",
            width: "fit-content",
            marginBottom: "40px",
          }}
        >
          Explore our tech areas
        </h4> */}
        <ScrollingCards
          ref={departmentSliderRef}
          settings={departmentSliderSettings}
        >
          <DepartmentCard
            imageUrl="/images/start/imagetaIanalyticsdata.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
            title="AI, Analytics & Data"
          />
          <DepartmentCard
            imageUrl="/images/start/imagecybersecurityrisk.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
            title="Cyber Security & Risk"
          />
          <DepartmentCard
            imageUrl="/images/start/imageoperations.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
            title="Tech Operations"
          />
          <DepartmentCard
            imageUrl="/images/start/imagecoreplatforms.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
            title="Core Platforms"
          />

          <DepartmentCard
            imageUrl="/images/start/imageproductdevelopmentengineering.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
            title="Product Development"
          />

          <DepartmentCard
            imageUrl="/images/start/imageproductdevelopmentengineering.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
            title="Engineering & Architecture"
          />
          <DepartmentCard
            imageUrl="/images/start/imageproductdevelopmentengineering.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
            title="User Experience Design"
          />
        </ScrollingCards>
        <div
          className="carousel-arrows"
          style={{
            border: "none",
            background: "none",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            position: "relative",
            width: "fit-content",
          }}
        >
          <button
            style={{ margin: "14px", border: "none", background: "none" }}
            onClick={() => departmentSliderRef.current.slickPrev()}
          >
            <Image
              src="/icons/arrow-right.svg"
              alt="Left"
              style={{ cursor: "pointer" }}
              width={20}
              height={20}
            />
          </button>
          <button
            style={{ margin: "14px", border: "none", background: "none" }}
            onClick={() => departmentSliderRef.current.slickNext()}
          >
            {" "}
            <Image
              src="/icons/arrow-left.svg"
              alt="Right"
              style={{ cursor: "pointer" }}
              width={20}
              height={20}
            />{" "}
          </button>
        </div>
        <button
          style={{
            width: "148px",
            height: "57px",
            display: "block",
            margin: "32px auto",
          }}
          className="carousel-cta myButton"
        >
          View all tech areas
        </button>
      </div>
      <div
        className="allAroundTheWorldContainer"
        style={{
          padding: "64px",
          gap: "26px",
          height: "250px",
          marginTop: "100px",
        }}
      >
        <h1
          style={{
            display: "block",
            margin: "0 auto",
            width: "fit-content",
            marginBottom: "20px",
          }}
        >
          Our tech locations
        </h1>
        <p
          style={{
            display: "block",
            margin: "0 auto",
            width: "fit-content",
            color: "#000000",
          }}
        >
          Join our growing tech community across the world{" "}
        </p>
        {/* <div className={"dropdown"}>
      <button className={"dropdownButton"} onClick={toggleOpen}>
        Find tech jobs in your location
        <Image src={isOpen ? ArrowUp : ArrowDown} alt="arrow" className={"dropdownArrow"} />
      </button>
      {isOpen && (
        <div className={"dropdownContent"}>
          <a href="#">Atlanta</a>
          <a href="#">Bangalore</a>
          <a href="#">Borås</a>
          <a href="#">Hong Kong</a>
          <a href="#">Shanghai</a>
          <a href="#">Stockholm</a>
        </div>
      )}
    </div> */}
      </div>
      <div
        className="locationCardsContainer"
        style={{ paddingBottom: "100px" }}
      >
        <ScrollingCards settings={scrollingCardsSettings1}>
          <LocationCard
            title="Atlanta"
            imageUrl="/images/start/imageatlanta.jpg"
            linkUrl=""
          />
          <LocationCard
            title="Bangalore"
            imageUrl="/images/start/imagebangalore.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Borås"
            imageUrl="/images/start/imageboras.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Hong Kong"
            imageUrl="/images/start/imagehongkong.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Shanghai"
            imageUrl="/images/start/imageshanghai.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Stockholm"
            imageUrl="/images/start/imagestockholm.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
        </ScrollingCards>
        <ScrollingCards settings={scrollingCardsSettings2}>
          <LocationCard
            title="Atlanta"
            imageUrl="/images/start/imageatlanta.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Bangalore"
            imageUrl="/images/start/imagebangalore.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Borås"
            imageUrl="/images/start/imageboras.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Hong Kong"
            imageUrl="/images/start/imagehongkong.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Shanghai"
            imageUrl="/images/start/imageshanghai.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Stockholm"
            imageUrl="/images/start/imagestockholm.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
        </ScrollingCards>
      </div>
      <div
        className="featuredJobsContainer"
        style={{ background: "#222222", height: "833px", padding: "120px 0" }}
      >
        <h2
          style={{
            width: "fit-content",
            margin: "auto",
            color: "#ffffff",
            paddingBottom: "40px",
          }}
        >
          {" "}
          Featured jobs
        </h2>
        <ScrollingCards
          style={{ color: "red" }}
          ref={featuredJobsSliderRef}
          settings={featuredJobsSliderSettings}
        >
          <FeaturedJobsCard
            title="Title 1"
            location="Location 1"
            jobFamily="Job Family 1"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <FeaturedJobsCard
            title="Senior Frontend Developer"
            location="Stockholm"
            jobFamily="Colleague & Corporate Support"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <FeaturedJobsCard
            title="Senior Backend Developer"
            location="Location 3"
            jobFamily="AI, Analytics & Data"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <FeaturedJobsCard
            title="Senior Frontend Developer"
            location="Stockholm"
            jobFamily="Colleague & Corporate Support"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <FeaturedJobsCard
            title="Title 5"
            location="Location 5"
            jobFamily="Job Family 5"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <FeaturedJobsCard
            title="Title 6"
            location="Location 6"
            jobFamily="Job Family 6"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <FeaturedJobsCard
            title="Title 7"
            location="Location 7"
            jobFamily="Job Family 7"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
        </ScrollingCards>
        <div
          className="carousel-arrows"
          style={{
            border: "none",
            background: "none",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            position: "relative",
            width: "fit-content",
          }}
        >
          <button
            style={{ margin: "14px", border: "none", background: "none" }}
            onClick={() => featuredJobsSliderRef.current.slickPrev()}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
            >
              <path
                d="M10.71 19.29L1.91 10.5H20V9.5H1.91L10.71 0.71L10 0L0 10L10 20L10.71 19.29Z"
                fill="#ffffff"
              />
            </svg>
          </button>
          <button
            style={{ margin: "14px", border: "none", background: "none" }}
            onClick={() => featuredJobsSliderRef.current.slickNext()}
          >
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
            >
              <path
                d="M9.29 0.71L18.09 9.5H0V10.5H18.09L9.29 19.29L10 20L20 10L10 0L9.29 0.71Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>
        <button
          className="myButton2"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            padding: "16px 32px",
          }}
        >
          Explore all tech jobs
        </button>
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

// Added getServerSideProps function
export async function getServerSideProps(context) {
  // Fetch your image data here. For demonstration, I'm using a placeholder.
  const imageTechAtHmGroup = "/images/start/techathmgroup.jpg";

  return {
    props: { imageTechAtHmGroup }, // will be passed to the page component as props
  };
}

export default HomePage;
