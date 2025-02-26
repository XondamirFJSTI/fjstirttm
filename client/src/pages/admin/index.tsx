import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Registration, Course } from "@shared/schema";

export default function AdminPage() {
  const { toast } = useToast();

  const { data: registrations } = useQuery<Registration[]>({
    queryKey: ["/api/registrations"],
  });

  const { data: courses } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      const res = await apiRequest("PATCH", `/api/registrations/${id}/status`, {
        status,
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/registrations"] });
      toast({
        title: "Status yangilandi",
      });
    },
  });

  const getCourseTitle = (courseId: number) => {
    return courses?.find((c) => c.id === courseId)?.title || "Unknown";
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ro'yxatdan o'tganlar</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ism</TableHead>
                <TableHead>Telefon</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Kurs</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amallar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations?.map((reg) => (
                <TableRow key={reg.id}>
                  <TableCell>{reg.name}</TableCell>
                  <TableCell>{reg.phone}</TableCell>
                  <TableCell>{reg.email}</TableCell>
                  <TableCell>{getCourseTitle(reg.courseId)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={reg.status === "approved" ? "default" : "secondary"}
                    >
                      {reg.status === "pending" ? "Kutilmoqda" : "Tasdiqlangan"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {reg.status === "pending" && (
                      <Button
                        size="sm"
                        onClick={() =>
                          updateStatusMutation.mutate({
                            id: reg.id,
                            status: "approved",
                          })
                        }
                        disabled={updateStatusMutation.isPending}
                      >
                        Tasdiqlash
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
