import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getLocations } from "../../redux/catalogue/catalogue-operation";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import ReactSelect from "react-select";
import MainButton from "../Button/MainButton";
import IconSwitch from "../IconSwitch/IconSwitch";

import "../components.scss";

interface MyFormValues {
  locations: string;
  vehicleEquipments: Record<string, boolean>;
  vehicleTypes: string;
}
interface FilterSearchProps {
  onFilterChange: (values: MyFormValues) => void;
}

const initialValues: MyFormValues = {
  locations: "",
  vehicleEquipments: {
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
  },
  vehicleTypes: "",
};

const schema = Yup.object().shape({
  locations: Yup.string().nullable().required("Location is required"),
  vehicleEquipments: Yup.object().required("Vehicle Equipment is required"),
  vehicleTypes: Yup.string().nullable().required("Vehicle Type is required"),
});

const FilterSearch = ({ onFilterChange }: FilterSearchProps) => {
  const dispatch = useAppDispatch();

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
    onFilterChange(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form
          className="w-full lg:w-[362px] flex flex-col gap-[32px]"
        >
          <div className="md:w-[362px]">
            <p className="mb-[8px] text-tritiaryGray text-[16px] font-[400] leading-[1.5]">
              Location
            </p>
            <ReactSelect
              className="select"
              classNamePrefix="Select"
              closeMenuOnSelect={true}
              isClearable={true}
              options={locations.map(location => ({
                value: location,
                label: location,
              }))}
              value={
                values.locations
                  ? { value: values.locations, label: values.locations }
                  : null
              }
              onChange={(selectedOption) => {
                setFieldValue("locations", selectedOption ? selectedOption.value : "");
              }}
              placeholder="City"
            />
          </div>

          <div>
            <p className="mb-[14px] text-tritiaryGray text-[16px] font-[400] leading-[1.5]">
              Filter
            </p>
            <div className="flex flex-col md:flex-row xl:flex-col gap-[28px] ">
            <div className="mb-[32px]">
              <h2 className="border-text pb-[16px] md:pb-[24px] text-primaryBlack text-[16px] md:text-[20px] font-[600] leading-[1.2] ">
                Vehicle equipment
              </h2>
              <ul className="mt-[24px] w-full sm:w-[350px] lg:w-[362px] flex flex-wrap gap-[20px] lg:gap-[10px] ">
                {["AC", "Automatic", "Kitchen", "TV", "Bathroom"].map(
                  (equipment) => (
                    <li key={equipment} className="w-[calc((100%-40px)/3)] ">
                        <button
                        type="button"
                        className={`w-full flex flex-col gap-[8px] items-center justify-center bg-transparent p-[17px_12px] border-solid border-[1px] border-tritiaryLightGray rounded-[10px] ${
                          values.vehicleEquipments[equipment]
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          setFieldValue("vehicleEquipments", {
                            ...values.vehicleEquipments,
                            [equipment]: !values.vehicleEquipments[equipment],
                          })
                        }
                      >
                        <IconSwitch
                          name={convertToSlug(equipment)}
                          width={32}
                          height={32}
                        />
                        <p className="text-primaryBlack text-[12px] md:text-[16px] font-[500] leading-[1.25]">
                          {convertToSlug(equipment)}
                        </p>
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h2 className="border-text pb-[16px] md:pb-[24px] text-primaryBlack text-[16px] md:text-[20px] font-[600] leading-[1.2] ">
                Vehicle type
              </h2>
              <ul className="mt-[24px] w-full sm:w-[350px] lg:w-[362px] flex gap-[20px] lg:gap-[10px] ">
                {["Van", "Fully Integrated", "Alcove"].map((type) => (
                  <li key={type} className="w-[calc((100%-40px)/3)] ">
                    <button
                      type="button"
                      className={`w-full flex flex-col gap-[8px] items-center justify-center bg-transparent p-[17px_12px] border-solid border-[1px] border-tritiaryLightGray rounded-[10px] ${
                        values.vehicleTypes === type ? "selected" : ""
                      }`}
                      onClick={() => setFieldValue("vehicleTypes", type)}
                    >
                    
                      <IconSwitch
                        name={convertToSlug(type)}
                        width={32}
                        height={32}
                      />
                      <p className="h-[40px] text-primaryBlack text-[12px] md:text-[16px] font-[500] leading-[1.25]">
                        {type}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
          <div className="self-center">
            <MainButton type={"submit"} label={"Search"} />
          </div>

        </Form>
      )}
    </Formik>
  );
};
export default FilterSearch;
