import { useEffect, useState } from "react";

export default function HistoricoSessoes() {
  const [sessoes, setSessoes] = useState<{ id: string; name: string; date: string }[]>([]);

  useEffect(() => {
    fetch("https://NOME-DO-BACKEND.onrender.com/api/list-sessions")
      .then((res) => res.json())
      .then((data) => setSessoes(data.sessoes || []));
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h2>📁 Sessões salvas</h2>
      {sessoes.map((s) => (
        <div key={s.id}>
          <strong>{s.name}</strong> — {new Date(s.date).toLocaleString()}
        </div>
      ))}
    </main>
  );
}

