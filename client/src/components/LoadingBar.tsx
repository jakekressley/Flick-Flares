interface LoadingBarProps {
        progress: number;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ progress }) => {
    return (
        <div className="w-[400px] h-[15px] bg-gray-200 rounded-full">
            <div className={`h-full --fire-gradient transition-all ease-in-out duration-200 rounded-full`} style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default LoadingBar;