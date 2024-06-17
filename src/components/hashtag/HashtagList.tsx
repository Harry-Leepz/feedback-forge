import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  listOfCompanies: string[];
};

export default function HashtagList({ listOfCompanies }: HashtagListProps) {
  return (
    <ul className='hashtags'>
      {listOfCompanies.map((company) => (
        <HashtagItem companyName={company} key={company} />
      ))}
    </ul>
  );
}
