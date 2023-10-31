import React from "react";
import styles from "./Footer.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const Footer = () => {
  const theme = useTheme();
  // fix fusk laga
  const isXs = useMediaQuery(theme.breakpoints.down(769));

  return (
    <>
      {!isXs && (
        <div className={styles.footer}>
          {/* LinkedIn Insight Tag Scripts */}
          <Script id="SC_LTS_CS6313689-19_H&M" type="text/javascript">
            {` _linkedin_partner_id = "2583826"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}{" "}
          </Script>
          <Script id="SC_LTS_CS6313689-19_H&Mpt2" type="text/javascript">
            {" "}
            {`(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk); `}
          </Script>
          <Script
            id="H&M Group - New"
            type="text/javascript"
          >{`_linkedin_partner_id = "2583826"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);  `}</Script>
          <Script
            id="H&M Group - Newpt2"
            type="text/javascript"
          >{` (function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk); `}</Script>
          {/* Google Analytics gtag.js Tag Scripts */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-EBQ7MMWKCW" />
          <Script id="google-analytics">
            {`
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-EBQ7MMWKCW');
`}
          </Script>
          <div className={styles.footerTop}>
            <svg
              width="262"
              height="80"
              viewBox="0 0 262 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.1778 53.9672H0.5V15.7952H5.1778V32.3894H25.0585V15.7952H29.7894V53.9672H25.0585V36.4717H5.1778V53.9672Z"
                fill="white"
              />
              <path
                d="M38.8265 23.1115C38.8265 18.4461 42.4411 15 47.5442 15C52.6472 15 56.3151 18.5521 56.3151 23.1115C56.3151 26.6637 54.0825 29.7916 49.1921 32.8666C52.2751 36.5248 55.3051 40.1829 58.3882 43.788C59.6473 40.9449 60.3337 37.8825 60.4081 34.7752H64.8202C64.7534 39.1518 63.5245 43.4325 61.2587 47.1811L66.9996 53.9672H61.5776C60.5676 52.8539 59.6108 51.6345 58.6008 50.4681C57.1368 51.8812 55.4048 52.9889 53.5063 53.7263C51.6078 54.4636 49.5809 54.8159 47.5442 54.7625C39.677 54.7625 34.7334 50.3091 34.7334 43.629C34.7334 39.2816 37.2849 35.6765 43.2385 32.1774C39.8896 28.4132 38.8265 25.7094 38.8265 23.1115ZM45.6837 35.0933C40.5275 38.3273 39.2517 40.554 39.2517 43.629C39.2517 48.0294 42.4943 50.7862 47.5442 50.7862C49.1117 50.8347 50.6722 50.5582 52.1271 49.9741C53.5819 49.3901 54.8994 48.5112 55.9961 47.3932L45.6837 35.0933ZM51.903 23.1115C51.903 20.5667 50.3615 18.9762 47.5973 18.9762C44.8332 18.9762 43.2385 20.6198 43.2385 23.1115C43.2385 24.9671 44.1422 26.8227 46.7468 29.9507C50.3615 27.618 51.903 25.9214 51.903 23.1115Z"
                fill="white"
              />
              <path
                d="M91.6107 53.9672H87.1456L75.9295 24.2248H75.8232V53.9672H71.4111V15.7952H77.2052L89.4845 48.4534C93.6307 37.585 97.7238 26.6636 101.817 15.7952H107.398V53.9672H102.933V24.2248H102.88C99.159 34.1389 95.4026 44.053 91.6107 53.9672Z"
                fill="white"
              />
              <path
                d="M151.359 38.9105H140.09V34.8812H156.25V53.9672H152.901L151.838 49.0367C148.808 53.172 144.555 54.7625 140.09 54.7625C128.449 54.7625 122.123 46.3859 122.123 34.8812C122.123 23.9068 128.396 15 140.09 15C147.851 15 154.177 19.1883 155.612 26.8227H150.721C149.499 21.8391 145.299 19.1883 140.09 19.1883C130.947 19.1883 126.96 26.8757 126.96 34.8812C126.96 43.629 130.894 50.6272 140.09 50.6272C145.406 50.6272 150.934 46.1208 151.359 38.9105Z"
                fill="white"
              />
              <path
                d="M162.15 27.3H166.509V31.0111C167.891 28.0422 170.655 26.5047 174.483 26.5047C175.301 26.4996 176.118 26.5528 176.928 26.6638V30.587C176.117 30.483 175.3 30.4298 174.483 30.428C169.22 30.428 166.509 33.1318 166.509 38.3805V53.9674H162.15V27.3Z"
                fill="white"
              />
              <path
                d="M203.825 40.6601C203.825 49.5669 197.872 54.7625 190.589 54.7625C183.307 54.7625 177.406 49.5139 177.406 40.6601C177.406 31.8063 183.254 26.5046 190.589 26.5046C197.818 26.5046 203.825 31.7003 203.825 40.6601ZM199.307 40.6601C199.307 33.874 195.533 30.4809 190.589 30.4809C185.539 30.4809 181.871 33.874 181.871 40.6601C181.871 47.4462 185.539 50.7863 190.589 50.7863C195.639 50.7863 199.307 47.3932 199.307 40.6601Z"
                fill="white"
              />
              <path
                d="M225.832 53.9672V50.8392C223.865 53.437 221.048 54.7624 217.273 54.7624C210.996 54.7624 207.859 51.1573 207.859 44V27.2998H212.224V43.788C212.224 48.6655 214.031 50.8922 218.177 50.8922C222.589 50.8922 225.832 48.0293 225.832 43.1518V27.2998H230.191V53.9672H225.832Z"
                fill="white"
              />
              <path
                d="M240.285 30.5869C242.31 27.8831 245.18 26.5046 249.061 26.5046C256.45 26.5046 261.5 32.2304 261.5 40.6601C261.5 49.0897 256.556 54.7625 249.061 54.7625C245.18 54.7625 242.257 53.4371 240.285 50.6855V65H235.926V27.2999H240.285V30.5869ZM248.742 50.8923C253.845 50.8923 256.981 47.2341 256.981 40.6071C256.981 33.98 253.792 30.3749 248.742 30.3749C243.267 30.3749 240.285 33.7149 240.285 40.6601C240.285 47.3932 243.267 50.8923 248.742 50.8923Z"
                fill="white"
              />
            </svg>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.ctaDiv}>
              <button
                className={styles.ctaButton}
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://smrtr.io/fmS8P", "_blank");
                }}
              >
                Connect with us
              </button>
            </div>
            <div className={styles.careerDiv}>
              <h6 className={styles.careerTitle}>Careers</h6>
              <Link
                href="https://hmgroup.com/career/find-your-career-with-us/"
                target="_blank"
              >
                {" "}
                <p className={styles.careerText}>
                  Explore all jobs within H&M Group{" "}
                </p>{" "}
              </Link>
            </div>
            <div className={styles.linksDiv}>
              <h6 className={styles.linksTitle}>The H&M Group</h6>
              <Link href="https://hmgroup.com/" target="_blank">
                <p>Explore the Group</p>
              </Link>
              <Link href="https://hmgroup.com/sustainability/" target="_blank">
                <p>Sustainability</p>
              </Link>
              <Link
                href="https://hmgroup.com/media/our-stories/"
                target="_blank"
              >
                <p>Our stories</p>
              </Link>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p style={{ whiteSpace: "nowrap" }}>
              Copyright © 2023 H&M Group. All rights reserved.
            </p>
            <div className={styles.footerSocials}>
              <Link href="https://www.youtube.com/c/HMGroup" target="_blank">
                <svg
                  className={styles.ytLogo}
                  width="26"
                  height="26"
                  viewBox="0 0 18 12"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.6883 1.90786C17.4682 1.00288 16.6852 0.335824 15.7426 0.235765C13.5106 7.08848e-05 11.2516 -0.000670297 9.00245 7.08798e-05C6.75327 -0.000670297 4.49427 7.08848e-05 2.26227 0.235765C1.31973 0.335824 0.536727 1.00288 0.316636 1.90786C0.00327271 3.19676 0 4.60278 0 5.92948C0 7.25619 0 8.66294 0.312545 9.95111C0.533455 10.8561 1.31564 11.5239 2.25818 11.6232C4.49018 11.8589 6.74918 11.8596 8.99836 11.8589C11.2475 11.8596 13.5065 11.8589 15.7385 11.6232C16.6811 11.5239 17.4641 10.8561 17.6842 9.95111C17.9975 8.66294 18 7.25619 18 5.92948C18 4.60278 18.0016 3.19676 17.6883 1.90786ZM7.30636 8.44429V3.61849L11.9635 6.03102L7.30636 8.44429Z"
                    fill="#ffffff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.6883 1.90786C17.4682 1.00288 16.6852 0.335824 15.7426 0.235765C13.5106 7.08848e-05 11.2516 -0.000670297 9.00245 7.08798e-05C6.75327 -0.000670297 4.49427 7.08848e-05 2.26227 0.235765C1.31973 0.335824 0.536727 1.00288 0.316636 1.90786C0.00327271 3.19676 0 4.60278 0 5.92948C0 7.25619 0 8.66294 0.312545 9.95111C0.533455 10.8561 1.31564 11.5239 2.25818 11.6232C4.49018 11.8589 6.74918 11.8596 8.99836 11.8589C11.2475 11.8596 13.5065 11.8589 15.7385 11.6232C16.6811 11.5239 17.4641 10.8561 17.6842 9.95111C17.9975 8.66294 18 7.25619 18 5.92948C18 4.60278 18.0016 3.19676 17.6883 1.90786ZM7.30636 8.44429V3.61849L11.9635 6.03102L7.30636 8.44429Z"
                    fill="#ffffff"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/hmgroup/"
                target="_blank"
              >
                <svg
                  className={styles.liLogo}
                  width="26"
                  height="26"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3653 0H1.61944C0.733333 0 0 0.702778 0 1.58889V20.4111C0 21.2819 0.733333 22 1.61944 22H20.3653C21.2667 22 22 21.2819 22 20.4111V1.58889C22 0.702778 21.2667 0 20.3653 0ZM6.52361 18.7458H3.25417V8.25H6.52361V18.7458ZM4.88889 6.81389C3.85 6.81389 2.99444 5.97361 2.99444 4.91944C2.99444 3.88056 3.83472 3.025 4.88889 3.025C5.92778 3.025 6.78333 3.86528 6.78333 4.91944C6.78333 5.95833 5.94306 6.81389 4.88889 6.81389ZM18.7458 18.7458H15.4917V13.6431C15.4917 12.4208 15.4764 10.8625 13.7958 10.8625C12.1 10.8625 11.8403 12.1917 11.8403 13.5514V18.7458H8.57083V8.25H11.7028V9.68611H11.7486C12.1917 8.86111 13.2458 7.99028 14.8347 7.99028C18.1347 7.99028 18.7458 10.1597 18.7458 12.9861V18.7458Z"
                    fill="#ffffff"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isXs && (
        <div className={styles.footer}>
          <div className={styles.footerTop}>
            <svg
              width="262"
              height="80"
              viewBox="0 0 262 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.1778 53.9672H0.5V15.7952H5.1778V32.3894H25.0585V15.7952H29.7894V53.9672H25.0585V36.4717H5.1778V53.9672Z"
                fill="white"
              />
              <path
                d="M38.8265 23.1115C38.8265 18.4461 42.4411 15 47.5442 15C52.6472 15 56.3151 18.5521 56.3151 23.1115C56.3151 26.6637 54.0825 29.7916 49.1921 32.8666C52.2751 36.5248 55.3051 40.1829 58.3882 43.788C59.6473 40.9449 60.3337 37.8825 60.4081 34.7752H64.8202C64.7534 39.1518 63.5245 43.4325 61.2587 47.1811L66.9996 53.9672H61.5776C60.5676 52.8539 59.6108 51.6345 58.6008 50.4681C57.1368 51.8812 55.4048 52.9889 53.5063 53.7263C51.6078 54.4636 49.5809 54.8159 47.5442 54.7625C39.677 54.7625 34.7334 50.3091 34.7334 43.629C34.7334 39.2816 37.2849 35.6765 43.2385 32.1774C39.8896 28.4132 38.8265 25.7094 38.8265 23.1115ZM45.6837 35.0933C40.5275 38.3273 39.2517 40.554 39.2517 43.629C39.2517 48.0294 42.4943 50.7862 47.5442 50.7862C49.1117 50.8347 50.6722 50.5582 52.1271 49.9741C53.5819 49.3901 54.8994 48.5112 55.9961 47.3932L45.6837 35.0933ZM51.903 23.1115C51.903 20.5667 50.3615 18.9762 47.5973 18.9762C44.8332 18.9762 43.2385 20.6198 43.2385 23.1115C43.2385 24.9671 44.1422 26.8227 46.7468 29.9507C50.3615 27.618 51.903 25.9214 51.903 23.1115Z"
                fill="white"
              />
              <path
                d="M91.6107 53.9672H87.1456L75.9295 24.2248H75.8232V53.9672H71.4111V15.7952H77.2052L89.4845 48.4534C93.6307 37.585 97.7238 26.6636 101.817 15.7952H107.398V53.9672H102.933V24.2248H102.88C99.159 34.1389 95.4026 44.053 91.6107 53.9672Z"
                fill="white"
              />
              <path
                d="M151.359 38.9105H140.09V34.8812H156.25V53.9672H152.901L151.838 49.0367C148.808 53.172 144.555 54.7625 140.09 54.7625C128.449 54.7625 122.123 46.3859 122.123 34.8812C122.123 23.9068 128.396 15 140.09 15C147.851 15 154.177 19.1883 155.612 26.8227H150.721C149.499 21.8391 145.299 19.1883 140.09 19.1883C130.947 19.1883 126.96 26.8757 126.96 34.8812C126.96 43.629 130.894 50.6272 140.09 50.6272C145.406 50.6272 150.934 46.1208 151.359 38.9105Z"
                fill="white"
              />
              <path
                d="M162.15 27.3H166.509V31.0111C167.891 28.0422 170.655 26.5047 174.483 26.5047C175.301 26.4996 176.118 26.5528 176.928 26.6638V30.587C176.117 30.483 175.3 30.4298 174.483 30.428C169.22 30.428 166.509 33.1318 166.509 38.3805V53.9674H162.15V27.3Z"
                fill="white"
              />
              <path
                d="M203.825 40.6601C203.825 49.5669 197.872 54.7625 190.589 54.7625C183.307 54.7625 177.406 49.5139 177.406 40.6601C177.406 31.8063 183.254 26.5046 190.589 26.5046C197.818 26.5046 203.825 31.7003 203.825 40.6601ZM199.307 40.6601C199.307 33.874 195.533 30.4809 190.589 30.4809C185.539 30.4809 181.871 33.874 181.871 40.6601C181.871 47.4462 185.539 50.7863 190.589 50.7863C195.639 50.7863 199.307 47.3932 199.307 40.6601Z"
                fill="white"
              />
              <path
                d="M225.832 53.9672V50.8392C223.865 53.437 221.048 54.7624 217.273 54.7624C210.996 54.7624 207.859 51.1573 207.859 44V27.2998H212.224V43.788C212.224 48.6655 214.031 50.8922 218.177 50.8922C222.589 50.8922 225.832 48.0293 225.832 43.1518V27.2998H230.191V53.9672H225.832Z"
                fill="white"
              />
              <path
                d="M240.285 30.5869C242.31 27.8831 245.18 26.5046 249.061 26.5046C256.45 26.5046 261.5 32.2304 261.5 40.6601C261.5 49.0897 256.556 54.7625 249.061 54.7625C245.18 54.7625 242.257 53.4371 240.285 50.6855V65H235.926V27.2999H240.285V30.5869ZM248.742 50.8923C253.845 50.8923 256.981 47.2341 256.981 40.6071C256.981 33.98 253.792 30.3749 248.742 30.3749C243.267 30.3749 240.285 33.7149 240.285 40.6601C240.285 47.3932 243.267 50.8923 248.742 50.8923Z"
                fill="white"
              />
            </svg>
          </div>

          <div className={styles.mobileFooterLinks}>
            <div className={styles.mobileCtaDiv}>
              <button
                target="_blank"
                className={styles.mobileCtaButton}
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://smrtr.io/fmS8P", "_blank");
                }}
              >
                Connect with us
              </button>
            </div>
            <div className={styles.mobileCareerDiv}>
              <h6 className={styles.mobileCareerTitle}>Careers</h6>
              <Link href="https://hmgroup.com/career/find-your-career-with-us/">
                {" "}
                <p className={styles.careerText}>
                  Explore all jobs within H&M Group
                </p>{" "}
              </Link>
            </div>
            <div className={styles.mobileLinksDiv}>
              <h6 className={styles.mobileLinksTitle}>The H&M Group</h6>
              <Link href="https://hmgroup.com/" target="_blank">
                <p>Explore the Group</p>
              </Link>
              <Link href="https://hmgroup.com/sustainability/" target="_blank">
                <p>Sustainability</p>
              </Link>
              <Link
                href="https://hmgroup.com/media/our-stories/"
                target="_blank"
              >
                <p>Our stories</p>
              </Link>
            </div>
          </div>

          <div className={styles.mobileFooterBottom}>
            <p style={{ whiteSpace: "nowrap" }}>
              Copyright © 2023 H&M Group. <br /> All rights reserved.
            </p>
            <div className={styles.mobileFooterSocials}>
              <Link href="https://www.youtube.com/c/HMGroup" target="_blank">
                <svg
                  className={styles.mobileYtLogo}
                  width="26"
                  height="26"
                  viewBox="0 0 18 12"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.6883 1.90786C17.4682 1.00288 16.6852 0.335824 15.7426 0.235765C13.5106 7.08848e-05 11.2516 -0.000670297 9.00245 7.08798e-05C6.75327 -0.000670297 4.49427 7.08848e-05 2.26227 0.235765C1.31973 0.335824 0.536727 1.00288 0.316636 1.90786C0.00327271 3.19676 0 4.60278 0 5.92948C0 7.25619 0 8.66294 0.312545 9.95111C0.533455 10.8561 1.31564 11.5239 2.25818 11.6232C4.49018 11.8589 6.74918 11.8596 8.99836 11.8589C11.2475 11.8596 13.5065 11.8589 15.7385 11.6232C16.6811 11.5239 17.4641 10.8561 17.6842 9.95111C17.9975 8.66294 18 7.25619 18 5.92948C18 4.60278 18.0016 3.19676 17.6883 1.90786ZM7.30636 8.44429V3.61849L11.9635 6.03102L7.30636 8.44429Z"
                    fill="#ffffff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.6883 1.90786C17.4682 1.00288 16.6852 0.335824 15.7426 0.235765C13.5106 7.08848e-05 11.2516 -0.000670297 9.00245 7.08798e-05C6.75327 -0.000670297 4.49427 7.08848e-05 2.26227 0.235765C1.31973 0.335824 0.536727 1.00288 0.316636 1.90786C0.00327271 3.19676 0 4.60278 0 5.92948C0 7.25619 0 8.66294 0.312545 9.95111C0.533455 10.8561 1.31564 11.5239 2.25818 11.6232C4.49018 11.8589 6.74918 11.8596 8.99836 11.8589C11.2475 11.8596 13.5065 11.8589 15.7385 11.6232C16.6811 11.5239 17.4641 10.8561 17.6842 9.95111C17.9975 8.66294 18 7.25619 18 5.92948C18 4.60278 18.0016 3.19676 17.6883 1.90786ZM7.30636 8.44429V3.61849L11.9635 6.03102L7.30636 8.44429Z"
                    fill="#ffffff"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/hmgroup/"
                target="_blank"
              >
                <svg
                  className={styles.mobileLiLogo}
                  width="26"
                  height="26"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3653 0H1.61944C0.733333 0 0 0.702778 0 1.58889V20.4111C0 21.2819 0.733333 22 1.61944 22H20.3653C21.2667 22 22 21.2819 22 20.4111V1.58889C22 0.702778 21.2667 0 20.3653 0ZM6.52361 18.7458H3.25417V8.25H6.52361V18.7458ZM4.88889 6.81389C3.85 6.81389 2.99444 5.97361 2.99444 4.91944C2.99444 3.88056 3.83472 3.025 4.88889 3.025C5.92778 3.025 6.78333 3.86528 6.78333 4.91944C6.78333 5.95833 5.94306 6.81389 4.88889 6.81389ZM18.7458 18.7458H15.4917V13.6431C15.4917 12.4208 15.4764 10.8625 13.7958 10.8625C12.1 10.8625 11.8403 12.1917 11.8403 13.5514V18.7458H8.57083V8.25H11.7028V9.68611H11.7486C12.1917 8.86111 13.2458 7.99028 14.8347 7.99028C18.1347 7.99028 18.7458 10.1597 18.7458 12.9861V18.7458Z"
                    fill="#ffffff"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
