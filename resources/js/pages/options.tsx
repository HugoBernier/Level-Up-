import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Options() {
    return (
        <AppLayout>
            <Head title="Options" />
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h1 className="text-5xl font-extrabold mb-4 text-center w-full">Options</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">Paramétrez votre expérience sur Level Up.</p>
            </div>
        </AppLayout>
    );
} 