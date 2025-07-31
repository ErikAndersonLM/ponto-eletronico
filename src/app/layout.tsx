import "@/app/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ponto Eletrônico",
  description: "Sistema de ponto com reconhecimento facial",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex bg-gray-100">
        
        {/* Sidebar fixa */}
        <aside className="w-64 bg-white shadow-md p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-blue-600">Menu</h2>

          <Link href="/">
            <Button variant="outline" className="justify-start w-full text-left">
              Registro de Ponto
            </Button>
          </Link>

          <Link href="/cadastro">
            <Button variant="outline" className="justify-start w-full text-left">
              Cadastro de Funcionário
            </Button>
          </Link>
        </aside>

        {/* Área de conteúdo */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
