import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/page';
import LinksPage from './app/links/page';
import './app/globals.css';
import './app/polish.css';
document.body.style.setProperty('--portfolio-art',`url('${import.meta.env.BASE_URL}portfolio-architecture.png')`);
createRoot(document.getElementById('root')!).render(location.pathname.replace(/\/$/,'').endsWith('/links')?<LinksPage/>:<Home/>);
