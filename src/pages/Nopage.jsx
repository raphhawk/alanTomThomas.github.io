import { Link, Outlet } from "react-router-dom";

export const Nopage = () => {
  return (
    <>
      <div className="m-20 flex flex-col">
        <h1 className="text-4xl">Opps! the Page doesn't exist</h1>
        <Link to="/" className="mt-20 w-80 hover:underline text-2xl">
          Back to Home Page
        </Link>
      </div>
      <Outlet />
    </>
  );
};
