import './navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="site-title">Boards</Link>
            <ul>
                <CustomLink to="/register">Register</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/settings">Settings</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}