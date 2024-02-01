import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import SpanError from "../components/SpanError";
import { toast } from "react-hot-toast";

export default function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (id) {
            api.put(`/users/${user.id}`, user)
                .then(() => {
                    toast.success(`User ${user.id} was edited.`);
                    navigate("/users");
                })
                .catch((err) => {
                    const response = err.response;
                    setErrors(response.data.errors);
                    if (response && response.status === 441) {
                        console.error(response.data.errors);
                    }
                });
        } else {
            api.post(`/users`, user)
                .then(() => {
                    toast.success(`User ${user.name} was created.`);
                    navigate("/users");
                })
                .catch((err) => {
                    const response = err.response;
                    setErrors(response.data.errors);
                    if (response && response.status === 441) {
                        console.error(response.data.errors);
                    }
                });
        }
    };

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            api.get(`/users/${id}`).then(
                ({ data }) => {
                    setUser(data);
                    setIsLoading(false);
                },
                () => setIsLoading(false)
            );
        }
    }, [id]);

    if (isLoading) {
        return "Loading...";
    }

    return (
        <div className="w-full sm:max-w-xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    {!id ? "Create new user" : `Edit user: ${id}`}
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label
                            htmlFor="fullname"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            value={user["name"]}
                            onChange={({ target }) =>
                                setUser({ ...user, name: target.value })
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                        <SpanError text={errors?.["name"]} />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={user["email"]}
                            onChange={({ target }) =>
                                setUser({ ...user, email: target.value })
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                        <SpanError text={errors?.["email"]} />{" "}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={user["password"]}
                            onChange={({ target }) =>
                                setUser({ ...user, password: target.value })
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="confirmpassword"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password confirmation
                        </label>
                        <input
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            value={user["password_confirmation"]}
                            onChange={({ target }) =>
                                setUser({
                                    ...user,
                                    password_confirmation: target.value,
                                })
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                        <SpanError text={errors?.["password"]} />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
