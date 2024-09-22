import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
      <p className="mt-4 text-lg text-gray-600 text-center">Conoce más sobre nuestras soluciones personalizadas.</p>
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
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold">Síguenos en nuestras redes sociales</h3>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FontAwesomeIcon icon={faFacebook} className="text-purple-600 text-3xl hover:text-purple-500 mr-2" />
            <span>Genixware Guatemala</span>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FontAwesomeIcon icon={faInstagram} className="text-purple-600 text-3xl hover:text-purple-500 mr-2" />
            <span>@Genixware.gt</span>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-purple-600 text-3xl hover:text-purple-500 mr-2" />
            <span>+502 5590-8153</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
