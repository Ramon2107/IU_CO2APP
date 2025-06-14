import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Content />
                <Footer />
            </div>
        </Router>
    );
}

export default App;