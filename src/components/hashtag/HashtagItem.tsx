type HashtagItemProps = {
  companyName: string;
  onSelectedCompany: (company: string) => void;
};

export default function HashtagItem({
  companyName,
  onSelectedCompany,
}: HashtagItemProps) {
  return (
    <li>
      <button onClick={() => onSelectedCompany(companyName)}>
        #{companyName}
      </button>
    </li>
  );
}
