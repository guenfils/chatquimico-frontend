import { useState } from "react";

export default function ChatQuimico() {
  const [smiles, setSmiles] = useState("");
  const [rotas, setRotas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const consultar = async () => {
    setLoading(true);
    const res = await fetch("https://NOME-DO-BACKEND.onrender.com/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ smiles }),
    });
    const json = await res.json();
    setRotas(json.rotas || []);
    setLoading(false);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>🔬 Chat Químico</h1>
      <input
        value={smiles}
        onChange={(e) => setSmiles(e.target.value)}
        placeholder="Digite um SMILES..."
        style={{ padding: 10, width: "100%", marginBottom: 10 }}
      />
      <button onClick={consultar} disabled={loading}>
        {loading ? "Consultando..." : "Consultar rota"}
      </button>

      {rotas.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>Rotas sugeridas:</h3>
          {rotas.map((r, i) => (
            <p key={i}>{r}</p>
          ))}
        </div>
      )}
    </main>
  );
}

