import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getLocations } from "../../redux/catalogue/catalogue-operation";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import ReactSelect from "react-select";
import SecondButton from "../Button/SecondButton";
import IconSwitch from "../IconSwitch/IconSwitch";
// import { toast } from 'react-toastify';

import "../components.scss";

interface MyFormValues {
  locations: string;
  vehicleEquipments: string;
  vehicleTypes: string;
}

const initialValues: MyFormValues = {
  locations: "",
  vehicleEquipments: "",
  vehicleTypes: "",
};

const schema = Yup.object().shape({
  locations: Yup.string().required("Location is required"),
  vehicleEquipments: Yup.string().required("Vehicle Equipment is required"),
  vehicleTypes: Yup.string().required("Vehicle Type is required"),
});

const FilterSearch = () => {
  const dispatch = useAppDispatch();

  const [selectedlocation, setSelectedlocation] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const locations: string[] = useAppSelector((state) => {
    return state.catalogue.locationsList;
  });
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const convertToSlug = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "");
  };

  const handleSubmit = (
    values: MyFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("handleSubmit", values);
    console.log("handleSubmit", selectedlocation);
    console.log("handleSubmit", selectedEquipment);
    console.log("handleSubmit", selectedType);
    // const { location, vehicleEquipments, vehicleTypes } = values;

    setSelectedlocation(values.locations);
    setSelectedEquipment(values.vehicleEquipments);
    setSelectedType(values.vehicleTypes);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form
          onSubmit={props.handleSubmit}
          className="w-[362px] flex flex-col gap-[32px]"
        >
          <div>
            <p className="mb-[8px] text-tritiaryGray text-[16px] font-[400] leading-[1.5]">
              Location
            </p>
            <ReactSelect
              className="select"
              classNamePrefix="Select"
              closeMenuOnSelect={true}
              isClearable={true}
              options={locations.map((location) => ({
                value: location,
                label: location,
                key: location,
              }))}
              name="locations"
              id="location"
              value={
                props.values.locations
                  ? {
                      value: props.values.locations,
                      label: props.values.locations,
                    }
                  : { value: "", label: "City" }
              }
              onChange={(selectedOption) => {
                props.setFieldValue(
                  "locations",
                  selectedOption ? selectedOption.value : ""
                );
              }}
              placeholder="City"
            />
          </div>

          <div>
            <p className="mb-[14px] text-tritiaryGray text-[16px] font-[400] leading-[1.5]">
              Filter
            </p>
            <div className="mb-[32px]">
              <h2 className="border-text pb-[24px] text-primaryBlack text-[20px] font-[600] leading-[1.2] ">
                Vehicle equipment
              </h2>
              <ul className="mt-[24px]  w-[362px] flex flex-wrap gap-[10px] ">
                {["AC", "Automatic", "Kitchen", "TV", "Shower/WC"].map(
                  (equipment) => (
                    <li key={equipment}>
                      <button
                        type="button"
                        className={`flex flex-col items-center justify-center w-[114px] bg-transparent p-[17px_12px] border-solid border-[1px] border-tritiaryLightGray rounded-[10px] ${
                          props.values.vehicleEquipments === equipment
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          props.setFieldValue("vehicleEquipments", equipment)
                        }
                      >
                        <IconSwitch
                          name={convertToSlug(equipment)}
                          width={32}
                          height={32}
                        />
                        <p className="text-primaryBlack text-[16px] font-[500] leading-[1.25]">
                          {convertToSlug(equipment)}
                        </p>
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h2 className="border-text pb-[24px] text-primaryBlack text-[20px] font-[600] leading-[1.2] ">
                Vehicle type
              </h2>
              <ul className="mt-[24px]  w-[362px] flex  gap-[10px] ">
                {["Van", "Fully Integrated", "Alcove"].map((type) => (
                  <li key={type}>
                    <button
                      type="button"
                      className={`flex flex-col items-center justify-center w-[110px] h-[95px] bg-transparent border-solid border-[1px] border-tritiaryLightGray rounded-[10px] ${
                        props.values.vehicleTypes === type ? "selected" : ""
                      }`}
                      onClick={() => props.setFieldValue("vehicleTypes", type)}
                    >
                      {/* Ваші іконки тут */}
                      <IconSwitch
                        name={convertToSlug(type)}
                        width={40}
                        height={28}
                      />
                      <p className="text-primaryBlack text-[16px] font-[500] leading-[1.25]">
                        {type}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <SecondButton type={"submit"} label={"Search"} />
        </Form>
      )}
    </Formik>
  );
};
export default FilterSearch;
