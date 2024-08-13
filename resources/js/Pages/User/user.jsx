
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function UserIndex({ auth, users}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-3xl text-gray-800 dark:text-gray-200 leading-tight">Users</h2>}
        >
            <Head title="Users" />

            <div className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                     <div className='flex justify-between items-center mb-3'>
                            <label className='bold'> Total user : {users.total}</label>
                            <Link 
                                href = {route("users.create")}
                                className = "bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            >Create User</Link>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900  dark:text-gray-100">
                                <table className='min-w-full'>
                                    <thead>
                                        <tr className='border-b-2' >
                                            <th className='px-6 py-3 text-left text-lg font-medium text-black'>
                                                ID
                                            </th>
                                            <th className='px-6 py-3 text-left text-lg font-medium text-black'>
                                                Name
                                            </th>
                                            <th className='px-6 py-3 text-left text-lg font-medium text-black'>
                                                Email
                                            </th>
                                            <th className='px-6 py-3 text-left text-lg font-medium text-black'>
                                                Role
                                            </th>
                                            <th className='px-6 py-3 text-left text-lg font-medium text-black'>
                                                Edit
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) =>(
                                            <tr key={user.id} className='border-b'>
                                                <td className='px-6 py-4 whitespace-nowrap'>
                                                    {user.id}
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap'>
                                                    {user.name}
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap'>
                                                    {user.email}
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap'>
                                                    {user.role};
                                                </td>
                                                <td className='px-6 py-4 whitespace-nowrap'>
                                                    <Link
                                                        className= 'inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150'
                                                        href={route(
                                                            "users.edit",
                                                            "user.id"
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
