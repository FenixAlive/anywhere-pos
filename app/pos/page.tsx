import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'

export default async function Pos() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)


  const { data, error } = await supabase
    .from('articles')
    .select()
  console.log(data, error)
  return (
    <div className="flex flex-col items-center gap-4">
      <div className='flex items-center gap-2'>
        <input type="text" placeholder='Article' />
        <button className="px-4 py-2 border border-cyan-300 rounded">Add</button>
      </div>
      <div className='flex items-center gap-3'>
        <input type="text" placeholder='Article' disabled />
        <input type="text" placeholder='Description' disabled />
        <input type="text" placeholder='Quantity' />
        <input type="number" placeholder='Unit Price' />
        <input type="number" placeholder='discount' />
        <input type="text" disabled placeholder='Total' />
      </div>
      <div className='m-5'>
        <button className="px-4 py-2 border border-green-300 rounded">Send Sale</button>
      </div>
    </div>
  )
}
