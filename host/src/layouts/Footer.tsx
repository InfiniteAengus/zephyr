const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full items-center justify-between p-4 flex text-zinc-600">
      <span className="absolute top-0 left-0 right-0 h-[1px] m-gradient-border"></span>
      <ul className="has-[li]:cursor-pointer flex items-center gap-4">
        <li>Home</li>
        <li>FAQ</li>
        <li>Returns</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <span>
        Copyright © 2024{" "}
        <a href="https://zephyr-cloud.io/" target="_blank" className="text-zinc-300">
          Zephyr Cloud
        </a>
      </span>
    </footer>
  );
};

export default Footer;
