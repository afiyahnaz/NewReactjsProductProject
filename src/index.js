//entry file
//reactdom for web
//react nativedom for mobile development

import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter}  from 'react-router-dom';



ReactDOM.render(<BrowserRouter>
                        <App />
                </BrowserRouter>,document.getElementById('root'));