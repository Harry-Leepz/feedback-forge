import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className='feedback-list'>
      <li className='feedback'>
        <button>
          <TriangleUpIcon />

          <span>593</span>
        </button>

        <div>
          <p>B</p>
        </div>

        <div>
          <p>Harry</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            quibusdam sapiente, illum aliquam ipsam placeat tempore aspernatur,
            quidem iste nam vitae repellat quis incidunt quasi laboriosam
            nostrum perspiciatis molestias iure!
          </p>
        </div>

        <p>4d ago</p>
      </li>
    </ol>
  );
}
