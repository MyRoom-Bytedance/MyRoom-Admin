import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routeConfig } from './route/route';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { FallbackLoading } from './components/FallbackLoading';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Index = () => {
    return <Suspense fallback={<FallbackLoading />}>{useRoutes(routeConfig)}</Suspense>;
};

// 使用ReactDOM.createRoot开启Fiber架构的Concurrent Mode
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <DndProvider backend={HTML5Backend}>
                        <Index />
                    </DndProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
