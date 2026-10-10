function Spinenr({ type = "default" }) {
  switch (type) {
    case "small":
      return (
        <div className="animate-spin rounded-full size-4 border-b-2 border-gray-900"></div>
      );
    case "large":
      return (
        <div className="animate-spin rounded-full size-12 border-b-4 border-gray-900"></div>
      );
    default:
      return (
        <div className="animate-spin rounded-full size-8 border-b-2 border-gray-900"></div>
      );
  }
}

export default Spinenr;
