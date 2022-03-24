import { ProfileIconContainer } from "./styles";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProfilePicture({
  userName = "User",
  width = "40px",
  height = "40px",
}) {
  const history = useHistory();
  const fullName = userName.toUpperCase().split(" ");
  const initials =
    fullName.length === 1
      ? fullName[0].split("")[0]
      : `${fullName.shift().charAt(0)}${fullName.pop().charAt(0)}`;

  return (
    <ProfileIconContainer onClick={()=>history.push("/user")} width={width} height={height}>
      {initials}
    </ProfileIconContainer>
  );
}
export default ProfilePicture;

