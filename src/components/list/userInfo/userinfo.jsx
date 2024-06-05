import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";

const Userinfo = () => {
  const { currentUser } = useUserStore();

  // Ensure currentUser is defined before attempting to access its properties
  if (!currentUser) {
    return <div>Loading user info...</div>;
  }

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default Userinfo;
