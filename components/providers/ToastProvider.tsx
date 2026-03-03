"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      theme="dark"
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        style: {
          background: "#1a1a1a",
          border: "1px solid rgba(255, 229, 0, 0.2)",
          color: "#fff",
          fontFamily: "'DM Mono', monospace",
          fontSize: "14px",
          borderRadius: "0.625rem",
          boxShadow: "0 0 20px rgba(255,229,0,0.1), 0 4px 12px rgba(0,0,0,0.4)",
          padding: "16px 20px",
        },
        classNames: {
          error: "sonner-error",
          success: "sonner-success",
          loading: "sonner-loading",
          actionButton: "sonner-action-button",
        },
      }}
      icons={{}}
    />
  );
}
