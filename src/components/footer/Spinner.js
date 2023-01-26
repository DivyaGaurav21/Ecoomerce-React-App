import Spinner from 'react-bootstrap/Spinner';

function LoadSpinner() {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h3 className='text-danger'>Loading..</h3>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary"/>
            <Spinner animation="border" variant="success" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
        </div>
    );
}

export default LoadSpinner;