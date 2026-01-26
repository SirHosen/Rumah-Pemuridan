'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

export async function createNews(formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const excerpt = formData.get('excerpt') as string
  const published = formData.get('published') === 'true'

  const slug = generateSlug(title)

  const { error } = await supabase
    .from('news')
    .insert({
      title,
      slug,
      content,
      excerpt,
      published,
      published_at: published ? new Date().toISOString() : null,
    })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/')
  revalidatePath('/news')
  redirect('/admin')
}

export async function updateNews(id: string, formData: FormData) {
  const supabase = await createClient()
  
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const excerpt = formData.get('excerpt') as string
  const published = formData.get('published') === 'true'
  const wasPublished = formData.get('wasPublished') === 'true'

  const slug = generateSlug(title)

  const updateData: any = {
    title,
    slug,
    content,
    excerpt,
    published,
  }

  // Set published_at when publishing for the first time
  if (published && !wasPublished) {
    updateData.published_at = new Date().toISOString()
  }

  const { error } = await supabase
    .from('news')
    .update(updateData)
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/')
  revalidatePath('/news')
  revalidatePath(`/news/${slug}`)
  redirect('/admin')
}

export async function deleteNews(id: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('news')
    .delete()
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/')
  revalidatePath('/news')
  redirect('/admin')
}
