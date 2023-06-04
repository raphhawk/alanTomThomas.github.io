import copyIcon from "/src/icos/copy.png";
import { contactData } from "./data";

export const Footer = () => {
  return (
    <footer className="bottom-0 flex md:flex-row flex-col md:justify-between px-10 pt-4 md:px-40 h-fit w-screen  bg-bgDark text-green">
      <div>
        <h2 className="mb-3 text-blue">Links</h2>
        <div className="flex flex-col">
          <a href={contactData.links.linkedin} className="hover:text-yellow">
            Linkedin
          </a>
          <a href={contactData.links.github} className="hover:text-yellow">
            Github
          </a>
          <hr className="w-7 text-blue mb-5" />
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-blue">Contact</h2>
        <div className="flex flex-col">
          <h2>Location: {contactData.contact.location}</h2>

          <h2
            className="relative group hover:underline underline-offset-4 flex flex-row hover:cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(contactData.contact.phone);
              alert("Copied phone number");
            }}
          >
            Phone: {contactData.contact.phone}
            <img
              src={copyIcon}
              className="invert mx-2 w-4 h-4 invisible group-hover:visible"
            />
          </h2>

          <h2
            className="relative group hover:underline underline-offset-4 flex flex-row hover:cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(contactData.contact.email);
              alert("Copied Email id ");
            }}
          >
            Email: {contactData.contact.email}
            <img
              src={copyIcon}
              className="invert mx-2 w-4 h-4 invisible group-hover:visible"
            />
          </h2>

          <hr className="w-7 text-blue mb-5" />
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-blue">{contactData.copyright}</h2>
        <hr className="w-7 text-blue mb-5" />
      </div>
    </footer>
  );
};
