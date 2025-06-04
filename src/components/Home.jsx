import React from 'react';
import Header from '../components/Header';
import VersiculoDoDia from '../components/VersiculoDoDia';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section id="eventos" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Próximos Eventos</h2>
        <div className="text-gray-300">(Imagem ou destaque de evento especial aqui)</div>
      </section>

      <section id="palavra" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Palavra Pastoral</h2>
        <p className="text-gray-300 italic">
          Bem-vindo ao nosso espaço virtual! Esta é uma comunidade onde cada pessoa é acolhida com amor e respeito, e onde a Palavra de Deus é central em tudo o que fazemos.
          Acreditamos que a igreja não é apenas um prédio, mas sim pessoas que vivem em comunhão com Deus e umas com as outras.
        </p>
      </section>

      <section className="px-6 max-w-3xl mx-auto">
        <VersiculoDoDia />
      </section>

      <section className="text-center mt-10">
        <div className="flex justify-center gap-4">
          <a href="https://youtube.com/@sejaigrejaoficial" target="_blank" rel="noreferrer" className="bg-red-600 px-4 py-2 rounded-lg text-white">YouTube</a>
          <a href="https://instagram.com/sejaigrejaoficial" target="_blank" rel="noreferrer" className="bg-pink-500 px-4 py-2 rounded-lg text-white">Instagram</a>
          <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noreferrer" className="bg-green-600 px-4 py-2 rounded-lg text-white">WhatsApp</a>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Artigos em Destaque</h2>
        <p className="text-gray-400">Artigos, reflexões e conteúdos especiais serão destacados aqui.</p>
      </section>

      <section id="agenda" className="py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Agenda Semanal</h2>
        <ul className="text-gray-300 text-center space-y-2">
          <li>Domingo: Culto às 19h</li>
          <li>Segunda: Reunião de oração às 20h</li>
          <li>Quarta: Estudo bíblico às 20h</li>
          <li>Sexta: Encontro de Jovens às 20h</li>
        </ul>
      </section>

      <section id="ministerios" className="py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Projetos e Ministérios</h2>
        <ul className="text-gray-300 text-center space-y-2">
          <li>Parece que foi Ontem</li>
          <li>Seja Homem</li>
          <li>Escola Bíblica Dominical (EBD)</li>
        </ul>
      </section>

      <section id="celulas" className="py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Células</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          As células são pequenos grupos que se reúnem nas casas com o propósito de comunhão, estudo da Bíblia e crescimento espiritual. Elas são a base do nosso relacionamento cristão fora das paredes da igreja. Participe de uma célula perto de você!
        </p>
      </section>

      <section id="contribua" className="py-16 px-6 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contribua</h2>
        <div className="text-gray-300 text-center">
          <p>Chave Pix: sejaigreja@pix.com.br</p>
          <p>Banco: Cora SCFI 403</p>
          <p>Agência: 0001</p>
          <p>Conta: 4942756-2</p>
          <p>CNPJ: 55.198.072/0001-87</p>
        </div>
      </section>

      <footer className="bg-black text-gray-500 text-center py-6 text-sm">
        <p>Política de Privacidade | Aviso de Gravações | Política de Divulgação de Imagens</p>
        <p className="mt-2">Todos os direitos reservados: Comunidade Evangélica - Seja Igreja | CNPJ: 55.198.072/0001-87</p>
      </footer>
    </div>
  );
}