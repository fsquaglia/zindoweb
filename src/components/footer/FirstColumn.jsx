export default function FirstColumn({ titleDisclaimer, textDisclaimer }) {
  return (
    <div className="text-center sm:text-left w-3/5 mx-auto">
      <h2 className="text-md font-semibold">{titleDisclaimer}</h2>
      <p className="text-xs">{textDisclaimer}</p>
    </div>
  );
}
