import React from "react";
import "./style.css";

interface Props {
    instructions: string;
    source: string;
}

const MealInstructions: React.FC<Props> = ({ instructions }) => {

    return (
        <div>
            <h4>Modo de Preparo:</h4>
            <p>{instructions}</p>
        </div>
    );
};

export default MealInstructions;