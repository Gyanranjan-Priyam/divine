import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratories - Science Labs",
  description: "State-of-the-art laboratories at Divine Group of Institutions. Physics, Chemistry, Biology, and Computer Science labs.",
};

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Laboratories</h1>
        <p className="text-gray-600">Page coming soon...</p>
      </div>
    </div>
  );
}