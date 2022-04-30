import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={`block py-2 pr-4 pl-3 text-block  rounded md:bg-transparent  md:p-0 dark:text-white ${
          match
            ? "bg-blue-700 text-white underline underline-offset-8 md:text-blue-700"
            : "bg-white md:text-black"
        }`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
