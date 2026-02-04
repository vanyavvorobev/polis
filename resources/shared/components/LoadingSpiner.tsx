import type { FC, ReactNode } from "react";
import "./LoadingSpiner.css";

interface LoadingSpinerProps {
    children: ReactNode;
    isLoading: boolean;
};

const LoadingSpiner: FC<LoadingSpinerProps> = ({
    children,
    isLoading
}) => { 
    if(isLoading) return ( 
        <div className="loading-spiner-wrapper">
            <div className="loading-spiner"/>
        </div>
    )
    else return children;
};

export default LoadingSpiner;
