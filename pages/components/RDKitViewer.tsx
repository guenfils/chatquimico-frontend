import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

export default function RDKitViewer({ smiles }: { smiles: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !(window as any).RDKit) return;
    const mol = (window as any).RDKit.get_mol(smiles);
    ref.current.innerHTML = mol.get_svg();
    mol.delete();
  }, [smiles]);

  return <div ref={ref}></div>;
}

