// src/components/ui/product/product-card-skeleton.tsx
import { Skeleton } from "../skeleton";
import { Card, CardFooter, CardHeader } from "../card";

export function ProductCardSkeleton() {
  return (
    <Card className="pt-0 overflow-hidden">
      {/* Mantém a mesma proporção da imagem do ProductCard */}
      <div className="relative aspect-video">
        <Skeleton className="absolute inset-0 h-full w-full" />
      </div>

      <CardHeader className="space-y-2">
        {/* Título (80% da largura) */}
        <Skeleton className="h-5 w-4/5" />
        {/* Duas linhas de descrição com larguras diferentes */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>

      <CardFooter className="flex items-center justify-between">
        {/* Preço */}
        <Skeleton className="h-6 w-24" />
        {/* Espaço para uma ação (ex: botão) para equilibrar o layout */}
        <Skeleton className="h-9 w-24 rounded-md" />
      </CardFooter>
    </Card>
  );
}
