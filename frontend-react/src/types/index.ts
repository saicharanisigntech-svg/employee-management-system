export type NavigationTab = 'dashboard' | 'employees' | 'departments' | 'attendance' | 'about' | 'contact';

export interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  status: 'Active' | 'On Leave' | 'Inactive';
}

export interface Department {
  title: string;
  members: string;
  lead: string;
}

export interface StatCardItem {
  title: string;
  value: string;
}

export interface DashboardStat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

export interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

export interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

export interface QuickActionsProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export interface HomeDashboardViewProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
