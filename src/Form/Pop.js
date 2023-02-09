import Toast from 'react-bootstrap/Toast';

function Pop(props) {
  return (
    <>
        <Toast>
      <Toast.Body>{props.getPop}</Toast.Body>
    </Toast>
    </>
  );
}

export default Pop;