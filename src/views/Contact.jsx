import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <Form className="text-center mt-5 p-4">
        <h2>Cuentanos, ¿en qué te podemos ayudar?</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="micorreo@happycake.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <button className="btn btn-success">Enviar</button>
      </Form>
    </>
  );
};

export default Contact;
