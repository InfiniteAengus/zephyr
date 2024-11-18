import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4">
      <span className="absolute bottom-0 left-0 right-0 h-[1px] m-gradient-border"></span>
      <Link href={"/"} className="m-gradient-text u-text-clip-bg font-semibold text-xl">
        ZephyrFaster
      </Link>
      <div className="flex items-center gap-4 text-zinc-300">
        <Link href="/orders">Order</Link>
        <Link href="/orders">Order History</Link>
      </div>
    </header>
  );
};

export default Header;
