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
import Link from "next/link";

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
          cta={{
            text: "Explore our tech jobs",
            href: "https://careers.smartrecruiters.com/HMGroup/hmgrouptechcareers",
          }}
        />
      </div>
      <div className="imageWithTextContainer" style={{ color: "#000000" }}>
        <ImageWithText
          className={styles.imageWithText}
          style={{ color: "#000000" }}
          imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/techathmgroup.jpg"
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
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imagetaIanalyticsdata.jpg"
            linkUrl="/techathmgroup"
            title="AI, Analytics & Data"
          />
          <DepartmentCard
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imagecybersecurityrisk.jpg"
            linkUrl="/techathmgroup"
            title="Cyber Security & Risk"
          />
          <DepartmentCard
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageoperations.jpg"
            linkUrl="/techathmgroup"
            title="Tech Operations"
          />
          <DepartmentCard
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imagecoreplatforms.jpg"
            linkUrl="/techathmgroup"
            title="Core Platforms"
          />

          <DepartmentCard
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageproductdevelopmentengineering.jpg"
            linkUrl="/techathmgroup"
            title="Product Development"
          />

          <DepartmentCard
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageproductdevelopmentengineering.jpg"
            linkUrl="/techathmgroup"
            title="Engineering & Architecture"
          />
          <DepartmentCard
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageproductdevelopmentengineering.jpg"
            linkUrl="/techathmgroup"
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
        <Link
          href="/techathmgroup"
          style={{
            width: "148px",
            height: "57px",
            display: "block",
            margin: "32px auto",
            textAlign: "center",
            padding: "15px",
          }}
          className="carousel-cta myButton"
        >
          View all tech areas
        </Link>
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
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageatlanta.jpg"
            linkUrl=""
          />
          <LocationCard
            title="Bangalore"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imagebangalore.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Borås"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageboras.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Hong Kong"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imagehongkong.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Shanghai"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageshanghai.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Stockholm"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imagestockholm.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
        </ScrollingCards>
        <ScrollingCards settings={scrollingCardsSettings2}>
          <LocationCard
            title="Atlanta"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageatlanta.jpg"
            linkUrl=""
          />
          <LocationCard
            title="Bangalore"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imagebangalore.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Borås"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageboras.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Hong Kong"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imagehongkong.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Shanghai"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageshanghai.jpg"
            linkUrl="https://www2.hm.com/sv_se/index.html"
          />
          <LocationCard
            title="Stockholm"
            imageUrl="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imagestockholm.jpg"
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
          style={{ color: "red", whiteSpace: "break-spaces" }}
          ref={featuredJobsSliderRef}
          settings={featuredJobsSliderSettings}
        >
          <FeaturedJobsCard
            title="Cyber Defense Center Analyst"
            location="Stockholm"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999926451443-cyber-defense-center-analyst"
          />
          <FeaturedJobsCard
            title=".NET Software Engineer"
            location="Stockholm"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999927603883--net-software-engineer-to-the-afound-product-team"
          />
          <FeaturedJobsCard
            title="Solution Architect Insight"
            location="Stockholm"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999927822073-solution-architect-insight"
          />
          <FeaturedJobsCard
            title="Fullstack Software Engineer"
            location="Stockholm"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999927377593-fullstack-software-engineer-hiring-for-top-down-planning-team-product-offer-development-"
          />
          <FeaturedJobsCard
            title="Cyber Defense Center Analyst"
            location="Stockholm"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999926451443-cyber-defense-center-analyst"
          />
          <FeaturedJobsCard
            title=".NET Software Engineer"
            location="Stockholm"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999927603883--net-software-engineer-to-the-afound-product-team"
          />
          <FeaturedJobsCard
            title="Solution Architect Insight"
            location="Stockholm"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999927822073-solution-architect-insight"
          />
          <FeaturedJobsCard
            title="Fullstack Software Engineer"
            location="Stockholm"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999927377593-fullstack-software-engineer-hiring-for-top-down-planning-team-product-offer-development-"
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
        <a
          className="myButton2"
          href="https://careers.smartrecruiters.com/HMGroup/hmgrouptechcareers"
          target="_blank"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            padding: "16px 32px",
            maxWidth: "fit-content",
          }}
        >
          Explore all tech jobs
        </a>
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
