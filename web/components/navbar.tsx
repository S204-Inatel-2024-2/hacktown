import { Bell, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <section className="flex justify-between items-center px-12 py-6 shadow-sm">
      <div className="flex space-x-3 items-center">
        <h1 className="font-bold">Galisses</h1>
        <div className="w-[1px] h-5 bg-gray-500" />
        <h1 className="font-medium">Hacktown</h1>
      </div>
      <nav>
        <ul className="flex items-center space-x-3">
          <li className="bg-gray-100 p-3 rounded-full cursor-pointer">
            <Bell size={20} />
          </li>
          <li className="rounded-full p-3 cursor-pointer bg-blue-100">
            <User size={20} />
          </li>
        </ul>
      </nav>
    </section>
  );
};
