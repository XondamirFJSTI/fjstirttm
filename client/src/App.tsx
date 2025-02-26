import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import AdminLayout from "@/components/layout/AdminLayout";
import Home from "@/pages/home";
import About from "@/pages/about";
import Staff from "@/pages/staff";
import News from "@/pages/news";
import Courses from "@/pages/courses";
import Videos from "@/pages/videos";
import Tests from "@/pages/tests";
import Register from "@/pages/register";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminStaff from "@/pages/admin/staff";
import AdminNews from "@/pages/admin/news";
import AdminCourses from "@/pages/admin/courses";
import AdminVideos from "@/pages/admin/videos";
import AdminTests from "@/pages/admin/tests";
import NotFound from "@/pages/not-found";

// Admin route wrapper
const AdminRoute = ({ component: Component }: { component: React.ComponentType }) => (
  <AdminLayout>
    <Component />
  </AdminLayout>
);

function Router() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Switch>
        {/* Admin routes */}
        <Route path="/admin" component={() => <AdminRoute component={AdminDashboard} />} />
        <Route path="/admin/staff" component={() => <AdminRoute component={AdminStaff} />} />
        <Route path="/admin/news" component={() => <AdminRoute component={AdminNews} />} />
        <Route path="/admin/courses" component={() => <AdminRoute component={AdminCourses} />} />
        <Route path="/admin/videos" component={() => <AdminRoute component={AdminVideos} />} />
        <Route path="/admin/tests" component={() => <AdminRoute component={AdminTests} />} />

        {/* Public routes */}
        <Route path="*">
          <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-8">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/staff" component={Staff} />
                <Route path="/news" component={News} />
                <Route path="/courses" component={Courses} />
                <Route path="/videos" component={Videos} />
                <Route path="/tests" component={Tests} />
                <Route path="/register" component={Register} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </>
        </Route>
      </Switch>
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;