"use client";
import CardItems from "./CardItems";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import ContactEmail from "./ContactEmail";

function ContactClient({ contact }) {
  const [viewFormEmail, setViewFormEmail] = useState(false);
  const { email, phone, facebook, instagram, whatsappInitialMessage } =
    contact[0] ?? {};

  // Datos para los iconos de contacto
  const contactIxd = [
    {
      id: 1,
      title: "Email",
      info: email,
      icon: <MdEmail />,
      color: "#D44638",
    },
    {
      id: 2,
      title: "Whatsapp",
      info: phone,
      icon: <FaWhatsapp />,
      color: "#25D366",
    },
    {
      id: 3,
      title: "Facebook",
      info: facebook,
      icon: <FaFacebookF />,
      color: "#1877F2",
    },
    {
      id: 4,
      title: "Instagram",
      info: instagram,
      icon: <FaInstagram />,
      color: "#C13584",
    },
  ];

  // Datos para el enlace de WhatsApp
  const whatsappMessage = encodeURIComponent(
    whatsappInitialMessage ||
      "Hola, me gustaría obtener más información sobre sus servicios.",
  );
  const whatsappLink = `https://wa.me/${phone}?text=${whatsappMessage}`;

  // Manejar el clic en el icono de contacto
  const handleClickIcon = (title) => {
    switch (title) {
      case "Whatsapp":
        window.open(whatsappLink, "_blank", "noopener,noreferrer");
        break;
      case "Email":
        setViewFormEmail(!viewFormEmail);
        break;
      case "Facebook":
        window.open(contact.facebook, "_blank", "noopener,noreferrer");
        break;
      case "Instagram":
        window.open(contact.instagram, "_blank", "noopener,noreferrer");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* [iconos circulares] */}
      <div className="container justify-self-center flex flex-row flex-wrap justify-center items-enter gap-4 sm:gap-8 px-4 md:px-8 lg:px-16 py-8">
        {contactIxd.map((contact) => (
          <CardItems
            key={contact.id}
            color={contact.color}
            icon={contact.icon}
            title={contact.title}
            onClick={handleClickIcon}
          />
        ))}
      </div>
      {/* Formulario para EMAIL */}
      <div
        className={`container max-w-2xl mx-auto px-4 md:px-8 lg:px-16 overflow-hidden transition-all duration-900 ease-in-out ${
          viewFormEmail
            ? "max-h-2xl opacity-100 py-8"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ContactEmail />
      </div>
    </div>
  );
}

export default ContactClient;
