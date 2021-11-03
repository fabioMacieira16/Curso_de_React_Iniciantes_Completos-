import React from "react";
import { useParams } from "react-router-dom";

import Button from "./Button";

const TaskDetails = () => {
    const param = useParams();

    1:17

  return (
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
        <div className="task-details-container">
          <h2>{param.taskTitle}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            cum esse sunt qui magni temporibus.
          </p>
            </div>
      </div>
    </>
  );
};

export default TaskDetails;
