// app/(sua-rota)/loading.tsx
import { ProductCardSkeleton } from "@/components/ui/product/product-card-skeleton";

export default function Loading() {
  const count = 6; // mantenha consistente

  return (
    <main className="container mx-auto p-4" aria-busy="true" aria-live="polite">
      {/* Corrigido: text-3xl */}
      <h1 className="text-3xl font-bold mb-6">Home</h1>

      {/* Evite números fixos: derive do count */}
      <p className="mb-4">Showing {count} products</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}
