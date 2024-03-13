import React from "react";
import "./style.css";

interface Props {
  creativeCommonsConfirmed: string;
  dateModified: string;
  tags: string;
}

const MealFooter: React.FC<Props> = ({tags, dateModified, creativeCommonsConfirmed}) => {
    const shouldDisplayTags = tags && tags !== "" && tags !== "null";
    const shouldDisplayDate = dateModified && dateModified !== "" && dateModified !== "null";
    const shouldDisplayCreativeCommons = creativeCommonsConfirmed && creativeCommonsConfirmed !== "" && creativeCommonsConfirmed !== "null";
    const shouldDisplayHeader = shouldDisplayTags || shouldDisplayDate || shouldDisplayCreativeCommons;
    
    return (
        <div>
            {shouldDisplayHeader ? <h4>Categorias:</h4> : null}
            {shouldDisplayTags ? <p className="tags">{tags}</p> : null}
            {shouldDisplayDate ? <p className="dateModified">{dateModified}</p> : null}
            {shouldDisplayCreativeCommons ? <p className="creativeCommonsConfirmed">{creativeCommonsConfirmed}</p> : null}
        </div>
    );
};

export default MealFooter;