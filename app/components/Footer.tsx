interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {

  return (
    <footer className="bg-surface-container-lowest w-full py-12 border-t border-outline-variant/10 mt-auto transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-6 md:px-8 gap-6">
        <button 
          onClick={() => setActiveTab('/')}
          className="font-serif text-xl font-medium tracking-widest text-on-surface hover:text-primary transition-colors cursor-pointer uppercase"
        >
          Jonil Mark
        </button>
        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100 font-sans text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100 font-sans text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
