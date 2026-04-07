// src/components/layout/AppLayout.tsx
import { Outlet } from 'react-router-dom';
// import Sidebar from '@/components/common/Sidebar';
// import Header from '@/components/common/Header';

export default function AppLayout() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
            {/*<Sidebar />*/}
            this is sidebar
            <div className="flex-1 flex flex-col overflow-hidden">
                {/*<Header />*/}
                <main className="flex-1 overflow-auto p-6">
                    <Outlet />   {/* Bu yerda yuqoridagi children sahifalar chiqadi */}
                </main>
            </div>
        </div>
    );
}