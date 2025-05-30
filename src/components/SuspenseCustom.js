import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";
import ErrorBoundary from "./ErrorBoundary";

export default function SuspenseCustom({ children = null, classnames = {} }) {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <span
            className={`w-full flex items-center justify-center${
              classnames?.suspenseFall ? " " + classnames?.suspenseFall : ""
            }`}
          >
            <Spinner color="secondary" />
          </span>
        }
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
