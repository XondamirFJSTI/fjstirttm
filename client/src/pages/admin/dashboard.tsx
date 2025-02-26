import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import {
  Users,
  BookOpen,
  Video,
  TestTube,
  FileText,
} from "lucide-react";
import type { Staff, Course, Video as VideoType, Test, News } from "@shared/schema";

export default function Dashboard() {
  const { data: staff } = useQuery<Staff[]>({ queryKey: ["/api/staff"] });
  const { data: courses } = useQuery<Course[]>({ queryKey: ["/api/courses"] });
  const { data: videos } = useQuery<VideoType[]>({ queryKey: ["/api/videos"] });
  const { data: tests } = useQuery<Test[]>({ queryKey: ["/api/tests"] });
  const { data: news } = useQuery<News[]>({ queryKey: ["/api/news"] });

  const stats = [
    {
      name: "Xodimlar",
      value: staff?.length || 0,
      icon: Users,
      href: "/admin/staff",
    },
    {
      name: "O'quv materiallar",
      value: courses?.length || 0,
      icon: BookOpen,
      href: "/admin/courses",
    },
    {
      name: "Video darslar",
      value: videos?.length || 0,
      icon: Video,
      href: "/admin/videos",
    },
    {
      name: "Testlar",
      value: tests?.length || 0,
      icon: TestTube,
      href: "/admin/tests",
    },
    {
      name: "Yangiliklar",
      value: news?.length || 0,
      icon: FileText,
      href: "/admin/news",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name}>
              <CardContent className="flex items-center gap-4 p-6">
                <Icon className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
