import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ to, children, className, onClick }: NavLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const isHomepage = location.pathname === "/";
    const isHashLink = to.startsWith("/#");

    if (isHomepage && isHashLink) {
      const targetId = to.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${targetId}`);
      }
    } else if (isHashLink) {
      navigate(`/?scrollTo=${to.substring(2)}`);
    } else {
      navigate(to);
    }

    if (onClick) {
      onClick();
    }
  }, [location.pathname, to, navigate, onClick]);

  return (
    <a 
      href={to} 
      onClick={handleNavigate} 
      className={className}
    >
      {children}
    </a>
  );
};

export default NavLink;
