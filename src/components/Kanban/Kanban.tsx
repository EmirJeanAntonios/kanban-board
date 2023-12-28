import React, { PropsWithChildren } from "react";
import "./styles.scss";
import KanbanCard from "./KanbanCard/KanbanCard";

interface KanbanProps {
  title: string;
}

interface KanbanComponent extends React.FC<PropsWithChildren<KanbanProps>> {
  Card: React.FC<PropsWithChildren>;
}

const Kanban: KanbanComponent = ({ title, children }) => {
  const cardCount = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && (child as any).type === KanbanCard
  ).length;

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


Kanban.Card = KanbanCard;

export default Kanban;
