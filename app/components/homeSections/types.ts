import { FormEvent } from "react";

export type SubmitStatus = "idle" | "sending" | "success";

export type ContactSectionProps = {
  submitStatus: SubmitStatus;
  submitError: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

export type HeroSectionProps = {
  activeSlide: number;
  onDotClick: (index: number) => void;
  onVideoEnd: () => void;
};
