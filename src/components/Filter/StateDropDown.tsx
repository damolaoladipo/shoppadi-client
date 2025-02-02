import Select, { SingleValue } from "react-select";
import { IStateOption } from "../../utils/interface.util";
import { statesInNigeria } from "../../_data/state";




const StateDropdown = ( {onChange}: any ) => {

  const options: IStateOption[] = statesInNigeria.map((state) => ({
    value: state,
    label: state
  }));

  const handleChange = (selectedOption: SingleValue<IStateOption>) => {
      onChange(selectedOption)
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder="Select a state"
      isSearchable
    />
  );
};

export default StateDropdown;
