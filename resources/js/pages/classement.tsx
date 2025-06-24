import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Classement() {
    return (
        <AppLayout>
            <Head title="Classement" />
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h1 className="text-5xl font-extrabold mb-4 text-center w-full">Classement</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">Découvrez le classement des meilleurs joueurs !</p>
            </div>
        </AppLayout>
    );
} 