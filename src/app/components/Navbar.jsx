import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-primary h-fit hover:bg-blue-600 flex justify-between items-center px-[3%]">
      <div className="">
        <a className=" text-blue-300 font-extrabold text-2xl ">Daisy-UI</a>
      </div>

      <div className="text-blue-200 font-semibold text-lg  flex gap-20 w-fit ">
        <Link href="/" className="hover:underline hover:text-white transition duration-500 ">Home</Link>
        <Link href="/" className="hover:underline hover:text-white transition duration-500 ">User</Link>
        <Link href="/" className="hover:underline hover:text-white transition duration-500 ">About</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div className="avatar" tabIndex={0} role="button">
            <div className="w-[3vw] rounded-full ring  ring-blue-300 ring-offset-base-100 ring-offset-2">
              <img src="https://wallpapers.com/images/hd/south-hero-with-aviators-0lvpzh09vo8mjc4p.jpg" />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
