import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <p>{user.nom}</p>
    </div>
  );
};
export default UserProfile;
