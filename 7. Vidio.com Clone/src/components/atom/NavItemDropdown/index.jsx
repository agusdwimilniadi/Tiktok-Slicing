export const NavItemDropdown = ({ label }) => {
  return (
    <>
      <div className="py-3  hover:bg-slate-200 w-[200px] cursor-pointer">
        <a className="w-full px-2" href="#">
          {label}
        </a>
      </div>
      <hr />
    </>
  );
};
