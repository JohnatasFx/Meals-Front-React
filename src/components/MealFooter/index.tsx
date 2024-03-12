import React from "react";
import "./style.css";

interface Props {
  creativeCommonsConfirmed: string;
  dateModified: string | undefined;
  tags: string;
}

const MealFooter: React.FC<Props> = ({tags, dateModified, creativeCommonsConfirmed}) => {
    const shouldDisplayTags = tags && tags !== "" && tags !== "null";
    const shouldDisplayDate = dateModified && dateModified !== "" && dateModified !== "null";
    const shouldDisplayCreativeCommons = creativeCommonsConfirmed && creativeCommonsConfirmed !== "" && creativeCommonsConfirmed !== "null";
    
    return (
        <div>
            <h4>Categorias:</h4>
            {shouldDisplayTags ? <p className="tags">{tags}</p> : null}
            {shouldDisplayDate ? <p className="dateModified">{dateModified}</p> : null}
            {shouldDisplayCreativeCommons ? <p className="creativeCommonsConfirmed">{creativeCommonsConfirmed}</p> : null}
        </div>
    );
};

export default MealFooter;