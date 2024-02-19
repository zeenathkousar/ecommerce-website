import React from "react";
import { Layout } from "../components/layout/Layout";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";

export const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <img className="imgContact" src="contact.jpg" alt="contact img" />
        <h1 className="contactheading1">Contact US</h1>
        <p className="paracontact">
          For any Query or Info about any Product, Feel free to call any time-
          (24X7) available
        </p>
        <h2 className="contactheading2">
          {" "}
          <MdAttachEmail />
          www.helporgecommerce.com
        </h2>
        <h2 className="contactphn">
          {" "}
          <FaPhoneAlt /> 012-786-6746
        </h2>
        <h2 className="contacttollfreeno">
          <TbDeviceLandlinePhone />
          1800-5656-6767(Toll Free)
        </h2>
      </div>
    </Layout>
  );
};
