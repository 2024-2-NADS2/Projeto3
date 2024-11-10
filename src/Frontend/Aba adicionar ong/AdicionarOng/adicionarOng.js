import React, { useState } from 'react';
import './adicionarOng.css';

function AdicionarOng() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    estado: '',
    horario: '',
    cnpj: '',
    email: '',
    telefone: ''
  });

  const [errors, setErrors] = useState({});

  const estados = [
    "Acre (AC)", "Alagoas (AL)", "Amapá (AP)", "Amazonas (AM)", "Bahia (BA)",
    "Ceará (CE)", "Distrito Federal (DF)", "Espírito Santo (ES)", "Goiás (GO)",
    "Maranhão (MA)", "Mato Grosso (MT)", "Mato Grosso do Sul (MS)", "Minas Gerais (MG)",
    "Pará (PA)", "Paraíba (PB)", "Paraná (PR)", "Pernambuco (PE)", "Piauí (PI)",
    "Rio de Janeiro (RJ)", "Rio Grande do Norte (RN)", "Rio Grande do Sul (RS)",
    "Rondônia (RO)", "Roraima (RR)", "Santa Catarina (SC)", "São Paulo (SP)",
    "Sergipe (SE)", "Tocantins (TO)"
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(formData.nome)) {
      newErrors.nome = "Nome inválido. Apenas letras e espaços são permitidos.";
    }

    if (formData.endereco.trim() === "") {
      newErrors.endereco = "O endereço não pode estar vazio.";
    }

    if (formData.estado === "") {
      newErrors.estado = "Selecione um estado.";
    }

    if (!/^\d{2}:\d{2}\s-\s\d{2}:\d{2}$/.test(formData.horario)) {
      newErrors.horario = "Horário de funcionamento inválido. Use o formato HH:MM - HH:MM.";
    }

    const cnpj = formData.cnpj.replace(/[^\d]/g, '');
    if (cnpj.length !== 14) {
      newErrors.cnpj = "CNPJ inválido. Deve conter 14 dígitos.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }

    const telefone = formData.telefone.replace(/[^\d]/g, '');
    if (telefone.length < 10 || telefone.length > 11) {
      newErrors.telefone = "Telefone inválido. Deve ter 10 ou 11 dígitos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Cadastro realizado com sucesso!");
      // Lógica para enviar os dados (requisição HTTP)
    }
  };

  return (
    <div className="adicionar-ong">
      <h1 className="title">Cadastre sua ONG e faça parte da rede solidária!</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div>
              <label>Nome:</label>
              <input type="text" id="nome" value={formData.nome} onChange={handleInputChange} />
              {errors.nome && <div className="error-message">{errors.nome}</div>}
            </div>

            <div>
              <label>Endereço:</label>
              <input type="text" id="endereco" value={formData.endereco} onChange={handleInputChange} />
              {errors.endereco && <div className="error-message">{errors.endereco}</div>}
            </div>
          </div>

          <div className="input-row">
            <div>
              <label>Estado:</label>
              <select id="estado" value={formData.estado} onChange={handleInputChange}>
                <option value="">Selecione o Estado</option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>{estado}</option>
                ))}
              </select>
              {errors.estado && <div className="error-message">{errors.estado}</div>}
            </div>

            <div>
              <label>Horário de Funcionamento:</label>
              <input type="text" id="horario" placeholder="09:00 - 18:00" value={formData.horario} onChange={handleInputChange} />
              {errors.horario && <div className="error-message">{errors.horario}</div>}
            </div>
          </div>

          <label>CNPJ:</label>
          <input type="text" id="cnpj" value={formData.cnpj} onChange={handleInputChange} />
          {errors.cnpj && <div className="error-message">{errors.cnpj}</div>}

          <label>E-mail:</label>
          <input type="email" id="email" value={formData.email} onChange={handleInputChange} />
          {errors.email && <div className="error-message">{errors.email}</div>}

          <label>Telefone:</label>
          <input type="text" id="telefone" value={formData.telefone} onChange={handleInputChange} />
          {errors.telefone && <div className="error-message">{errors.telefone}</div>}

          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
}

export default AdicionarOng;
