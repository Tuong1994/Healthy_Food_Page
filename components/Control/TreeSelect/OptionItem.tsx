import React from "react";
import { Option } from "../type";
import { HiCheck, HiChevronRight } from "react-icons/hi2";

interface OptionItemProps {
  option: Option;
  iconSize: () => number | undefined;
  isSelected: (option: Option) => boolean;
  handleSelect: (option: Option) => void;
}

const OptionItem: React.FC<OptionItemProps> = ({ option, isSelected, handleSelect, iconSize }) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  const childActiveClassName = collapsed ? "item-child-active" : "";

  const iconActiveClassName = collapsed ? "arrow-icon-active" : "";

  const handleCollapse = () => setCollapsed(!collapsed);
  
  return (
    <div className="list-item">
      <div className={`item-inner ${isSelected(option) ? "item-inner-selected" : ""}`}>
        <div className="inner-title">
          {option.children && (
            <div className="title-arrow" onClick={handleCollapse}>
              <HiChevronRight className={`arrow-icon ${iconActiveClassName}`} />
            </div>
          )}
          <div className="title-label" onClick={() => handleSelect(option)}>
            {option.icon && <div className="label-icon">{option.icon}</div>}
            <div>{option.label}</div>
          </div>
        </div>
        {isSelected(option) && (
          <div className="inner-check-icon">
            <HiCheck size={iconSize()} />
          </div>
        )}
      </div>

      {option.children && (
        <div className={`item-child ${childActiveClassName}`}>
          {option.children?.map((child, idx) => (
            <OptionItem
              key={idx}
              option={child}
              iconSize={iconSize}
              isSelected={isSelected}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionItem;
