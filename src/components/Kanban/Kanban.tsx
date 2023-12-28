import React, { PropsWithChildren, useState } from "react";
import "./styles.scss";
import KanbanCard from "./KanbanCard/KanbanCard";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { FaPlus } from "react-icons/fa6";

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
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
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

          {isFormVisible && (
            <div className="kanban_wrapper_form">
              <Input variant="primary" fullWidth placeholder="TODO..." />
              <div className="kanban_wrapper_form_buttons">
                <Button
                  text={"Add"}
                  variant="primary"
                  onClick={(event) => console.log(event)}
                  size="small"
                  rightEndAdornment={<FaPlus />}
                />
                <Button
                  text={"Close"}
                  variant="error"
                  onClick={(event) => setIsFormVisible(false)}
                  size="small"
                />
              </div>
            </div>
          )}

          {!isFormVisible && (
            <div className="kanban_wrapper_footer">
              <Button
                text={
                  <>
                    Add Item <FaPlus />
                  </>
                }
                variant="primary"
                onClick={(event) => setIsFormVisible(!isFormVisible)}
                size="medium"
              />
            </div>
          )}
        </div>
      </div>
    </KanbanContext.Provider>
  );
};

Kanban.Card = KanbanCard;

export default Kanban;
