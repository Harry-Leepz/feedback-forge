import { useEffect, useMemo, useState, createContext } from "react";
import { TFeedbackItem } from "../lib/types";

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemsContext = {
  feedbacks: TFeedbackItem[];
  loading: boolean;
  errorMessage: string;
  listOfCompanies: string[];
  handleAddToList: (newFeedback: string) => void;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
);

export default function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProviderProps) {
  const [feedbacks, setFeedbacks] = useState<TFeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Get a list of companies from the feedbacks and remove duplicates
  const listOfCompanies = useMemo(
    () =>
      feedbacks
        .map((feedback) => feedback.company)
        .filter((company, index, self) => self.indexOf(company) === index),
    [feedbacks]
  );

  // Add a new feedback item to the list
  const handleAddToList = async (newFeedback: string) => {
    const companyName = newFeedback
      .split(" ")
      .find((word: string) => word.startsWith("#"))!
      .substring(1);

    const newFeedbackItem: TFeedbackItem = {
      text: newFeedback,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      id: new Date().getTime(),
    };

    setFeedbacks([...feedbacks, newFeedbackItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedbackItem),
      }
    );
  };

  // Fetch feedbacks from the API
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!response.ok) {
          throw new Error("An error occurred while fetching feedbacks.");
        }
        const data = await response.json();
        setFeedbacks(data.feedbacks);
      } catch (error) {
        setErrorMessage("An error occurred while fetching feedbacks.");
      } finally {
        setLoading(false);
      }
    };
    fetchFeedback();
  }, []);

  return (
    <FeedbackItemsContext.Provider
      value={{
        feedbacks,
        loading,
        errorMessage,
        listOfCompanies,
        handleAddToList,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
