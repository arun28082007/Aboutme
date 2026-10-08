import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Arun Anand | Neobrutalist Portfolio & Project Showcase',
  description: 'Modern neobrutalism developer portfolio showcasing Arun Anand\'s projects, GitHub repositories, technical skills, education, and contact details with dark mode.',
  openGraph: {
    title: 'Arun Anand | Neobrutalist Portfolio & Project Showcase',
    description: 'Modern neobrutalism developer portfolio showcasing Arun Anand\'s projects, GitHub repositories, technical skills, education, and contact details with dark mode.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arun Anand | Neobrutalist Portfolio & Project Showcase',
    description: 'Modern neobrutalism developer portfolio showcasing Arun Anand\'s projects, GitHub repositories, technical skills, education, and contact details with dark mode.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('arun_portfolio_theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                  if (document.body) document.body.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  if (document.body) document.body.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
