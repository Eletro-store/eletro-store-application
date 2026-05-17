import { Outlet } from "react-router-dom"

export const Main = () => {
    return (
        <main className="flex flex-1 w-full pt-36">
            <Outlet />
        </main>
    )
}