import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ToolsSection from '@/components/sections/tools';

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ToolsSection />
      </main>
      <Footer />
    </div>
  );
}
