import logo from './assets/logo.png';

const Header = () => {
  return (
    <header className="bg-grey h-140 flex items-center ">
      <div className="border border-white w-fit ipad:ml-16 p-4 m-auto">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
};
export default Header;
