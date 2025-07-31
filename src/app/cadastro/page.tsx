"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CadastroPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Página de Cadastro</h1>

      <Link href="/">
        <Button variant="outline">Voltar para Registro de Ponto</Button>
      </Link>
    </main>
  );
}
