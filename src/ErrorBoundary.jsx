import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary berhasil menangkap error", error, info);
  }

  render(){
    if (this.state.hasError) {
        return(
            <h2>
                Terjadi kesalahan saat membuka halaman Details, silahkan click disini untuk kembali ke 
                <Link to="/">Home</Link>
            </h2>
        )
    }
    
    return this.props.children
  }
}

export default ErrorBoundary
