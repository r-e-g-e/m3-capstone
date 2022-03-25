import { ProfileIconContainer } from "./styles";

function ProfilePicture({
  userName = "User",
  width = "40px",
  height = "40px",
}) {
  const fullName = userName.toUpperCase().split(" ");
  const initials =
    fullName.length === 1
      ? fullName[0].split("")[0]
      : `${fullName.shift().charAt(0)}${fullName.pop().charAt(0)}`;

  return (
    <ProfileIconContainer width={width} height={height}>
      {initials}
    </ProfileIconContainer>
  );
}
export default ProfilePicture;

