import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-4">Oops!</h1>
    <p className="text-lg text-gray-800 mb-2">Sorry, an unexpected error has occurred.</p>
    <p className="italic text-gray-600">
        <i>{error.status} {error.statusText || error.message}</i>
    </p>
    </div>

  );
}