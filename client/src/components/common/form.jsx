import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const types = {
  INPUT: "input",
  TEXTAREA: "textarea",
  SELECT: "select",
  BUTTON: "button",
};
const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {
  function renderInputByComponentType(getControlItem) {
    let element = null;

    switch (getControlItem.componentType) {
      case types.INPUT:
        element = (
          <input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
            required={getControlItem.required}
          />
        );
        break;
      case types.SELECT:
        element = (
          <Select>
            <SelectTrigger className="w-full" >
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {
                getControlItem.options && 
                getControlItem.options.length > 0 ?
                getControlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.value} > {optionItem.label} </SelectItem> )
                : null
              } 
            </SelectContent>
          </Select>
        );
        break;
      case types.TEXTAREA:
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
          />
        );
        break;

      default:
        element = (
          <Input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
            required={getControlItem.required}
          />
        );
        break;
    }

    return element;
  }
  return (
    <form>
      <div className="flex flex-col g-3">
        {formControls.map((controlItem) => {
          <div key={controlItem.name} className=" grid w-full gap-1.5">
            <Label className=" mb-1">{controlItem.label}</Label>
            {renderInputByComponentType(controlItem)}
          </div>;
        })}
      </div>
    </form>
  );
};

export default CommonForm;
