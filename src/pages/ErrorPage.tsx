import ErrorFallback from '@/components/ErrorFallback';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  const response = isRouteErrorResponse(error)
    ? {
        title: "Sorry, this page isn't available.",
        message:
          'The link you followed may be broken, or the page may have been removed.',
      }
    : {
        title: 'Oops! Something went wrong!',
        message: 'Please refresh this page or go back to the home page',
      };

  return (
    <div className="mx-auto my-5 h-fit w-fit text-center">
      <ErrorFallback title={response.title} message={response.message} />
    </div>
  );
};

export default ErrorPage;
