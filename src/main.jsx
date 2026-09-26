import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Only panels scroll in the interactive app. Do not restore the outer document
// position from a previous visit or from the static HTML fallback.
window.history.scrollRestoration = 'manual';
document.documentElement.classList.add('app-mounted');
window.scrollTo(0, 0);

createRoot(document.getElementById('root')).render(<App />);
