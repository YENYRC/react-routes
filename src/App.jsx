import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./routes.jsx";

export default function App() {
return (
<BrowserRouter>
<Navbar />
<div style={{ padding: 16 }}>
<AppRoutes />
</div>
</BrowserRouter>
);
}