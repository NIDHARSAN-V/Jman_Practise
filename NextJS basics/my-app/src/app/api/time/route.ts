export async function GET() {
    const now = new Date().toISOString();
    return new Response(JSON.stringify({ time: now }), {
        headers: { "content-type": "application/json" },
    });
}
