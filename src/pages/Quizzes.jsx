import QuizGrid from "../components/QuizGrid";

export default function Quizzers() {
  // You could later fetch this from your Django API
  const allQuizzes = [
    { title: "SCIENCE & TECHNOLOGY", status: "Published", difficulty: "Medium", qs: "25", time: "60m", tries: "410", iconUrl: "../public/science.png" },
    { title: "MATHEMATICS", status: "Draft", difficulty: "Easy", qs: "18", time: "30m", tries: "0", iconUrl: "../public/Math.png" },
    { title: "CHEMISTRY", status: "Published", difficulty: "Hard", qs: "22", time: "50m", tries: "310", iconUrl: "../public/chem.png" },
    { title: "BIOLOGY", status: "Published", difficulty: "Hard", qs: "22", time: "50m", tries: "310", iconUrl: "../public/bio.png" },
    { title: "GENERAL KNOWLEDGE", status: "Published", difficulty: "Hard", qs: "22", time: "50m", tries: "310", iconUrl: "../public/general.png" },
  ];

  return (
    <div className="main-quizzers-area">


      {/* Simply call the grid component and pass the data */}
      <QuizGrid data={allQuizzes} />
    </div>
  );
}