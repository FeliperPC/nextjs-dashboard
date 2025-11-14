import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

// this file will render all pages in this children prop, so when accessing http://localhost:3000/dashboard the children renders the page.tsx from 
// dashboard, and as the route changes keeping the dashboard like http://localhost:3000/dashboard/invoices, now the invoice page is the layout children