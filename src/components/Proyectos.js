import React from "react";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import slides from "./ProyectosAdd";


export const Proyectos = () => {

  
	return (
		<div className="proyect__container" id="proyect">

					<h1>Proyectos</h1>

			<div className="proyect__row-carousel">
        <Carousel
          plugins={[
            'infinite',
            'arrows',
            'centered',    
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 3
              }
            },

          ]}
          breakpoints={{
            640: {
              plugins: [
                'infinite',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 1
                 }
               },
             ]
            },
            900: {
              plugins: [
                'infinite',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 2
                 }
               },
             ]
            }
          }}
        
          animationSpeed={400}

          slides={slides}
        /> 
        
        
			</div>
		</div>
	);
};
