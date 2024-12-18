import Link from "next/link";

export default function Navbar() {
    return (
      <div className="flex justify-between px-11 items-center w-full bg-gray-50 shadow-md h-14">
        <div>
            <img src="/logo.png" alt="" className="w-[50px] h-[50px]" />
        </div>
        <div className="hidden md:flex items-center gap-4">
            <Link className="text-gray-900 hover:text-blue-400 font-medium text-lg" href='/'>Home</Link>
            <Link className="text-gray-900 hover:text-blue-400 font-medium text-lg" href='/about'>About</Link>
            <Link className="text-gray-900 hover:text-blue-400 font-medium text-lg" href='/contect'>Contect</Link>
        </div>
        <div className="flex gap-4">
            <Link href='/login' className="text-gray-900 font-medium text-lg border rounded-full px-4 py-1 hover:shadow">Login</Link>
            <Link href='/register' className="text-white font-medium text-lg bg-blue-500 hover:bg-blue-400 px-4 py-1 rounded">Register</Link>
        </div>
      </div>
    );
  }
  