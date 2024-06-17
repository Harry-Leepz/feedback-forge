import { useEffect, useState } from "react";
import HashtagList from "./hashtag/HashtagList";
import Container from "./layout/Container";
import Footer from "./layout/Footer";

import { TFeedbackItem } from "../lib/types";

export default function App() {
  const [feedbacks, setFeedbacks] = useState<TFeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbacks = selectedCompany
    ? feedbacks.filter((feedback) => feedback.company === selectedCompany)
    : feedbacks;

  // Get a list of companies from the feedbacks and remove duplicates
  const listOfCompanies = feedbacks
    .map((feedback) => feedback.company)
    .filter((company, index, self) => self.indexOf(company) === index);

  const handleSelectedCompany = (company: string) => {
    setSelectedCompany(company);
  };

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
    <div className='app'>
      <Footer />

      <Container
        loading={loading}
        errorMessage={errorMessage}
        feedbackItems={filteredFeedbacks}
        handleAddToList={handleAddToList}
      />

      <HashtagList
        listOfCompanies={listOfCompanies}
        handleSelectedCompany={handleSelectedCompany}
      />
    </div>
  );
}
