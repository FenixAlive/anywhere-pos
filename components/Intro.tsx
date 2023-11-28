import Login from "@/app/login/page";
import Link from "next/link";

export default async function Dashboard() {
    return (
        <div className="flex-col items-center gap-4">
            <h2 className="mb-4"> Welcome to Anywhere Pos</h2>
            <Login />
        </div>
    )
}