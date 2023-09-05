import React, { useRef } from "react";
import ImageBackground from "/components/ImageBackground";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "/components/Footer";
import styles from "./Faq.module.css";
import Arrow from "/components/Arrow";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore.js";
import Button from "@mui/material/Button";
import ScrollingCards from "/components/ScrollingCards";
import FeaturedJobsCard from "/components/FeaturedJobsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "/components/Navbar";
import Link from "next/link";

const FAQ = () => {
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
          posterUrl={
            "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/faq/imagefaq.jpg"
          }
          title={"FAQ"}
        />
      </div>

      <div
        className={styles.faqQuestionsContainer}
        style={{
          boxShadow: "none",
          height: "fit-content",
          marginBottom: "100px",
        }}
      >
        <h2
          className={styles.faqQuestionTitle}
          style={{
            color: "#000000",
            marginTop: "120px",
          }}
        >
          Frequently asked questions
        </h2>
        <p
          style={{
            borderBottom: "1px solid black",
            color: "#000000",
            padding: "16px 0 32px 0",
          }}
        >
          Find the answers to your questions
        </p>
        <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4
              className={styles.faqQuestionTitle}
              style={{ color: "#000000" }}
            >
              I can’t find an open role that’s right for me. What do I do?{" "}
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Do not worry, we post new jobs all the time. You can subscribe to
              be the first to know about new opportunities and our latest news
              or follow us on LinkedIn for the latest. <br />
              <br />
            </p>
            <Link
              style={{ display: "inlineBlock" }}
              href="https://www.linkedin.com/company/hmgroup"
              target="_blank"
            >
              {" "}
              H&M Group LinkedIn
            </Link>
            <br />
            <br />
            <Link
              style={{ display: "inlineBlock" }}
              href="https://www.linkedin.com/company/h&m"
              target="_blank"
            >
              {" "}
              H&M LinkedIn
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4
              className={styles.faqQuestionTitle}
              style={{ color: "#000000" }}
            >
              Why should I join now?{" "}
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We are evolving our tech organisation to be future ready all the
              time and to become more focused, flexible, faster, and efficient.
              We are on a journey to harness the power of tech & data and the
              road to the goal is not yet paved. The future of fashion and
              lifestyle needs creative doers with technical excellence. We know
              we need the right skills, in the right place, at the right time.
              If you are looking to make an impact and be the difference that
              make a difference, now is just the right time to join H&M Group.
            </p>{" "}
          </AccordionDetails>
        </Accordion>
        <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4
              className={styles.faqQuestionTitle}
              style={{ color: "#000000" }}
            >
              How do you work within your tech organisation?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Tech development is executed and funded through value streams. A
              value stream is a process that combines people and tech solutions
              in an end-to-end responsibility to create value for our customers
              or colleagues. Value streams are responsible for running, growing,
              and transforming our tech. <br />
              We recognize that we have varied tech products (digital,
              platforms, services), since one size does not fit all. We will
              work Agile/Lean/Hybrid based on the technology architecture and
              types of work being done. <br />
              Parts of our organisation works in adaptable teams. Adaptable
              Teaming is about organising our technical competences and skills
              around prioritised business needs to solve pain points.
            </p>{" "}
          </AccordionDetails>
        </Accordion>
        <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4
              className={styles.faqQuestionTitle}
              style={{ color: "#000000" }}
            >
              What are your remote working policies?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We offer a hybrid working model, and our teams are encouraged to
              adapt to a set-up based on the needs of the business, department,
              and the individual. However, this policy varies between different
              locations. In Sweden, we have an average of 4 days a week in the
              office.{" "}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4
              className={styles.faqQuestionTitle}
              style={{ color: "#000000" }}
            >
              What is your company culture like, and how do you support your
              employees?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              H&M Group is a safe and welcoming place where collaboration is the
              key to success. We want all our colleagues to feel empowered to
              act, learn, and adapt, so we can continue to succeed together as
              one team. By living our values, we create an open and
              down-to-earth culture where we can work together to do best what
              matters most to our customers and our future. <br />
            </p>{" "}
            <br />
            <Link href="https://hmgroup.com/about-us/our-values/">
              Read more about our values here
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4
              className={styles.faqQuestionTitle}
              style={{ color: "#000000" }}
            >
              What kind of opportunities are there for career growth and
              development within your company?
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              At H&M Group, we support your growth, and recognise that you’ll
              find the way that suits you best. We encourage growth within the
              company and arrange internal career weeks every year.
            </p>
          </AccordionDetails>
        </Accordion>
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
          style={{ textAlign: "center" }}
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
          href="/hiringprocess"
          style={{ textAlign: "center" }}
        >
          <h3 className="quickLinkText">How we hire </h3>
          <img
            className="quickLinksArrow"
            src="https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/icons/arrow-left.svg"
            alt="Right"
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

      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
