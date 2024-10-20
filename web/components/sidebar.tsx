'use client';

import { Crown, MapPinned, Users } from 'lucide-react';
import { useState } from 'react';

export const Sidebar = () => {
  const [isSelected, setIsSelected] = useState('');

  return (
    <section className="bg-black text-white min-w-64 h-screen space-y-2">
      <div className="flex items-center relative px-5 pt-5 pb-3">
        <h1 className="text-lg font-medium">Evento</h1>
      </div>
      <nav className="pl-5">
        <ul>
          <li
            onClick={() => setIsSelected('Usuários')}
            className={`p-4 cursor-pointer flex gap-2  ${isSelected === 'Usuários' ? 'bg-white text-black rounded-s-2xl hover:bg-opacity-95' : 'hover:bg-black hover:opacity-70'}`}
          >
            <Users size={20} />
            Usuários
          </li>
          <li
            onClick={() => setIsSelected('Venues')}
            className={`p-4 cursor-pointer flex gap-2  ${isSelected === 'Venues' ? 'bg-white text-black rounded-s-2xl hover:bg-opacity-95' : 'hover:bg-black hover:opacity-70'}`}
          >
            <MapPinned size={20} />
            Venues
          </li>
          <li
            onClick={() => setIsSelected('Líderes')}
            className={`p-4 cursor-pointer flex gap-2  ${isSelected === 'Líderes' ? 'bg-white text-black rounded-s-2xl hover:bg-opacity-95' : 'hover:bg-black hover:opacity-70'}`}
          >
            <Crown size={20} />
            Líderes
          </li>
        </ul>
      </nav>
    </section>
  );
};
