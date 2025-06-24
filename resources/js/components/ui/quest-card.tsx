import { Button } from './button';

interface QuestCardProps {
    title: string;
    type: string;
    description: string;
    xp_reward?: number;
    onStart: () => void;
}

export function QuestCard({ title, type, description, xp_reward, onStart }: QuestCardProps) {
    return (
        <div className="flex flex-col h-[300px] p-6 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white dark:bg-neutral-900">
            <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                        {title}
                        {xp_reward !== undefined && (
                            <span className="ml-2 text-xs font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900 px-2 py-0.5 rounded-full">
                                +{xp_reward} XP
                            </span>
                        )}
                    </h3>
                    <span className="shrink-0 text-sm px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
                        {type}
                    </span>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-4 text-center">
                        {description}
                    </p>
                </div>
            </div>
            <div className="pt-4 mt-auto border-t border-neutral-200 dark:border-neutral-800">
                <Button onClick={onStart} className="w-full">
                    Commencer
                </Button>
            </div>
        </div>
    );
} 