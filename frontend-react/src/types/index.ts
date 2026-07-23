export type NavigationTab = 'dashboard' | 'employees' | 'departments' | 'attendance' | 'about' | 'contact';

export interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  designation?: string;
  email?: string;
  status: 'Active' | 'On Leave' | 'Inactive';
}

export interface Department {
  id: string;
  title: string;
  lead: string;
  members?: string;
}

export interface StatCardItem {
  title: string;
  value: string;
}

export interface StatCardsProps {
  totalEmployees?: number;
  totalDepartments?: number;
  presentToday?: number;
  pendingRequests?: number;
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

export interface SidebarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

export interface DashboardProps {
  employees: Employee[];
  departments?: Department[];
  setActiveTab: (tab: NavigationTab) => void;
  onAddEmployee: (employee: Employee) => void;
  onToggleStatus?: (id: string) => void;
  onRemoveEmployee?: (id: string) => void;
}

export interface EmployeeCardProps {
  id?: string;
  name?: string;
  department?: string;
  designation?: string;
  role?: string;
  email?: string;
  status?: 'Active' | 'On Leave' | 'Inactive';
  employee?: Employee;
  onViewDetails?: (id: string) => void;
  onToggleStatus?: (id: string) => void;
  onRemoveEmployee?: (id: string) => void;
}

export interface EmployeeListProps {
  employees: Employee[];
  title?: string;
  onViewDetails?: (id: string) => void;
  onOpenAddModal?: () => void;
  onToggleStatus?: (id: string) => void;
  onRemoveEmployee?: (id: string) => void;
}

export interface AddEmployeeFormProps {
  departments?: Department[];
  onAddEmployee: (employee: Employee) => void;
  onClose?: () => void;
}

export interface AddDepartmentFormProps {
  onAddDepartment: (department: Department) => void;
  onClose?: () => void;
}

export interface EmployeesViewProps {
  employees: Employee[];
  departments?: Department[];
  onAddEmployee: (employee: Employee) => void;
  onToggleStatus?: (id: string) => void;
  onRemoveEmployee?: (id: string) => void;
}

export interface DepartmentsViewProps {
  employees: Employee[];
  departments: Department[];
  onAddDepartment: (department: Department) => void;
  onDeleteDepartment: (id: string) => void;
}

export interface HomeDashboardViewProps {
  employees: Employee[];
  departments?: Department[];
  setActiveTab: (tab: NavigationTab) => void;
  onAddEmployee: (employee: Employee) => void;
  onToggleStatus?: (id: string) => void;
  onRemoveEmployee?: (id: string) => void;
}

export interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

export interface QuickActionsProps {
  setActiveTab: (tab: NavigationTab) => void;
  onOpenAddModal?: () => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
