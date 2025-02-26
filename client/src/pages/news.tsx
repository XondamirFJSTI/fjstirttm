import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import type { News } from "@shared/schema";

export default function NewsPage() {
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ["/api/news"],
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/4 mb-4" />
              <Skeleton className="h-24 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Yangiliklar
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Markazimiz va tibbiyot sohasidagi so'nggi yangiliklar
        </p>
      </div>

      <div className="space-y-6">
        {news?.map((item) => (
          <Card key={item.id}>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-500 text-sm mb-4">
                {format(new Date(item.date), "dd.MM.yyyy")}
              </p>
              <p className="text-gray-600 whitespace-pre-wrap">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
