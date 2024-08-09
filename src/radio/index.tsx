import InternalRadio from "./radio";
import Group from "./radio-group";

type RadioType = typeof InternalRadio;
interface RadioInterface extends RadioType {
  Group: typeof Group;
}

const Radio = InternalRadio as RadioInterface;
Radio.Group = Group;
export default Radio;
