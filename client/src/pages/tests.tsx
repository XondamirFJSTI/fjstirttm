import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, Award } from "lucide-react";
import { Link } from "wouter";
import type { Test, Course } from "@shared/schema";

export default function TestsPage() {
  const { data: tests, isLoading: testsLoading } = useQuery<Test[]>({
    queryKey: ["/api/tests"],
  });

  const { data: courses } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  if (testsLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <Skeleton className="h-4 w-full" />
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
          Online testlar
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          O'z bilimingizni sinab ko'ring va natijalarni tekshiring
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests?.map((test) => (
          <Card key={test.id}>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-2">{test.title}</h2>
              <p className="text-primary text-sm mb-2">
                {getCourseName(test.courseId)}
              </p>
              <p className="text-gray-600 mb-4">{test.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{test.duration} daqiqa</span>
                </div>
              </div>
              <Link href={`/tests/${test.id}`}>
                <Button className="w-full">Testni boshlash</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
