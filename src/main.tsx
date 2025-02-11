import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from "react-router"
import PollingResultsPage from './Page/PollingResultsPage.tsx';
import LgaResults from './Page/LgaResults.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="polling_unit_results/:pollingUnitId" element={<PollingResultsPage />} />
          <Route path="lga-results/:lgaId" element={<LgaResults />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>


  </StrictMode>,
)
