import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Label, Transition } from '@headlessui/react';
import Selectbox from '@/Components/SelectBox';

export default function UserIndex({ auth}) {
    // const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation:"",
        role : "user",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('users.store'),{
            preserveScroll: true,
            onSuccess:()=>{
                alert('User Created');
            },
            onError:()=>{
                alert('Error');
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-3xl text-gray-800 dark:text-gray-200 leading-tight">Users</h2>}
        >
            <Head title="Users" />

            <div className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900  dark:text-gray-100">
                            <section className={"max-w-xl"}>
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Create User</h2>

                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Create New User
                                    </p>
                                </header>

                                    <form onSubmit={submit} className="mt-6 space-y-6">
                                        <div>
                                            <InputLabel htmlFor="name" value="Name" />

                                            <TextInput
                                                id="name"
                                                className="mt-1 block w-full"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                required
                                                isFocused
                                                autoComplete="name"
                                            />

                                            <InputError className="mt-2" message={errors.name} />
                                        </div>

                                        
                                        <div>
                                        <InputLabel htmlFor="email" value="Email" />

                                        <TextInput
                                            id="email"
                                            type="email"
                                            className="mt-1 block w-full"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            autoComplete="username"
                                        />

                                        <InputError className="mt-2" message={errors.email} />
                                    </div>
                                    <div>
                                            <Selectbox
                                                onChange={(e) =>
                                                    setData("role", e.target.value)
                                                }
                                                id ="role"
                                                currentValue={data.role}
                                                options={[
                                                    {
                                                        value : "admin",
                                                        label : "Admin",
                                                    },
                                                    {
                                                        value : "user",
                                                        label : "User",
                                                    },
                                                ]}
                                            />
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="password" value="Password" />

                                            <TextInput
                                                id="password"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                type="password"
                                                className="mt-1 block w-full"
                                                autoComplete="new-password"
                                            />

                                            <InputError message={errors.password} className="mt-2" />
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                            <TextInput
                                                id="password_confirmation"
                                                value={data.password_confirmation}
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                                type="password"
                                                className="mt-1 block w-full"
                                                autoComplete="new-password"
                                            />

                                            <InputError message={errors.password_confirmation} className="mt-2" />
                                        </div>

                                        <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>Save</PrimaryButton>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                                        </Transition>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
