import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { InertiaPagination } from '@/components/ui/pagination';

interface ClassementProps {
    users: {
        data: Array<{
            id: number;
            name: string;
            level: { level_number: number } | null;
        }>;
        current_page: number;
        last_page: number;
        next_page_url: string | null;
        prev_page_url: string | null;
    };
}

export default function Classement({ users }: ClassementProps) {
    return (
        <AppLayout>
            <Head title="Classement" />
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h1 className="text-4xl font-bold mb-4">Classement</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Découvrez le classement des meilleurs joueurs !</p>
                <div className="w-full max-w-2xl">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">Nom</th>
                                <th className="px-4 py-2 text-left">Niveau</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.data.map((user) => (
                                <tr key={user.id} className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.level?.level_number ?? '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6 flex justify-center">
                        <InertiaPagination meta={users} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
} 