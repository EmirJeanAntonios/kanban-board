import React, { PropsWithChildren } from "react";
import "./styles.scss";

type KanbanWrapperProps = {
  title: string;
};

const KanbanWrapper: React.FC<PropsWithChildren<KanbanWrapperProps>> = ({
  title,
  children,
}) => {
  return (
    <div className="kanban_wrapper">
      <div className="kanban_wrapper_container">
        <div className="kanban_wrapper_title">
          <h2>{title}</h2>
        </div>
        <div className="kanban_wrapper_content">{children}</div>
        <div className="kanban_wrapper_footer">
            <button>Add Item + </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanWrapper;
