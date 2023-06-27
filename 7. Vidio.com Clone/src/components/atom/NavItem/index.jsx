export const NavItem = ({ label, isLive }) => {
  return (
    <li className="text-sm font-medium flex flex-row items-center gap-1">
      {isLive ? <div className="bg-red-500 h-2 w-2 rounded-full"></div> : null}
      <a href="#">{label}</a>
    </li>
  );
};
