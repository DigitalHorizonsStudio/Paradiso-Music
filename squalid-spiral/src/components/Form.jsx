import React, { useState } from 'react';

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier acción con los datos del formulario, como enviarlos a un servidor
    console.log(formData);
  };

  return (
    <div>
        
      <form onSubmit={handleSubmit} className=" px-8" style={{width: '25rem'}}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="font-medium text-gray-700 mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="font-medium text-gray-700 mb-2">Correo electrónico</label>
          <input
            type="email"
            id="email"
            className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phone" className="font-medium text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            id="phone"
            className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="service" className="font-medium text-gray-700 mb-2">Servicio</label>
          <select
            id="service"
            className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Selecciona un servicio</option>
            <option value="staging">Staging</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="video">Video</option>
            <option value="iluminacion">Iluminación</option>
            <option value="alquiler-equipos">Alquiler de equipos</option>
            <option value="sonido-en-vivo">Sonido en vivo</option>
          </select>
        </div>
        <button type="submit" className="w-full h-12 px-4 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700">Solicitar más información</button>
      </form>
    </div>
  );
};
