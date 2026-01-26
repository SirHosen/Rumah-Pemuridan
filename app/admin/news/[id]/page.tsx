import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import EditForm from './edit-form'

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data: news } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single()

  if (!news) {
    notFound()
  }

  return <EditForm news={news} />
}
