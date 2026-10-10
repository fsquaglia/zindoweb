export default function ThirdColumn({ titleClientService, textClientService }) {
  return (
    <div className="text-center sm:text-left w-3/5 mx-auto">
      <h2 className="text-md font-semibold">{titleClientService}</h2>
      <p className="text-xs">{textClientService}</p>
    </div>
  );
}
