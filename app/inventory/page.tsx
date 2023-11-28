import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import Link from "next/link"

export default async function Inventory() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)


    const { data, error } = await supabase
        .from('articles')
        .select()
    console.log(data, error)
    return (
        <div className="flex flex-col gap-4">
            <nav>
                <ul className='flex gap-1'>
                    <li><Link
                        href="/articles"
                        className="py-2 px-3"
                    >Articles</Link></li>
                    <li><Link
                        href="/entrances"
                        className="py-2 px-3"
                    >Entrances</Link></li>
                    <li><Link
                        href="/Outputs"
                        className="py-2 px-3"
                    >Outputs</Link></li>
                </ul>
            </nav>
        </div>
    )
}