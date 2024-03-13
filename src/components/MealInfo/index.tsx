import React from "react";
import "./style.css";

interface Props {
    area: string;
    categoria: string;
    drink: string;
}

const MealInfo: React.FC<Props> = ({ area, categoria, drink }) => {
    const shouldDisplayArea = area && area !== "" && area !== "null";
    const shouldDisplayCategoria = categoria && categoria !== "" && categoria !== "null";
    const shouldDisplayDrink = drink && drink !== "" && drink !== "null";
    
    return (
        <div className="informações">
            {shouldDisplayArea ? <h4 className="area">{area}</h4> : null}
            {shouldDisplayCategoria ? <h4 className="categoria">{categoria}</h4> : null}
            {shouldDisplayDrink ? <h4 className="drink">{drink}</h4> : null}
        </div>
    );
};

export default MealInfo;