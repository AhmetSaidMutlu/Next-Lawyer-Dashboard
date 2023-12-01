import GlobalState from "@/context";
import { registerLicense } from '@syncfusion/ej2-base';
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import NextAuthProvider from "@/auth-provider";

const inter = Inter({ subsets: ["latin"] });

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cWWhIfEx0Q3xbf1xzZFFMY1pbQHVPMyBoS35RdURiW3ledHdTQmReUkN3');

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>
            <div className="flex h-screen overflow-hidden">
              <Sidebar />

              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header />
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}
