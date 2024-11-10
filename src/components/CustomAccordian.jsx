import Accordion from 'react-bootstrap/Accordion';

function CustomAccordian(props) {
    return (
        <Accordion className='my-accordion'>
          <Accordion.Item eventKey={props.id}>
            <Accordion.Header>{props.heading}</Accordion.Header>
            <Accordion.Body>
              {props.children}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    );
}

export default CustomAccordian;