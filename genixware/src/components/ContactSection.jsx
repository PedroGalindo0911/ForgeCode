import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`py-16 bg-gray-100 text-purple-800 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Formulario y su título */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:mr-8 text-center lg:text-center">
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="mt-4 text-lg text-gray-600">Conoce más sobre nuestras soluciones personalizadas.</p>
          <form className="mt-8 mx-auto w-xl max-w-xs lg:max-w-md " onSubmit={handleSubmit}>
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
        </div>

        {/* Redes sociales */}
        <div className="w-full lg:w-1/2 text-center">
          <h3 className="text-2xl font-bold">Síguenos en nuestras redes sociales</h3>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between mt-4 space-y-4 lg:space-y-0 lg:space-x-6">
            <a href="https://www.facebook.com/genixwaregt?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="flex items-center mx-auto lg:mx-0">
              <FontAwesomeIcon icon={faFacebook} className="text-purple-600 text-3xl hover:text-purple-500 mr-2" />
              <span>Genixware Guatemala</span>
            </a>
            <a href="https://www.instagram.com/genixware_?igsh=MXE1NjN6MHV1Y3BmNQ==" target="_blank" rel="noopener noreferrer" className="flex items-center mx-auto lg:mx-0">
              <FontAwesomeIcon icon={faInstagram} className="text-purple-600 text-3xl hover:text-purple-500 mr-2" />
              <span>@genixware_</span>
            </a>
            <a href="https://wa.me/+50255908153" target="_blank" rel="noopener noreferrer" className="flex items-center mx-auto lg:mx-0">
              <FontAwesomeIcon icon={faWhatsapp} className="text-purple-600 text-3xl hover:text-purple-500 mr-2" />
              <span>+502 5590-8153</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
