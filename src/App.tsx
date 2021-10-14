import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {Routes} from './components/c2-pages/Routes/Routes';


export function App() {
    return (
        <div>
            <Header/>

            <Routes/>
        </div>
    )
}
