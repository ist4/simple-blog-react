import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { AdminImageCard } from './components/AdminImageCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Routes } from './routes';

const tabs = [
  { label: 'Home', link: '/' },
  { label: 'Login', link: '/login' },
  { label: 'Admin', link: '/app' },
];

const user = {
  name: 'John Doe',
  image: 'https://github.com/gusgalote.png',
};

export function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Navbar user={user} tabs={tabs} />
        <Routes />
        <Footer />
      </MantineProvider>
    </BrowserRouter>
  );
}
