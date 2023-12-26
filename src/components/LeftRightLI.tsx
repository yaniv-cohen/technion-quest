function LeftRightLI({
  text,
  title,
}: Readonly<{ text: string; title: string }>) {
  return (
    <li className="flexRow LeftRightLI">
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
}

export default LeftRightLI;
