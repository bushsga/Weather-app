import { useState} from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from '../../api';

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
        .then((response) => response.json())
        .then((response) => {
           console.log('Response data:', response);
           if (response.data) {
            const options = response.data.map((city) => ({
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }));
            return { options };
           } else {
            return { options: [] };
           }
        })
        .catch((err) => console.error(err));
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

  return (
    <AsyncPaginate
       placeholder="Search for city"
       debounceTimeout={600}
       value={search}
       onChange={handleOnChange}
       loadOptions={loadOptions}
    />
  )
}

export default Search
