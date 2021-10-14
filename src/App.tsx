import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {Routes} from './pages/Routes/Routes';


export function App() {
    return (
        <div>
            <Header/>

            <Routes/>
        </div>
    )
}
