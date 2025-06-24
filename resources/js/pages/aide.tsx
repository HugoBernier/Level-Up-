import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Aide() {
    return (
        <AppLayout>
            <Head title="Aide" />
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h1 className="text-5xl font-extrabold mb-4 text-center w-full">Aide</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">Besoin d'aide ? Retrouvez ici toutes les informations utiles.</p>
            </div>
        </AppLayout>
    );
} 