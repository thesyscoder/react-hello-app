import "../styles/styles.css";

const inputChange = (event) => {
  console.log("I was changed");
  console.log(event.target.value);
};
const Header = () => {
  return (
    <header>
      <h1 onClick={() => console.log("This is logo")}>Logo</h1>
      <input onChange={inputChange} />
    </header>
  );
};
export default Header;
