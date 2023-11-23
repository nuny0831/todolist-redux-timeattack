import { useNavigate } from "react-router-dom";



const Detail = () => {
  const navigate = useNavigate();
  return <div>
    <button onClick={() => navigate('/')}>이전화면</button>
  </div>;
};

export default Detail;
