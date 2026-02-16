export default async function SSGPage() {
  const res = await fetch("http://localhost:3000/api/time");

  const data = await res.json();

  return (
    <div>
      <h1>SSG Page</h1>
      <p>{data.time}</p>
    </div>
  );
}
