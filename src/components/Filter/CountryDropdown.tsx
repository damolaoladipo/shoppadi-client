import { useEffect } from "react";
import { ICountryOption } from "../../utils/interface.util";
import Select, { SingleValue } from "react-select";
import { getNames } from "country-list";



const CountryDropdown = ({ onChange }: any) => {

  

  const countries = getNames(); 
  const options: ICountryOption[] = [
    { value: "Nigeria", label: "Nigeria" },
    ...countries
      .filter((country: string) => country !== "Nigeria") 
      .map((country: any) => ({ value: country, label: country })),
  ];

  const handleChange = (selectedOption: SingleValue<ICountryOption>) => {
    onChange(selectedOption)
  };

  useEffect(() => {}, []);

  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Select a country"
        isSearchable
      />
    </>
  );
};

export default CountryDropdown;
