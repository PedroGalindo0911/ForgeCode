import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si todos los campos están llenos
    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Limpiar mensaje de error
    setError('');

    // Enviar el correo
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_xxxxxxx', 'template_xxxxxxx', templateParams, 'user_xxxxxxxxxx')
      .then(
        (response) => {
          console.log('Correo enviado', response);
          alert('Formulario enviado correctamente');
        },
        (error) => {
          console.error('Error al enviar el correo', error);
          alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
        }
      );

    // Limpiar formulario
    setFormData({ name: '', email: '', message: '' });
  };

  // Inicializar AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="py-16 bg-white text-[#73081A]" >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center" data-aos="fade-up">
        {/* Formulario y su título */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:mr-8 text-center lg:text-center">
          <h2 className="text-3xl font-bold text-[#EB6239]">Contacto</h2>
          <p className="mt-4 text-lg text-[#73081A]">Conoce más sobre nuestras soluciones personalizadas.</p>

          {/* Mostrar error si falta completar algún campo */}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          <form className="mt-8 mx-auto w-xl max-w-xs lg:max-w-md" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-2 border-2 border-[#EB6239] bg-[#F5F5F5] text-[#73081A]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-2 border-2 border-[#EB6239] bg-[#F5F5F5] text-[#73081A]"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              className="w-full mb-4 p-2 border-2 border-[#EB6239] bg-[#F5F5F5] text-[#73081A]"
            />
            <button type="submit" className="bg-[#EB6239] hover:bg-[#73081A] text-white py-2 px-4 w-full">
              Enviar
            </button>
          </form>
        </div>

        {/* Redes sociales */}
        <div className="w-full lg:w-1/2 text-center">
          <h3 className="text-2xl font-bold text-[#EB6239]">Síguenos en nuestras redes sociales</h3>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between mt-4 space-y-4 lg:space-y-0 lg:space-x-6">
            <a href="https://www.facebook.com/forgecodegt?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="flex items-center mx-auto lg:mx-0">
              <FontAwesomeIcon icon={faFacebook} className="text-[#EB6239] text-3xl hover:text-[#D85F31] mr-2" />
              <span>ForgeCode Guatemala</span>
            </a>
            <a href="https://www.instagram.com/forgecode.gt?igsh=MXE1NjN6MHV1Y3BmNQ==" target="_blank" rel="noopener noreferrer" className="flex items-center mx-auto lg:mx-0">
              <FontAwesomeIcon icon={faInstagram} className="text-[#EB6239] text-3xl hover:text-[#D85F31] mr-2" />
              <span>@forgecode.gt</span>
            </a>
            <a href="https://wa.me/+50255555555" target="_blank" rel="noopener noreferrer" className="flex items-center mx-auto lg:mx-0">
              <FontAwesomeIcon icon={faWhatsapp} className="text-[#EB6239] text-3xl hover:text-[#D85F31] mr-2" />
              <span>+502 5555-555</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
