import QuizCard from "./QuizCard";
import "../styles/QuizGrid.css";

const QuizGrid = ({ data }) => {
    return (
        <div className="cards-grid-premium">
            {data.map((quiz, index) => (
                <QuizCard key={index} {...quiz} />
            ))}
        </div>
    );
};

export default QuizGrid;