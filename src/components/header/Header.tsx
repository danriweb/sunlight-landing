import CatalogCategory from "./CatalogCategory";
import Shortcuts from "./Shortcuts";
import Supreme from "./Supreme";

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center xl:pt-9">
      <Shortcuts />
      <Supreme />
      <CatalogCategory />
    </header>
  );
};

export default Header;
