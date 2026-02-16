export default async function ISRPage() {
  const res = await fetch("http://localhost:3000/api/time", {
    next: { revalidate: 10 },
  });

  const data = await res.json();

  return (
    <div>
      <h1>ISR Page</h1>
      <p>{data.time}</p>
    </div>
  );
}
