import React, { PropsWithChildren } from "react";
import "./styles.scss";
import KanbanCard from "./KanbanCard/KanbanCard";
import Button from "../Button/Button";

type KanbanProps = {
  title: string;
};

interface IKanbanComponent extends React.FC<PropsWithChildren<KanbanProps>> {
  Card: React.FC<PropsWithChildren>;
}

interface IKanbanContext {
  cardCount?: number;
}

const KanbanContext = React.createContext<IKanbanContext | null>(null);
export const useKanbanContext = () => React.useContext(KanbanContext);

const Kanban: IKanbanComponent = ({ title, children }) => {
  const cardCount = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && (child as any).type === KanbanCard
  ).length;

  return (
    <KanbanContext.Provider value={{ cardCount }}>
      <div className="kanban_wrapper">
        <div className="kanban_wrapper_container">
          <div className="kanban_wrapper_title">
            <h2>{title}</h2>
          </div>
          <div className="kanban_wrapper_content">{children}</div>
          <div className="kanban_wrapper_footer">
              <Button text={<>Add Item</>} variant="primary"  onClick={(event) => console.log(event)} size="medium"/>
          </div>
        </div>
      </div>
    </KanbanContext.Provider>
  );
};

Kanban.Card = KanbanCard;

export default Kanban;
