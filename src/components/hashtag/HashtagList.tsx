import HashtagItem from "./HashtagItem";

import useFeedbackItemsContext from "../../hooks/useFeedbackItemsContext";

export default function HashtagList() {
  const { listOfCompanies, handleSelectedCompany } = useFeedbackItemsContext();
  return (
    <ul className='hashtags'>
      {listOfCompanies.map((company) => (
        <HashtagItem
          companyName={company}
          key={company}
          onSelectedCompany={handleSelectedCompany}
        />
      ))}
    </ul>
  );
}
