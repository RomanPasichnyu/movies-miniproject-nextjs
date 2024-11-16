import type {Metadata} from "next";
import "./globals.css";
import MenuComponent from "@/app/(components)/header/MenuComponent";

export const metadata: Metadata = {
    title: "Movie Project",
    description: "Work for 110 points",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <MenuComponent/>
        {children}
        </body>
        </html>
    );
}
