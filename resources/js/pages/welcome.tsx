import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col bg-background text-secondary dark:bg-background-dark dark:text-secondary-dark">
                {/* Header */}
                <header className="w-full px-6 pt-6 text-sm lg:px-8">
                    <div className="mx-auto mb-6 flex max-w-[335px] items-center justify-between lg:max-w-4xl">
                        <div className="flex items-center gap-2">
                            <img src="/level-up.svg" alt="level up !" className="h-6 w-auto" />
                            <span className="inline-block text-sm">Level Up !</span>
                        </div>
                    </div>
                </header>

                {/* Main */}
                <main className="flex grow items-center justify-center px-6 lg:px-8">
                    <div className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row lg:items-center lg:justify-between">
                        <img
                            src="/level-up.svg"
                            alt="Illustration Level Up"
                            className="w-full max-w-xs lg:max-w-md"
                        />
                        <div className="text-center lg:ml-12 lg:text-left">
                            <h1 className="mb-6 text-3xl font-semibold">
                                Commencez dès maintenant à <br />
                                <span className="text-primary dark:text-primary-light">Level Up !</span> votre vie
                            </h1>

                            <div className="flex flex-col items-center gap-3 lg:items-start">
                                <Link
                                    href={route('login')}
                                    className="w-full max-w-xs rounded-md bg-primary px-5 py-2 text-center text-sm font-medium text-white shadow-sm transition hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary"
                                >
                                    Se connecter
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="w-full max-w-xs rounded-md border border-primary px-5 py-2 text-center text-sm font-medium text-primary transition hover:bg-primary/10 dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light/10"
                                >
                                    Créer un compte
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="h-28 w-full bg-footer dark:bg-footer-dark"></footer>
            </div>
        </>
    );
}
