import HeaderNavItem from "./HeaderNavItem";
import { leftShortcuts, rightShortcuts } from "./data";

const Shortcuts = () => {
  return (
    <div className="absolute top-0 hidden h-9 w-full items-center justify-center bg-black px-4 sm:px-6 md:px-7 lg:px-9 xl:flex xl:px-12.5">
      <div className="flex w-full max-w-360 items-center justify-between">
        {/*Left Content*/}
        <div className="flex items-center gap-10">
          {leftShortcuts.map((el, i) => (
            <HeaderNavItem key={i} {...el} />
          ))}
        </div>
        {/*Right Content*/}
        <div className="flex items-center gap-10">
          {rightShortcuts.map((el, i) => (
            <HeaderNavItem key={i} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
