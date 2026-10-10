const MapCommerce = ({ iframe }) => {
  // Guía paso a paso para obtener el enlace de Google Maps:
  // https://www.dongee.com/tutoriales/como-poner-google-maps-en-mi-pagina-web/

  if (!iframe || iframe.length === 0 || !iframe[0].srcIframe) return null;

  return (
    <div className="w-full h-[600px]">
      <iframe
        src={iframe[0].srcIframe}
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapCommerce;
