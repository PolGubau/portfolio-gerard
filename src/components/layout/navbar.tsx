import { Link } from "react-router-dom";
import { user } from "../../config/data";
import { buttonVariants, cn } from "pol-ui";
const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 flex justify-center z-50 gap-2 p-3 header items-center">
      {user.links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "bg-secondary-50"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
