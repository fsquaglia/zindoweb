function AboutUs({ aboutUs }) {
  return (
    <div className="text-center text-sm italic font-light p-4">
      {aboutUs[0].aboutUs || "Mi about"}
    </div>
  );
}

export default AboutUs;
