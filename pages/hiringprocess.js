import React, { useRef } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageBackground from "/components/ImageBackground";
import Footer from "/components/Footer";
import styles from "./HiringProcess.module.css";
import FeaturedJobsCard from "/components/FeaturedJobsCard";
import ScrollingCards from "/components/ScrollingCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Button from "@mui/material/Button";
import Navbar from "/components/Navbar";

const HiringProcess = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(376));
  const isSm = useMediaQuery(theme.breakpoints.down(769));

  const featuredJobsSliderSettings = {
    arrows: true,
    slidesToShow: isXs ? 1 : isSm ? 3 : 5,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    initialSlide: 2,
    adaptiveHeight: true,
  };

  const featuredJobsSliderRef = useRef(null);
  return (
    <div>
      <Navbar />
      <div className="imageBackgroundContainer" style={{ height: "400px" }}>
        <ImageBackground
          posterUrl={"/images/hiringprocess/imagehiringprocess.jpg"}
          title={"How We Hire"}
        />
      </div>
      <div
        className={styles.introContainer}
        style={{ height: "fit-content", textAlign: "left" }}
      >
        <div
          className={styles.introWrapper}
          style={{
            padding: "0px 64px",
            width: "944px",
            height: "fit-content",
            display: "block",
            padding: "120px 0",
          }}
        >
          <h2
            className="introTitle"
            style={{
              color: "#000000",
              width: "576px",
              textAlign: "left",
              paddingBottom: "16px",
            }}
          >
            Our recruitment process
          </h2>
          <div
            className="introText"
            style={{
              fontSize: "17px",
              textAlign: "left",
              width: "576px",
              color: "#000000",
              lineHeight: "28px",
            }}
          >
            <br />
            <h4 style={{ display: "contents" }}>
              Phone interview <br />{" "}
            </h4>
            We always start with a phone interview during which you get to talk
            to one of our talent recruiters. This way, you can learn more about
            the role and our company, and we get to know you a bit better before
            moving on to the next step. <br /> <br />
            We always start with a phone interview during which you get to talk
            to one of our talent recruiters. This way, you can learn more about
            the role and our company, and we start to know you before moving on
            to the next step. <br /> <br />
            <h4 style={{ display: "contents" }}>Values interview </h4>
            <br />
            After the phone interview, we want to make sure we connect based on
            our values and see if you&apos;re a good fit for our H&M Group
            culture. <br /> <br />
            Tip: You can prepare by reading about our values and think of how
            they apply to you. <br /> <br />
            After the phone interview, we want to understand how you live our
            values and connect to the essence of our organisational culture.
            This interview will be carried out by any of our colleagues across
            the company specialised in values assessment. <br /> <br />
            Tip: You can prepare by reading about our values and think of how
            they apply to you. (link to group value section) <br /> <br />
            <h4 style={{ display: "contents" }}>Competence assessment </h4>
            <br />
            The next step is to assess your skills. This lets us know if you
            have the right competencies for the role. And, it&apos;s a good
            opportunity for you to understand what to expect from the role.{" "}
            <br /> <br />
            The next step is to assess your role-specific skills. Depending on
            what kind of role are you are being considered for, we&apos;ll have
            standardized interviews, tests, or cases, designed to evaluate the
            proficiency level of your competences in relation to what is needed
            for the role. This interview will be carried out by functional
            experts within the organisation. <br /> <br />
            <h4 style={{ display: "contents" }}>Role interview</h4> <br />
            When you make it to this step, you&apos;ll get to meet the hiring
            manager and learn more about the role and the team you might be
            joining. <br /> <br />
            You&apos;ll meet the hiring manager in this step and learn more
            about the role and team. This interview is focused on understanding
            how your match with the team—in which specific ways you add value to
            their current set-up and complement existing members. This is also
            the moment for you to ask detailed questions you might have about
            the position and context. <br /> <br />
            <h4 style={{ display: "contents" }}>Offer </h4> <br />
            The final step in the process is to formally offer you the role.
            We&apos;ll discuss salary, start date, and everything else we need
            to talk about to bring you on board to the H&M Group. <br />
          </div>
        </div>
        {isXs ? (
          <img
            className={styles.hiringImage}
            style={{
              height: "fit-content",
              display: "block",
              position: "relative",
            }}
            src={
              "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/hiringprocess/imagetimeline_mobile.jpg"
            }
            alt="hiringImage"
          />
        ) : (
          <img
            className={styles.hiringImage}
            style={{
              height: "fit-content",
              display: "block",
              position: "relative",
            }}
            src={
              "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/hiringprocess/imagetimeline.jpg"
            }
            alt="hiringImage"
          />
        )}
      </div>

      <div
        className={styles.quickLinksContainer}
        style={{ margin: "100px auto", height: "fit-content", width: "80%" }}
      >
        <h2
          className="quickLinksTitle"
          style={{
            display: "block",
            color: "#000000",
            textAlign: "center",
            paddingBottom: "16px",
            margin: "0 auto",
          }}
        >
          Quick links
        </h2>
        <Button
          variant="outlined"
          className="quickLinksButton"
          href="/techathmgroup"
        >
          <h3 className="quickLinkText">Tech at H&M Group </h3>
          <Image
            className="quickLinksArrow"
            src="/icons/arrow-left.svg"
            alt="Right"
            width="24"
            height="24"
          />
        </Button>

        <Button
          variant="outlined"
          className="quickLinksButton"
          href="/Faq"
          style={{
            textAlign: "center",
          }}
        >
          <h3 className="quickLinkText">FAQ</h3>
          <Image
            className="quickLinksArrow"
            src="/icons/arrow-left.svg"
            alt="Left"
            width="24"
            height="24"
          />
        </Button>
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

      <div></div>

      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default HiringProcess;
