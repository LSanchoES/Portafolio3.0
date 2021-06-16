import React from "react";
import { Form } from "react-bootstrap";

export const Contacto = () => {


	return (
		<>
			<div className="contacto__container" id="contacto">
					<h1>Contacto</h1>
				<div className="contacto__div">

					<Form action="https://formsubmit.co/lsanchoaragon@gmail.com"
						method="POST"
						className="contacto__form"
                        >
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Label>Introduce tu Email</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" name="email" />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Escribe aquí tu mensaje</Form.Label>
							<Form.Control as="textarea" rows={3} name="text" placeholder=" El éxito depende del esfuerzo (Sófocles) "/>
						</Form.Group>
                        <button type="submit" className="contacto__btn">Enviar</button>
					</Form>
				</div>
			</div>
		</>
	);
};
