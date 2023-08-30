export const CardSummary = ({ value, text, color }) => {
  return (
    <div
      className={`bg-${color}  roundedPortofolio flex flex-col gap-1 items-center justify-center`}
    >
      <h1 className="text-5xl font-bold">{value}</h1>
      <p className="text-sm">{text}</p>
    </div>
  );
};
