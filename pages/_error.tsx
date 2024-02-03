import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface Props {
  err: Error;
}

function ErrorPage({ err }: Props) {
  return (
    <Alert severity='error'>
      <AlertTitle>Another error has occured</AlertTitle>
      {err && err.toString()}
    </Alert>
  );
}

ErrorPage.getInitialProps = ({ err }: Props) => {
  return { err };
};

export default ErrorPage;
