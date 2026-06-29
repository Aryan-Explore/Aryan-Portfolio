import { Component, Suspense, lazy, useEffect, useState, type ReactNode } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

class SplineErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.warn("[SplineRobot] failed to render, hiding scene:", error);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default function SplineRobot() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "480px",
        position: "relative",
        willChange: "transform",
        overflow: "hidden",
        pointerEvents: "auto",
      }}
    >
      {mounted && (
        <SplineErrorBoundary>
          <Suspense fallback={<div style={{ width: "100%", height: "100%" }} />}>
            <Spline
              scene="https://prod.spline.design/kZDDjO5HlWTnSgr7/scene.splinecode"
              onError={(e) => console.warn("[SplineRobot] scene load error:", e)}
            />
          </Suspense>
        </SplineErrorBoundary>
      )}
    </div>
  );
}
