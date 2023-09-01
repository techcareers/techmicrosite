import React, {useRef} from 'react';
import ImageBackground from '@/components/ImageBackground';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from '@/components/Footer';
import styles from './Faq.module.css';
import Arrow from '@/components/Arrow';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js';
import Button from '@mui/material/Button';
import ScrollingCards from "@/components/ScrollingCards";
import FeaturedJobsCard from '@/components/FeaturedJobsCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '@/components/Navbar';


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
        <div className='imageBackgroundContainer' style={{height: "400px"}}> 

<ImageBackground 
posterUrl={'/images/faq/imagefaq.png'}
title={'FAQ'}
/>
</div>

<div className={styles.faqQuestionsContainer} style={{boxShadow: "none",  height: "fit-content", marginBottom: "100px"}}>
<h2 className= {styles.faqQuestionTitle} style={{
    color: "#000000",  marginTop: "120px"}}>
 Frequently asked questions</h2>
 <p style={{borderBottom: "1px solid black", color: "#000000",padding: "16px 0 32px 0"}}>Find the answers to your questions</p>
  <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <h4 className={styles.faqQuestionTitle} style={{color: "#000000"}}>I can’t find an open role that’s right for me. What do I do? </h4>
          </AccordionSummary>
          <AccordionDetails>

          <p>
          Don&apos;t worry, we post new jobs all the time. You can subscribe to be the first to know about new opportunities and our latest news.
              </p>

          </AccordionDetails>
  </Accordion>
  <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <h4 className={styles.faqQuestionTitle}  style={{color: "#000000"}}>Why should I join now? </h4>
          </AccordionSummary>
          <AccordionDetails>

          <p>
          We’re on a journey to harness the power of technology and data to change the world of fashion and lifestyle. If you want to be part of that change and make a difference on a global scale, then H&M Group is the right place for you.

We are evolving our tech organisation to be future ready all the time and to become more focused, flexible, faster, and efficient. We are on a journey to harness the power of tech & data and the road to the goal is not yet paved. The future of fashion and lifestyle needs creative doers with technical excellence. We know we need the right skills, in the right place, at the right time. If you are looking to make an impact and be the difference that make a difference, now is just the right time to join H&M Group.
              </p>

          </AccordionDetails>
  </Accordion>
  <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <h4 className={styles.faqQuestionTitle}  style={{color: "#000000"}}>What are your remote working policies?</h4>
          </AccordionSummary>
          <AccordionDetails>

          <p>
          We offer a hybrid working model, and our teams are encouraged to adapt to a set-up based on the needs of the business, department, and the individual. However, this policy varies between different locations.
In Sweden, we have an average of 4 days a week in the office.
              </p>

          </AccordionDetails>
  </Accordion>
  <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <h4 className={styles.faqQuestionTitle}  style={{color: "#000000"}}>What is your company culture like, and how do you support your employees?
</h4>
          </AccordionSummary>
          <AccordionDetails>

          <p>
          H&M Group is a safe and welcoming place where collaboration is the key to success. We want all our colleagues to feel empowered to act, learn, and adapt, so we can continue to succeed together as one team.              </p>

          </AccordionDetails>
  </Accordion>
  <Accordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <h4 className={styles.faqQuestionTitle}  style={{color: "#000000"}}>What kind of opportunities are there for career growth and development within your company?
</h4>
          </AccordionSummary>
          <AccordionDetails>

          <p>
          At H&M Group, we support your growth, and recognise that you’ll find the way that suits you best.
We encourage growth within the company and arrange internal career weeks every year.
 </p>

          </AccordionDetails>
  </Accordion>
</div>

<div className={styles.quickLinksContainer} style={{margin: "100px auto", height: "fit-content", width: "80%"}}>
    <h2 className='quickLinksTitle' style={{  display: "block", color: "#000000", textAlign: "center", paddingBottom: "16px", margin: "0 auto"}}>
  Quick links</h2>
  <Button variant="outlined" className="quickLinksButton"> 
  <h3 className="quickLinkText">Tech at H&M Group </h3>
  <Image className='quickLinksArrow' src = "/icons/arrow-left.svg" alt="Right" width="24" height="24" />
  </Button>

  <Button variant="outlined" className="quickLinksButton"> 
  <h3 className="quickLinkText">FAQ</h3>
  <Image className='quickLinksArrow' src = "/icons/arrow-left.svg" alt="Left" width="24" height="24" />
  </Button>
    </div>
    <div className="featuredJobsContainer" style={{background: "#222222", height: "833px", padding: "120px 0"}}>

<h2 style={{width:"fit-content", margin: "auto", color: "#ffffff", paddingBottom: "40px"}}> Featured jobs</h2> 
<ScrollingCards style={{color: "red"}} ref={featuredJobsSliderRef} settings={featuredJobsSliderSettings}>
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
<div className="carousel-arrows" style={{border: "none", background: "none", marginLeft: "auto", marginRight: "auto", display: "block", position: "relative", width: "fit-content"}} >
       <button style={{margin: "14px", border: "none", background: "none"}} onClick={() => featuredJobsSliderRef.current.slickPrev()}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" cursor= "pointer" >
<path d="M10.71 19.29L1.91 10.5H20V9.5H1.91L10.71 0.71L10 0L0 10L10 20L10.71 19.29Z" fill="#ffffff"/>
</svg>

</button>
       <button style={{margin: "14px", border: "none", background: "none"}} onClick={() => featuredJobsSliderRef.current.slickNext()}> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" cursor= "pointer" >
<path d="M9.29 0.71L18.09 9.5H0V10.5H18.09L9.29 19.29L10 20L20 10L10 0L9.29 0.71Z" fill="#ffffff"/>
</svg>
</button>

     </div>
     <button className="myButton2" style={{display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "20px", padding: "16px 32px" }}>Explore all tech jobs <span style={{marginLeft: "4px"}}></span>                       
          <Image className= {styles.openInNewIcon} src = "/icons/svgWhiteOpenInNewIcon.svg" alt="Right" marginLeft= "12px" width= {16} height={16} /></button>

     </div>
    

<div className='footerContainer'>
  <Footer />
      </div>
</div>

        );
    };
    
    export default FAQ;
