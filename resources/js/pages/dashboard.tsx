import { QuestCard } from '@/components/ui/quest-card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { fakeQuests } from '@/__mocks__/fake-quests';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Mes Quêtes',
        href: '/dashboard',
    },
];

interface Quest {
    id: number;
    title: string;
    type?: string;
    description: string;
    xp_reward?: number;
    theme_id?: number;
    theme?: {
        id: number;
        name: string;
        description?: string;
    };
}

interface DashboardProps {
    quests?: Quest[];
}

export default function Dashboard({ quests }: DashboardProps) {
    // Utilise les fausses données si aucune quête n'est passée en props
    

    const handleStart = (questId: number) => {
        // À implémenter : logique pour démarrer la quête
        console.log(`Starting quest ${questId}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {quests.map((quest) => (
                        <QuestCard
                            key={quest.id}
                            title={quest.title}
                            type={quest.theme?.name || ''}
                            description={quest.description}
                            xp_reward={quest.xp_reward}
                            onStart={() => handleStart(quest.id)}
                        />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
