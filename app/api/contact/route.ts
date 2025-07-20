import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const { error } = await supabase.from('contact_forms').insert([{ name, email, message }]);

  if (error) {
    console.error('Error saving form:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
