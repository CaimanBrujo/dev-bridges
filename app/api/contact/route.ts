import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client with service_role key (server-side only)
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Validate incoming data
    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase.from('contact_forms').insert([
      {
        name: payload.name,
        email: payload.email,
        message: payload.message,
      },
    ]);

    if (error) {
      console.error('Supabase insert error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
    }

    console.log('Form submitted successfully:', data);

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 },
    );
  } catch (err) {
    console.error('Unexpected server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
