import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Video as VideoIcon, PlayCircle } from "lucide-react";
import type { Video, Course } from "@shared/schema";

export default function VideosPage() {
  const { data: videos, isLoading: videosLoading } = useQuery<Video[]>({
    queryKey: ["/api/videos"],
  });

  const { data: courses } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  if (videosLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <Skeleton className="h-48 w-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const getCourseName = (courseId: number) => {
    return courses?.find(c => c.id === courseId)?.title || "";
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Video darslar
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Masofaviy ta'lim uchun maxsus tayyorlangan video darslar
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos?.map((video) => (
          <Card key={video.id}>
            <CardContent className="pt-6">
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <PlayCircle className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              <p className="text-primary text-sm mb-2">
                {getCourseName(video.courseId)}
              </p>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
