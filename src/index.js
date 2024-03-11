import { setRootEl, setRoutes, onURLChange } from './router.js';
import { homeContent } from 'Home.js';
import { renderFooter } from './components/footer/index.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const footer = document.querySelector("footer");
   footer.appendChild (renderFooter());
   renderFooter();

    setRootEl(root);

    
    setRoutes({
        '/': homeContent
        
    });

    
    onURLChange();
});