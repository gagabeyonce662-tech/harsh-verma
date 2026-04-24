import { CONTACT } from "./homeLanding.data";

const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-surface-container-high py-6">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-on-surface-variant text-sm">
          &copy; {new Date().getFullYear()} Diesel Performance. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href={CONTACT.phoneHref} className="text-on-surface hover:text-primary">
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={`mailto:${CONTACT.emailPrimary}`}
            className="text-on-surface hover:text-primary"
          >
            {CONTACT.emailPrimary}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
