import { useRouteError } from "react-router-dom";
// MEMBUAT PAGE EROR

const ErrorPage = () => {
    const error = useRouteError();
   
    return (
        <div className="text-center font-bold flex flex-col justify-center min-h-screen items-center">
            <h1 className="text-9xl">GUOOBLOG</h1>
            <p>EWEUHHH ARI SIAAAAAA</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage