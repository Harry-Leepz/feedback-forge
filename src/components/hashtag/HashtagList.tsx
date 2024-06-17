import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  listOfCompanies: string[];
  handleSelectedCompany: (company: string) => void;
};

export default function HashtagList({
  listOfCompanies,
  handleSelectedCompany,
}: HashtagListProps) {
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
