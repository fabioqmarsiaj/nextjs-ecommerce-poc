// app/(sua-rota)/loading.tsx
import ProductSkeleton from "@/components/ui/product/product-skeleton";

export default function Loading() {
  const count = 3; // mantenha consistente

  return (
    <main className="container mx-auto p-4" aria-busy="true" aria-live="polite">
      {/* Corrigido: text-3xl */}
      <h1 className="text-3xl font-bold mb-6">Home</h1>

      {/* Evite números fixos: derive do count */}
      <p className="mb-4">Showing {count} products</p>

      <ProductSkeleton />
    </main>
  );
}
