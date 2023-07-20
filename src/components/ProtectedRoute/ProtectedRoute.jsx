import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ element: Component, ...props }) {
	return props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace />;
}

export function ProtectedLoginRoute({ element: Component, ...props }) {
	return !props.loggedIn ? <Component {...props} /> : <Navigate to="/" />;
}
