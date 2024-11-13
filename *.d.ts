// Nav Item types
export interface NavItem {
  label: string;
  href: string;
  tools?: ToolItem[];
}

export interface ToolItem {
  label: string;
  href: string;
  description: string;
}
