export const SidebarItem = ({ icons, label, isActive }) => {
  return (
    <>
      <a
        href="#"
        className="flex items-center gap-4 px-2 py-3 rounded-lg transition-colors hover:bg-[#1A1A1A]"
      >
        <div className="w-fit">{icons}</div>
        <h1 className={`text-lg ${isActive ? 'font-semibold' : 'font-normal'}`}>
          {label}
        </h1>
      </a>
    </>
  );
};
