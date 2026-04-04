"use client";

type ToastProps = {
  message: string;
  type: "success" | "error";
};

export default function Toast({ message, type }: ToastProps) {
  return (
    <div className="fixed bottom-4 right-4 z-[100] w-[calc(100%-2rem)] max-w-sm">
      <div
        className={`rounded-2xl border px-5 py-4 text-sm font-semibold shadow-lg ${
          type === "success"
            ? "border-green-200 bg-green-50 text-green-700"
            : "border-red-200 bg-red-50 text-red-700"
        }`}
      >
        {message}
      </div>
    </div>
  );
}