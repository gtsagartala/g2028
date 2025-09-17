import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { FiHome, FiUsers, FiMessageSquare, FiBarChart, FiSettings, FiShield, FiFileText, FiMail, FiDollarSign, FiMonitor } from 'react-icons/fi';
const adminMenuItems = [{
  title: "Dashboard",
  url: "/admin",
  icon: FiHome
}, {
  title: "Users",
  url: "/admin/users",
  icon: FiUsers
}, {
  title: "Messages",
  url: "/admin/messages",
  icon: FiMessageSquare
}, {
  title: "Analytics",
  url: "/admin/analytics",
  icon: FiBarChart
}, {
  title: "Content",
  url: "/admin/content",
  icon: FiFileText
}, {
  title: "Mail",
  url: "/admin/mail",
  icon: FiMail
}, {
  title: "Payments",
  url: "/admin/payments",
  icon: FiDollarSign
}, {
  title: "System",
  url: "/admin/system",
  icon: FiMonitor
}, {
  title: "Security",
  url: "/admin/security",
  icon: FiShield
}, {
  title: "Settings",
  url: "/admin/settings",
  icon: FiSettings
}];
export function AdminSidebar() {
  const {
    state
  } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path: string) => {
    if (path === "/admin") {
      return currentPath === "/admin";
    }
    return currentPath.startsWith(path);
  };
  const isExpanded = adminMenuItems.some(item => isActive(item.url));
  const getNavCls = (path: string) => isActive(path) ? "bg-primary text-primary-foreground font-medium hover:bg-primary/90" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";
  return <Sidebar className={`${collapsed ? "w-14" : "w-64"} border-r bg-background`} collapsible="icon">
      <SidebarContent>
        {/* Admin Brand */}
        <div className={`p-4 border-b ${collapsed ? "px-2" : ""}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <FiShield className="w-4 h-4 text-primary-foreground" />
            </div>
            {!collapsed && <div className="flex-1">
                <h2 className="text-sm font-semibold">Admin Panel</h2>
                <NavLink to="/" className="text-xs text-primary hover:text-primary/80 hover:underline transition-colors">
                  ← Back to Home Page
                </NavLink>
              </div>}
          </div>
        </div>

        

        <SidebarGroup className="px-2">
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end={item.url === "/admin"} className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${getNavCls(item.url)}`}>
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Stats */}
        {!collapsed && <div className="mt-auto p-4 border-t">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">System Status</span>
                <span className="text-green-500 font-medium">Online</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Active Users</span>
                <span className="font-medium">1,247</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Server Load</span>
                <span className="font-medium">45%</span>
              </div>
            </div>
          </div>}
      </SidebarContent>
    </Sidebar>;
}