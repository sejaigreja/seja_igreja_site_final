import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-black via-[#000000] to-[#2684eb] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/">
          <img
            src="/images/logo_sejaigreja.png"
            alt="Logo Seja Igreja"
            className="h-12 md:h-16"
          />
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#eventos" className="hover:text-[#6861ec] transition">Eventos</a>
          <a href="#palavra" className="hover:text-[#6861ec] transition">Palavra</a>
          <a href="#agenda" className="hover:text-[#6861ec] transition">Agenda</a>
          <a href="#ministerios" className="hover:text-[#6861ec] transition">Ministérios</a>
          <a href="#contribua" className="hover:text-[#6861ec] transition">Contribua</a>
          <a href="#contato" className="hover:text-[#6861ec] transition">Contato</a>
        </nav>
      </div>
    </header>
    );
}