import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-purple-800">
      <h2 className="text-3xl font-bold text-center">Contacto</h2>
      <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border-2 border-purple-600 bg-white text-purple-800"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border-2 border-purple-600 bg-white text-purple-800"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 p-2 border-2 border-purple-600 bg-white text-purple-800"
        />
        <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 w-full">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
