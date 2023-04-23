import { Component } from "react";
import { Link } from "react";

class ErrorBoundary extends Component {
    state = {hasError: false};

    static getDerivedStateFromError(){
        return {hasError: true};
    }

    componentDidCatch(error, info){
        console.error("ErrorBoundary component caught", error, info);
    }

    render(){
        if (this.state.hasError){
            return (
                <h2>
                    There was an error with this linksting. <Link to="/">Click here to go back to
                     the home page</Link>
                </h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
