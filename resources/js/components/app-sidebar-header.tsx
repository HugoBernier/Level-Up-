import { SidebarTrigger } from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export function AppSidebarHeader() {
    const page = usePage<SharedData>();
    // On simule le streak à 7 si non présent
    const streak = page.props.auth?.user?.streak ?? 7;

    return (
        <div className="flex h-16 items-center px-6 md:px-4 justify-between">
            <SidebarTrigger className="ml-0" />
            <div className="flex items-center bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full px-4 py-1.5 font-bold text-lg shadow border border-yellow-300 dark:border-yellow-700">
                <span className="text-xl mr-2">🔥</span> Streak : <span className="ml-2 text-xl font-extrabold">{streak}</span>
            </div>
        </div>
    );
}
