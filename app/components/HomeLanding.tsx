"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./homeLanding.module.css";
import { CONTACT, heroSlides } from "./homeLanding.data";
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

export default function HomeLanding() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

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

      <HeroSection activeSlide={activeSlide} onDotClick={setActiveSlide} />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <WorkGallerySection />
      <TestimonialsSection />
      <CtaStrip />
      <ContactSection
        submitStatus={submitStatus}
        submitError={submitError}
        onSubmit={onSubmit}
      />
      <ServiceAreasSection />
    </div>
  );
}
