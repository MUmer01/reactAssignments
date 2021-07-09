import { useParams } from "react-router-dom";

const SubTopic = () => {
  const { topic } = useParams();
  return (
    <div>
      <h1>Sub Topic: {topic}</h1>
    </div>
  );
};

export default SubTopic;
