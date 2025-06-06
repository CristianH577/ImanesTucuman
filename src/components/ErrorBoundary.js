import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  state = { hasError: false, msg: "Error de renderizado" };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error:", error, errorInfo);
  }

  render() {
    const lang = this.props.lang || "es";

    if (this.state.hasError)
      return (
        <div className="flex justify-center items-center">
          <span className="rounded-lg p-4 border border-danger text-danger bg-warning-50 my-4 uppercase">
            ERROR al renderizar componente
          </span>
        </div>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
