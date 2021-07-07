import React from "react";

export const Sobremi = () => {
	return (
		<div className="sobre__container" id="sobremi">

				<div className="sobre__image-col">
					<img
						alt="Lorenzo Sancho"
						className="sobre__imagen"
						src="https://res.cloudinary.com/lsancho-es/image/upload/v1620311301/nddzhijozpbchk6zuici.png"
					/>

					<div className="sobre__ico-col">
						<a
							href="https://www.linkedin.com/in/lsanchoaragon/"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<i className="sobre__ico fab fa-linkedin"></i>{" "}
						</a>
						<a href="https://github.com/LSanchoES" target="_blank" rel="noreferrer">
							{" "}
							<i className="sobre__ico fab fa-github-square"></i>{" "}
						</a>
						<a
							href="https://www.instagram.com/vristok/"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<i className="sobre__ico fab fa-instagram-square"></i>{" "}
						</a>
					</div>
				</div>

				<div className="sobre__texto">
					<p>
						<em>Era sé una vez un hombre pegado a un ordenador...</em> desde muy
						pequeño me ha encantado el mundo de la informática; cuando no existía
						Windows yo ya jugaba a Prince of Persia ejecutando desde MS-DOS los
						míticos floppy disk.
					</p>

		
					<p>
						Me gusta estar en constante
						aprendizaje, en mi adolescencia me dediqué a trastear con todo tipo de
						herramientas para el soporte técnico, la seguridad informática y el
						protocolo MIDI.
					</p>
		
					<p>
						Entré a la <b>Universidad Complutense de Madrid</b> para hacer la carrera
						de magisterio ya que siempre me ha encantado la enseñanza. Tras terminar
						la carrera mientras empecé a impartir clases particulares de música y a estudiar 
                        más a fondo el mundo de la tecnología, entrando de lleno en el broadcasting y
                        la producción de contenido tanto video como audio.
					</p>
		

					<p>
						Después de haber trabajado como <i>soporte técnico y webmaster</i> me
						decidí por aprender más a fondo sobre programación y cyber-seguridad y
						actualmente sigo estudiando y aprendiendo en este vertiginoso mundo de la
						tecnología digital.
					</p>

		
					<p>
						Tengo gran presencia en internet bajo el pseudónimo de "Vristok" el cual es
						mi nombre artístico como creador de contenido digital, aunque tengo
						experiencia con la edición de video, mi pasión por los directos me ha
						hecho crecer mucho en plataformas como Twitch.tv , Nimo.tv y algunas otras
						web app de streaming, acumulando más de 20.000 seguidores entre todas
						ellas.
					</p>
				</div>
		</div>
	);
};
