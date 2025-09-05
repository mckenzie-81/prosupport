import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ to, children, className, onClick }: NavLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isHomepage = location.pathname === "/";
    const isHashLink = to.startsWith("/#");

    if (isHomepage && isHashLink) {
      e.preventDefault();
      const targetId = to.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${targetId}`);
      }
    } else if (isHashLink) {
      e.preventDefault();
      navigate(`/?scrollTo=${to.substring(2)}`);
    } else {
        navigate(to)
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={to} onClick={handleNavigate} className={className}>
      {children}
    </a>
  );
};

export default NavLink;
