type HashtagItemProps = {
  companyName: string;
};

export default function HashtagItem({ companyName }: HashtagItemProps) {
  return (
    <li>
      <button>#{companyName}</button>
    </li>
  );
}
