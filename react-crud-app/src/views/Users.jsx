import { useEffect, useState } from "react";
import api from "../api";
import {
    List as ListIcon,
    Trash2 as TrashIcon,
    Edit3 as EditIcon,
} from "react-feather";
import { Link } from "react-router-dom";

export default function Users() {
    const [usersData, setUsersData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        api.get("/users").then(
            ({ data }) => {
                setUsersData(data);
                setIsLoading(false);
            },
            () => setIsLoading(false)
        );
    }, []);

    const users = usersData?.data || [];
    return (
        <>
            <p className="text-xl pb-3 flex items-center">
                <ListIcon className="mr-3" />
                Users List
            </p>
            <div className="bg-white overflow-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                ID
                            </th>
                            <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                                Name
                            </th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                                Email
                            </th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                Created at
                            </th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {isLoading && (
                        <tbody>
                            <tr>
                                <td colSpan={5}>Loading...</td>
                            </tr>
                        </tbody>
                    )}
                    {!isLoading && (
                        <tbody className="text-gray-700">
                            {users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td className="text-left py-3 px-4">
                                            {user.id}
                                        </td>
                                        <td className="w-1/4 text-left py-3 px-4">
                                            {user.name}
                                        </td>
                                        <td className="w-1/3 text-left py-3 px-4">
                                            {user.email}
                                        </td>
                                        <td className="text-left py-3 px-4">
                                            {user.created_at}
                                        </td>
                                        <td className="text-left py-3 px-4 text-center flex">
                                            <Link
                                                to={`/users/${user.id}`}
                                                className="mr-3"
                                            >
                                                <EditIcon />
                                            </Link>
                                            <button>
                                                <TrashIcon />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    )}
                </table>
            </div>
        </>
    );
}
