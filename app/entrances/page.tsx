import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export default async function Entrances() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)


    const { data, error } = await supabase
        .from('articles')
        .select()
    console.log(data, error)
    return (
        <div className="flex flex-col gap-4">
            <input type="text" placeholder='Type' />
            <input type="text" placeholder='Quantity' />
            <input type="number" placeholder='Unit Price' />
            <input type="number" placeholder='discount' />
            <input type="text" disabled placeholder='Total' />
        </div>
    )
}