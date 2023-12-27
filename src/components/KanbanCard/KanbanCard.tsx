import React, { PropsWithChildren } from "react";
import "./styles.scss"

const KanbanCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="kanban_card">{children}</div>;
};

export default KanbanCard;
