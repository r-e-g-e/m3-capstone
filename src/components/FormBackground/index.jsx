import { RightImage, LeftImage, Container } from "./styles";

export default function FormImages({ children }) {
  return (
    <Container>
      <RightImage src="/assets/background/africaImage.svg" alt="africa" />
      {children}
      <LeftImage src="/assets/background/flowerImage.svg" alt="flowers" />
    </Container>
  );
}
