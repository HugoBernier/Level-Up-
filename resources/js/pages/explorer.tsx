import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Explorer() {
    return (
        <AppLayout>
            <Head title="Explorer" />
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h1 className="text-5xl font-extrabold mb-4 text-center w-full">Explorer</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">Bienvenue sur la page Explorer !</p>
            </div>
        </AppLayout>
    );
} 