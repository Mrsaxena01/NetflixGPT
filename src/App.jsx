import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Browse from './components/Browse';
import Body from './components/Body';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/browse" element={<Browse />} />
            </Routes>
            <Toaster position="top-center" />
        </BrowserRouter>
    );
};

export default App;
