import type { Metadata } from "next";
import "./globals.css";
import Modal from "@/components/Modal";



export const metadata: Metadata = {
  title: "task-o",
  description: "Task-o is a collaborative project management tool that uses boards, lists, and cards for task organization. It features an intuitive drag-and-drop interface, real-time updates, and integrates with multiple platforms. Task-o enhances team productivity and workflow management, making it ideal for Agile methodologies and project tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Modal />
        </body>
    </html>
  );
}
