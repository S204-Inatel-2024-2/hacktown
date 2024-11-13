'use client';

import { Crown, MapPinned, MicVocal, Monitor, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const location = usePathname();

  return (
    <section className="bg-black text-white min-w-64 h-screen space-y-2">
      <div className="flex items-center relative px-5 pt-5 pb-3">
        <h1 className="text-lg font-medium">Evento</h1>
      </div>
      <nav className="pl-5">
        <ul>
          <li
            className={`p-4 ${location === '/dashboard/users' ? 'bg-white text-black rounded-s-2xl hover:bg-opacity-95' : 'hover:bg-black hover:opacity-70'}`}
          >
            <a href="/dashboard/users" className="flex gap-2">
              <Users size={20} />
              Usuários
            </a>
          </li>
          <li
            className={`p-4 ${location === '/dashboard/leaders' ? 'bg-white text-black rounded-s-2xl hover:bg-opacity-95' : 'hover:bg-black hover:opacity-70'}`}
          >
            <a href="/dashboard/leaders" className="flex gap-2">
              <Crown size={20} />
              Líderes
            </a>
          </li>
          <li
            className={`p-4 ${location === '/dashboard/venues' ? 'bg-white text-black rounded-s-2xl hover:bg-opacity-95' : 'hover:bg-black hover:opacity-70'}`}
          >
            <a href="/dashboard/venues" className="flex gap-2">
              <MapPinned size={20} />
              Venues
            </a>
          </li>
          <li
            className={`p-4 ${location === '/dashboard/speakers' ? 'bg-white text-black rounded-s-2xl hover:bg-opacity-95' : 'hover:bg-black hover:opacity-70'}`}
          >
            <a href="/dashboard/speakers" className="flex gap-2">
              <MicVocal size={20} />
              Palestrantes
            </a>
          </li>
          <li
            className={`p-4 ${location === '/dashboard/lectures' ? 'bg-white text-black rounded-s-2xl hover:bg-opacity-95' : 'hover:bg-black hover:opacity-70'}`}
          >
            <a href="/dashboard/lectures" className="flex gap-2">
              <Monitor size={20} />
              Palestras
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
