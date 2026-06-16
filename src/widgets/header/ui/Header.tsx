import Supreme from "./Supreme";
import Shortcuts from "./Shortcuts";
import CatalogCategory from "./CatalogCategory";

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
