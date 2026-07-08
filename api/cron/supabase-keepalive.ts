const json = (body: Record<string, unknown>, status = 200) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return json({ ok: false, error: "Cron secret is not configured." }, 503);
  }

  if (request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return json({ ok: false, error: "Unauthorized." }, 401);
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return json({ ok: false, error: "Supabase environment variables are missing." }, 503);
  }

  const endpoint = new URL("/rest/v1/contact_messages", supabaseUrl);
  endpoint.searchParams.set("select", "id");
  endpoint.searchParams.set("limit", "1");

  const querySupabase = () =>
    fetch(endpoint, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Accept: "application/json",
      },
      cache: "no-store",
    });

  try {
    const responses = await Promise.all([querySupabase(), querySupabase(), querySupabase()]);
    const failedResponse = responses.find((response) => !response.ok);

    if (failedResponse) {
      return json({ ok: false, error: "Supabase keepalive query failed.", status: failedResponse.status }, 502);
    }

    return json({ ok: true, checks: responses.length, checkedAt: new Date().toISOString() });
  } catch {
    return json({ ok: false, error: "Supabase could not be reached." }, 502);
  }
}
