import { SearchSection } from '@/components/search-section';
import { Search, Download, ShieldCheck, HelpCircle } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              CF
            </div>
            <span className="text-2xl font-bold tracking-tight text-primary">CertiFind</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-secondary transition-colors">How it works</a>
            <a href="#" className="text-sm font-medium hover:text-secondary transition-colors">Categories</a>
            <a href="#" className="text-sm font-medium hover:text-secondary transition-colors">Support</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4 border border-secondary/10">
            <ShieldCheck className="w-4 h-4" />
            Verified Document Repository
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tight max-w-4xl mx-auto leading-tight">
            Find and Download Your <span className="text-secondary underline decoration-secondary/30">Official Certificates</span> Instantly.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Access our secure public repository to retrieve your professional certifications, course completions, and official documents without any hassle.
          </p>
        </div>
      </section>

      {/* Main Search Area */}
      <main className="flex-grow container mx-auto px-4 pb-24">
        <SearchSection />
        
        {/* Features Section - Only show when not searching or below results */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t pt-24">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary">Smart Search</h3>
            <p className="text-muted-foreground leading-relaxed">
              Find your documents by name, unique ID, or organization using our lightning-fast search engine.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <Download className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-primary">Instant Access</h3>
            <p className="text-muted-foreground leading-relaxed">
              No login required. Download high-quality PDF versions of your certificates immediately upon discovery.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary">Verified Docs</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every document in our repository is digitally signed and verified for authenticity and professional use.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-lg">
                  CF
                </div>
                <span className="text-xl font-bold">CertiFind</span>
              </div>
              <p className="text-primary-foreground/70 max-w-sm">
                Empowering professionals and students with quick, secure access to their hard-earned certifications. Trusted by top institutions worldwide.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Quick Links</h4>
              <ul className="space-y-4 text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Help</h4>
              <ul className="space-y-4 text-primary-foreground/70">
                <li className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  <a href="#" className="hover:text-white transition-colors">FAQ Center</a>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Verification Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Issuer Login</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} CertiFind. Professional Document Discovery Platform.
          </div>
        </div>
      </footer>
    </div>
  );
}