import React, { useRef } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageBackground from "/components/ImageBackground";
import Footer from "/components/Footer";
import Collapsible from "react-collapsible";
import styles from "./TechAtHmGroup.module.css";
import Arrow from "/components/Arrow";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore.js";
import { BorderBottom } from "@mui/icons-material";
import ScrollingCards from "/components/ScrollingCards";
import FeaturedJobsCard from "/components/FeaturedJobsCard";
import MeetColleaguesCard from "/components/MeetColleaguesCard";
import Button from "@mui/material/Button";
import Navbar from "/components/Navbar";
import Head from "next/head";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechAtHmGroup = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(376));
  const isSm = useMediaQuery(theme.breakpoints.down(769));

  const featuredJobsSliderRef = useRef(null);

  const meetColleaguesSliderRef = useRef(null);
  const featuredJobsSliderSettings = {
    arrows: true,
    slidesToShow: isXs ? 1 : isSm ? 1 : 5,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    centerPadding: isXs ? "0px" : isSm ? "0px" : "0px",
    initialSlide: 2,
  };


  const meetColleaguesSliderSettings = {
    arrows: true,
    slidesToShow: isXs ? 1 : isSm ? 1 : 4.5,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    centerPadding: isXs ? "38px" : isSm ? "38px" : "0px",
    initialSlide: 2,
    adaptiveHeight: true,
  };

  return (
    <div>
      <Head>
        <title>Tech at H&M Group</title>
      </Head>
      <Navbar />
      <div className="imageBackgroundContainer" style={{ height: "400px" }}>
        <ImageBackground
          posterUrl={"/images/techathmgroup/imagetechathmgroup.jpg"}
          title={"Tech at H&M Group"}
        />
      </div>
      <div
        className={styles.introContainer}
        style={{ height: "500px", textAlign: "left" }}
      >
        <div className={styles.introWrapper} style={{}}>
          <h2 className={styles.introTitle} style={{ color: "#000000" }}>
            We are re-shaping our industry
          </h2>
          <p
            className={styles.introText}
            style={{
              fontSize: "17px",
              textAlign: "left",
              color: "#000000",
              lineHeight: "28px",
            }}
          >
            The fashion retail business is changing quickly. To meet these
            changes, we are accelerating our digital development to deliver a
            smooth and inspiring experience for our customers wherever they want
            to meet, digitally or in-store.
          </p>
        </div>
      </div>

      <div
        className={styles.meetColleaguesContainer}
        style={{ margin: "auto", height: "fitContent", marginBottom: "100px" }}
      >
        <h2
          style={{
            width: "fit-content",
            margin: "auto",
            color: "#000000",
            paddingBottom: "20px",
          }}
        >
          {" "}
          Meet some of our colleagues
        </h2>
        <p
          className={styles.likeToWorkText}
          style={{
            display: "block",
            width: "fit-content",
            marginBottom: "20px",
            color: "#000000",
          }}
        >
          Hear what it is like to work with Tech at H&M Group
        </p>

        <ScrollingCards
          style={{ color: "red" }}
          ref={meetColleaguesSliderRef}
          settings={meetColleaguesSliderSettings}
        >
          <MeetColleaguesCard
            title={"shrutisree"}
            videoUrl={"https://youtu.be/TZbkBa90C00"}
            thumbnailUrl={
              "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imageshrutisree.jpg"
            }
          />
          <MeetColleaguesCard
            title={"saketh"}
            videoUrl={"https://youtu.be/bbVz5ngOh8A"}
            thumbnailUrl={
              "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imagesaketh.jpg"
            }
          />
          <MeetColleaguesCard
            title={"ramak"}
            videoUrl={"https://youtu.be/NFrp9lXVaoA"}
            thumbnailUrl={
              "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imageramak.jpg"
            }
          />
          <MeetColleaguesCard
            title={"rajashekar"}
            videoUrl={"https://youtu.be/0odwYkPQo8s"}
            thumbnailUrl={
              "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imagerajasekhar.jpg"
            }
          />
          <MeetColleaguesCard
            title={"eilish"}
            videoUrl={"https://youtu.be/zaruKFneMuY"}
            thumbnailUrl={
              "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imageeilish.jpg"
            }
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
            onClick={() => meetColleaguesSliderRef.current.slickPrev()}
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
                fill="#000000"
              />
            </svg>
          </button>
          <button
            style={{ margin: "14px", border: "none", background: "none" }}
            onClick={() => meetColleaguesSliderRef.current.slickNext()}
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
                fill="#000000"
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

      <div className={styles.ourTechAreasContainer} style={{}}>
        <h2
          className={styles.ourTechAreasTitle}
          style={{
            borderBottom: "1px solid black",
            color: "#000000",
            textAlign: "center",
            paddingBottom: "16px",
          }}
        >
          Our tech areas
        </h2>
        <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>AI, Analytics & Data </h3>
          </AccordionSummary>
          <AccordionDetails>
            <div
              className={styles.techAreaImageContainer}
              style={{ marginBottom: "20px" }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={
                  "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imageaianalyticsanddata.jpg"
                }
                alt="imageaianalyticsanddata"
                fill={true}
              />
            </div>
            <p>
              AI/AD is all about making us become a fully data-driven company
              and that we have the right product in the right place, physically
              or digitally. We are making sure that all enterprise data is
              accessible at scale, scaling machine learning capabilities across
              the company.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3 style={{ color: "#000000" }}>Cyber Security & Risk</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div
              className={styles.techAreaImageContainer}
              style={{ marginBottom: "20px" }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={
                  "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imagecybersecurityandrisk.jpg"
                }
                alt="imageaianalyticsanddata"
                fill={true}
              />
            </div>
            <p>
              Cyber Security & Risk empowers H&M Group to achieve the right
              level of information and cyber security to protect our customers,
              business, and ecosystem in a value driven and sustainable way.
              Together we manage our core security capabilities, build a culture
              of security, enable teams to create secure tech, and detect and
              manage threats.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3 style={{ color: "#000000" }}>Tech Operations </h3>
          </AccordionSummary>

          <AccordionDetails>
            <div
              className={styles.techAreaImageContainer}
              style={{ marginBottom: "20px" }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={
                  "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imageoperations.jpg"
                }
                alt="imageaianalyticsanddata"
                fill={true}
              />
            </div>
            <p>
              Tech Ops mission is to use our global scale to deliver optimised
              and relevant services 24/7 to make sure we deliver on our business
              outcomes. We ensure all systems and services exceed business
              needs, i.e., that they are stable and available, as well as
              cost-efficient and of high quality.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3 style={{ color: "#000000" }}>Core Platforms </h3>
          </AccordionSummary>
          <AccordionDetails>
            <div
              className={styles.techAreaImageContainer}
              style={{ marginBottom: "20px" }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={
                  "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imagecoreplatforms.jpg"
                }
                alt="imageaianalyticsanddata"
                fill={true}
              />
            </div>
            <p>
              We make sure that platforms are stable, reliable, scalable, and
              fit for purpose. Core Platforms provides best-in- class
              engineering services that improves our speed-to-market,
              flexibility, and scalability by providing frictionless technology
              with self-service capabilities and empowering product teams for
              delivery leveraging a foundational and standardised set of core
              platforms.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3 style={{ color: "#000000" }}>Product Development </h3>
          </AccordionSummary>
          <AccordionDetails>
            <div
              className={styles.techAreaImageContainer}
              style={{ marginBottom: "20px" }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={
                  "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imageproductdevelopment.jpg"
                }
                g
                alt="imageaianalyticsanddata"
                fill={true}
              />
            </div>
            <p>
              The Product Development team is responsible for conceiving,
              designing, developing, and launching new products or improving
              existing ones. The team consists of individuals with diverse
              skills and expertise who collaborate to bring a product from
              concept to release, developing delivering, and iterating on
              different streams. We work collaboratively to transform ideas into
              tangible products that meet customer needs, drive business growth,
              and adapt to evolving market dynamics.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3 style={{ color: "#000000" }}>Engineering & Architecture </h3>
          </AccordionSummary>
          <AccordionDetails>
            <div
              className={styles.techAreaImageContainer}
              style={{ marginBottom: "20px" }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={
                  "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/start/imageproductdevelopmentengineering.jpg"
                }
                alt="imageaianalyticsanddata"
                fill={true}
              />
            </div>
            <p>
              We utilise popular front-end frameworks and libraries to create
              responsive and engaging user interfaces for our websites, mobile
              applications, and other customer-facing platforms. We aim to
              create intuitive and feature-rich experiences for our customers on
              their smartphones and tablets.
              <br />
              Our back-end development relies on robust programming languages
              and frameworks. We leverage these technologies to build scalable
              and secure server-side applications that power our e-commerce
              platforms, APIs, and internal systems.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3 style={{ color: "#000000" }}>User Experience Design </h3>
          </AccordionSummary>
          <AccordionDetails>
            <div
              className={styles.techAreaImageContainer}
              style={{ marginBottom: "20px" }}
            >
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={
                  "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imageuserexperiencedesign.jpg"
                }
                alt="imageaianalyticsanddata"
                fill={true}
              />
            </div>
            <p>
              We define competitive and differentiated experiences and
              interactions across the customer journey, covering all customer
              facing touch points, by setting and developing our customer
              experience strategies and frameworks with involvement from a
              variety of stakeholders. The Unit consists of three business area
              pillars: Experience Design, CX Strategy and DesignOps.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>

      <div
        className={styles.reImagineContainer}
        style={{
          textAlign: "left",
        }}
      >
        <h2
          className="reImagineTitle"
          style={{ color: "#000000", paddingBottom: "16px" }}
        >
          We are harnessing the power of tech and data
        </h2>
        <img
          className={styles.ourAreasImage}
          style={{}}
          src={
            "https://techmicrositestorage.blob.core.windows.net/techmicrositeimages/images/techathmgroup/imagetechathmgroup2.jpg"
          }
          alt="image2"
        />

        <Accordion
          square={true}
          style={{
            borderTop: "1px solid black",
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>Our tech journey</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We are accelerating the digitalisation of our company by
              modernising our tech and embedding digital, tech, and data into
              everything we do. Our goal is clear - bring tech closer to the
              business so that we can continue to make great design available to
              everyone, in a more sustainable way.
              <br /> <br />
              We are actively improving ways of working, delivery models, and
              our tech landscape to future-proof and modernise our tech. By
              transforming our technology landscape, we create new opportunities
              in terms of data, speed, security, and operations. To accomplish
              this, we need to be more specialised, increasing positions
              connected to designing and engineering our products, services, and
              data.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>Our tech landscape </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              To meet the expectations of our current and future customers, we
              are transforming our tech landscape. We create new opportunities
              regarding data insights, speed, cyber security, and operations.
              Our technology landscape will consist of composable services of
              varying sizes to be fit for purpose. It will be entirely
              cloud-based and have automated environments.
              <br /> <br />
              Our tech stack is dynamic and evolves alongside technological
              advancements and industry trends. We continuously explore new
              technologies, evaluate emerging tools, and invest in
              infrastructure to stay at the forefront of digital innovation.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>Our tech teams</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Our data, engineering, and design teams are key to achieving our
              ambitious goals. From tracing where our raw materials come from
              and how sustainable they are, to revolutionising our customer
              experiences across all our channels. Every part of our business
              has its unique complexity and a global scale. You are immersed in
              a welcoming culture where psychological safety and collaboration
              are key to success. Our teams are empowered to act, learn, and
              adapt with speed to create results together.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className={styles.ourCultureAndValuesContainer} style={{}}>
        <h2
          className="ourCultureAndValuesTitle"
          style={{
            color: "#000000",
            textAlign: "center",
            paddingBottom: "16px",
          }}
        >
          Our culture and values
        </h2>
        <p style={{  color: "#000000" }}>
          Our values are part of who we are, what we stand for, and how we act.
          By living our values, we create an open and down-to-earth culture
          where we can work together to do best what matters most to our
          customers and our future.
        </p>
        <div className={styles.ourValues} style={{ margin: "50px 0px" }}>
          <h3 style={{ color: "#000000" }}> We are one team</h3>
          <h3 style={{ color: "#000000" }}> We believe in people</h3>
          <h3 style={{ color: "#000000" }}> We are entrepreneurs</h3>
          <h3 style={{ color: "#000000" }}> We make consistent improvements</h3>
          <h3 style={{ color: "#000000" }}> We are cost conscious</h3>
          <h3 style={{ color: "#000000" }}>
            {" "}
            We are straightforward and openminded
          </h3>
          <h3 style={{ color: "#000000" }}> We keep it simple</h3>
        </div>
      </div>

      <div className={styles.ourBenefitsContainer} style={{}}>
        <h2
          className="ourBenefitsTitle"
          style={{
            display: "block",
            color: "#000000",
            textAlign: "center",
            paddingBottom: "16px",
            margin: "0 auto",
          }}
        >
          Our Benefits
        </h2>
        <Accordion
          square={true}
          style={{ borderTop: "1px solid black", marginTop: "20px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>Staff discount</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              All our colleagues get a 25% discount on all our brands H&M, COS,
              Weekday, Monki, H&M Home, ARKET, and Afound. You can also get
              additional cards for family members who live in the same
              household, like husband/wife/partner and children over 15 years.{" "}
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion square={true} style={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>Learning and development </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We are serious about learning because we know that when you grow,
              we all grow. Continuous learning is important to us and we always
              focus on &apos;just in time&apos;-learning. That&apos;s why all
              our colleagues get extensive learning opportunities. <br /> We
              offer a variety of on and offline learning and training
              opportunities. Our digital learning platform offers self-paced and
              instructor-led learning opportunities across subjects such as
              sustainability, leadership, business development, AI, customer
              centricity, personal development, inclusion and diversity, role
              specific and more.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion square={true} style={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>HIP – H&M Incentive Program</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We know that our colleagues are key to our success. That is why we
              have created HIP - the H&M Incentive Program. When you have been a
              part of our company for 5 years, you get a share in the profits
              made by H&M Group. The longer you stay, the more you will get. It
              is that simple and is the same for everyone in the H&M Group, in
              all countries, regardless of position, salary, or contract of
              employment.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion square={true} style={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>Communities</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              You will be invited to join our internal tech community
              &lt;/techSpot&gt;, where we share, learn, and connect around all
              things tech. We also have many colleague-driven communities around
              the world, like sports, mindfulness, choir, and many more.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion square={true} style={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>Balance in life</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              To do our best work, we all need a healthy balance in our lives.
              How we achieve that balance is different for all of us. That is
              why we believe in a mix of working from home and joining up in our
              inspirational offices regularly. We let you and your team find the
              way you work best.{" "}
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion square={true} style={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>Recognition</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We have a culture that celebrates successes, milestones, and new
              learnings together. We regularly do hackathons and ideation cups
              to recognise individuals and team contributions. <br /> Every
              year, we also recognise colleagues all around the world who put
              our company values into action, with the Erling Persson award.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion square={true} style={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{ color: "#000000" }}>Colleague Resource Groups</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We believe in a diverse and inclusive workplace. That is why we
              support all our Colleague Resource Groups (CRGs). Led by you, for
              you, the different CRGs are a safe space for you to meet, share,
              and learn from each other. <br /> <br />
              Some of our CRGs
              <br />
              The Collective: CRG for People of Colour <br />
              LGBTQIA+ Advocacy <br />
              People with Disability <br />
              Mental Health Awareness <br />
              Women in Empower <br />
              Internationals in Stockholm <br />
              <br />
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
            location="Bangalore"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999929304576-software-engineer-full-stack-net-javascript-to-sourcing-foundation-vs-h-m-group"
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
            location="Bangalore"
            jobFamily="H&M Group"
            linkUrl="https://jobs.smartrecruiters.com/HMGroup/743999929304576-software-engineer-full-stack-net-javascript-to-sourcing-foundation-vs-h-m-group"
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

export default TechAtHmGroup;
