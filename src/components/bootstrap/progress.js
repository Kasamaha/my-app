import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicProgress(prop) {
    const{scale}=prop;
  return <ProgressBar now={scale} />;
}

export default BasicProgress;