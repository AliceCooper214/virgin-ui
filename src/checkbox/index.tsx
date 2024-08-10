import InternalCheckbox from "./checkbox";
import Group from "./checkbox-group";

type CheckboxType = typeof InternalCheckbox;
interface CheckboxInterface extends CheckboxType {
  Group: typeof Group;
}

const Checkbox = InternalCheckbox as CheckboxInterface;
Checkbox.Group = Group;
export default Checkbox;
