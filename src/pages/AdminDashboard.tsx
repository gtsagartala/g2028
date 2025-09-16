import { useSEO } from '@/hooks/useSEO';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FiUsers, 
  FiMessageSquare, 
  FiBarChart, 
  FiDollarSign,
  FiTrendingUp,
  FiActivity
} from 'react-icons/fi';

const AdminDashboard = () => {
  useSEO({
    title: "Admin Dashboard - Gorilla Tech Solution",
    description: "Admin control panel for managing users, messages, and analytics",
    keywords: "admin dashboard, management panel, analytics, user management"
  });

  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12.5%",
      icon: FiUsers,
      trend: "up"
    },
    {
      title: "Messages",
      value: "1,254",
      change: "+8.2%",
      icon: FiMessageSquare,
      trend: "up"
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+23.1%",
      icon: FiDollarSign,
      trend: "up"
    },
    {
      title: "Active Sessions",
      value: "573",
      change: "+5.4%",
      icon: FiActivity,
      trend: "up"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "New user registered",
      user: "john.doe@example.com",
      time: "2 minutes ago",
      type: "user"
    },
    {
      id: 2,
      action: "Support ticket created",
      user: "jane.smith@example.com",
      time: "5 minutes ago",
      type: "support"
    },
    {
      id: 3,
      action: "Payment received",
      user: "mike.wilson@example.com",
      time: "8 minutes ago",
      type: "payment"
    },
    {
      id: 4,
      action: "Profile updated",
      user: "sarah.johnson@example.com",
      time: "12 minutes ago",
      type: "profile"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        
        <main className="flex-1">
          {/* Header */}
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Live
              </Badge>
            </div>
          </header>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <FiTrendingUp className="mr-1 h-3 w-3 text-green-500" />
                      {stat.change} from last month
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity and Quick Actions */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FiActivity className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>
                    Latest user actions and system events
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.user}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="outline" 
                          className={`mb-1 ${
                            activity.type === 'payment' ? 'border-green-500 text-green-600' :
                            activity.type === 'support' ? 'border-orange-500 text-orange-600' :
                            activity.type === 'user' ? 'border-blue-500 text-blue-600' :
                            'border-gray-500 text-gray-600'
                          }`}
                        >
                          {activity.type}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* System Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FiBarChart className="h-5 w-5" />
                    System Overview
                  </CardTitle>
                  <CardDescription>
                    Server status and performance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Server Status</span>
                      <Badge className="bg-green-500 hover:bg-green-600">Online</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">CPU Usage</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Memory Usage</span>
                      <span className="text-sm text-muted-foreground">62%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Disk Usage</span>
                      <span className="text-sm text-muted-foreground">38%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Active Connections</span>
                      <span className="text-sm text-muted-foreground">1,247</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;