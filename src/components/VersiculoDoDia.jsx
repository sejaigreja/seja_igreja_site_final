import { useEffect, useState } from 'react';

export default function VersiculoDoDia() {
  const [versiculo, setVersiculo] = useState(null);

  useEffect(() => {
    fetch('https://www.abibliadigital.com.br/api/verses/nvi/random')
      .then(res => res.json())
      .then(data => setVersiculo(data.text))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#6861ec] to-[#2684eb] text-white p-4 rounded-xl shadow-lg my-6">
      <h2 className="text-xl font-bold mb-2">Versículo do Dia</h2>
      <p className="italic">{versiculo || 'Carregando...'}</p>
    </div>
  );
}