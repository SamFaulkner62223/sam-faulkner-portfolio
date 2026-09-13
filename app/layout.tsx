import type { Metadata } from 'next';
import './globals.css';
import './polish.css';
export const metadata: Metadata = { title: 'Samuel Faulkner | Data, Intelligence & Systems', description: 'Explore Samuel Faulkner’s career in business intelligence, data engineering and AI-assisted analytics.', icons:{icon:(process.env.NEXT_PUBLIC_BASE_PATH || '')+'/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body style={{'--portfolio-art':`url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/portfolio-architecture.png')`} as React.CSSProperties}>{children}</body></html>;}
