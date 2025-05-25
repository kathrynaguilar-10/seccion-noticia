import React from 'react';
import './noticiasUMC.css';

// Importa las imágenes (asegúrate de tener estos archivos en tu proyecto)
import reglamento from './images/reglamento.jpg';
import doctum from './images/doctum.jpeg';
import faro from './images/faro.jpeg';
import manualidades from './images/Manuales.png';
import normativa from './images/normativa.jpeg';
import images from './images/images.jpeg';

const NoticiasUMC = () => {
  const noticias = [
    {
      titulo: "Reglamento UMC",
      subtitulo: "Reglas de la Universidad Maritima del Caribe",
      contenido: "",
      imagen: reglamento,  // Usa la variable importada
      items: [
        {
          tituloItem: "Click para saber más",
          enlace: "http://www.umc.edu.ve/reglamentos",
        }
      ]
    },
    {
      titulo: "Doctum UMC",
      subtitulo: "Revista Marítima Venezolana de Investigación y Postgrado.",
      contenido: "",
      imagen: doctum,  // Usa la variable importada
      items: [
        {
          tituloItem: "Click para saber más",
          enlace: "http://www.umc.edu.ve/doctum",
        }
      ]
    },
    {
      titulo: "Faro UMC",
      subtitulo: "Publicación periódica de la UMC, que aborda temas relacionados con la navegación, la vida marítima, la historia, la cultura y otros aspectos relevantes.",
      contenido: "",
      imagen: faro,  // Usa la variable importada
      items: [
        {
            tituloItem: "Click para saber más",
            enlace: "http://www.umc.edu.ve/faro",
        }
      ]
    },
    {
      titulo: "Manuales UMC",
      subtitulo: "Documentos internos de la Universidad Marítima del Caribe (UMC) que detallan normas, procedimientos, políticas, y estructura organizativa de la universidad.",
      contenido: "",
      imagen: manualidades,  // Usa la variable importada
      items: [
        {
            tituloItem: "Click para saber más",
            enlace: "",
        }
      ]
    },
    {
      titulo: "Normativa UMC",
      subtitulo: "Conjunto de reglas, reglamentos y normas que regulan el funcionamiento de la Universidad Marítima del Caribe (UMC).",
      contenido: "",
      imagen: normativa,  // Usa la variable importada
      items: [
        {
            tituloItem:"click para saber más",
            enlace:"http://www.umc.edu.ve/normativas",
        }
      ]
    },
    {
      titulo: "Gacetas Oficiales de la UMC",
      subtitulo: "Publicación oficial donde se publican los actos y documentos relevantes para la comunidad universitaria, incluyendo leyes, reglamentos, resoluciones y demás comunicados oficiales.",
      contenido: "",
      imagen: images,  // Usa la variable importada
      items: [
        {
            tituloItem:"Click para saber más",
            enlace:"http://www.umc.edu.ve/gacetas-universitarias",
        }
      ]
    }
  ];

  return (
    <div className="noticias-container">
      <h2>Noticias</h2>
      <div className="noticias-grid">
        {noticias.map((noticia, index) => (
          <div key={index} className="noticia-card">
            {noticia.imagen && (
              <div className="noticia-imagen-container">
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo} 
                  className="noticia-imagen"
                />
              </div>
            )}
            <div className="noticia-texto">
              <div className="noticia-header">
                <h3>{noticia.titulo}</h3>
                {noticia.subtitulo && <h4>{noticia.subtitulo}</h4>}
              </div>
              <div className="noticia-content">
                {noticia.contenido && <p>{noticia.contenido}</p>}
                {noticia.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="noticia-item">
                    <a 
                        href={item.enlace} 
                        target="_blank"          // Abre en nueva pestaña
                        rel="noopener noreferrer" // Seguridad recomendada
                        className="item-link"
                    >
                    <strong>{item.tituloItem}</strong>
                    </a>
                    <p>{item.fecha}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticiasUMC;