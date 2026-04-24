"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./homeLanding.module.css";
import { CONTACT, heroMedia } from "./homeLanding.data";
import {
  AboutSection,
  ContactSection,
  CtaStrip,
  HeroSection,
  ServiceAreasSection,
  ServicesSection,
  SubmitStatus,
  TestimonialsSection,
  TrustStrip,
  WhySection,
  WorkGallerySection,
} from "./homeSections";

function formDataToRecord(formData: FormData): Record<string, FormDataEntryValue> {
  const data: Record<string, FormDataEntryValue> = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  return data;
}

function SectionTruckStrip({
  reverse = false,
  first = false,
}: {
  reverse?: boolean;
  first?: boolean;
}) {
  const trucks = Array.from({ length: 14 });

  return (
    <div
      className={`section-truck-strip ${reverse ? "reverse" : ""} ${first ? "first-strip" : ""}`}
      aria-hidden="true"
    >
      <div className="truck-marquee">
        <div className="truck-track">
          {trucks.map((_, index) => (
            <span key={`truck-a-${index}`} className="truck-icon">
              <i className="fa fa-truck-moving" />
            </span>
          ))}
        </div>
        <div className="truck-track" aria-hidden="true">
          {trucks.map((_, index) => (
            <span key={`truck-b-${index}`} className="truck-icon">
              <i className="fa fa-truck-moving" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeLanding() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (heroMedia[activeSlide]?.type === "video") {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % heroMedia.length);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [activeSlide]);

  const onHeroVideoEnd = () => {
    setActiveSlide((prev) => (prev + 1) % heroMedia.length);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("sending");
    setSubmitError("");

    try {
      const formData = new FormData(event.currentTarget);
      const data = formDataToRecord(formData);

      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, page_slug: "" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      setSubmitStatus("success");
    } catch {
      setSubmitStatus("idle");
      setSubmitError(
        `Something went wrong. Please call us at ${CONTACT.phoneDisplay}.`,
      );
    }
  };

  return (
    <div className={styles.page}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Open+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <HeroSection
        activeSlide={activeSlide}
        onDotClick={setActiveSlide}
        onVideoEnd={onHeroVideoEnd}
      />
      <TrustStrip />
      <SectionTruckStrip first />
      <AboutSection />
      <SectionTruckStrip reverse />
      <ServicesSection />
      <SectionTruckStrip />
      <WhySection />
      <SectionTruckStrip reverse />
      <WorkGallerySection />
      <SectionTruckStrip />
      <TestimonialsSection />
      <SectionTruckStrip reverse />
      <CtaStrip />
      <SectionTruckStrip />
      <ContactSection
        submitStatus={submitStatus}
        submitError={submitError}
        onSubmit={onSubmit}
      />
      <SectionTruckStrip reverse />
      <ServiceAreasSection />
    </div>
  );
}
