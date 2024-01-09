import Button from "react-bootstrap/Button";
export default function TicketCard({
  id,
  name,
  email,
  description,
  type,
  date,
}) {
  function truncate(str) {
    return str.length > 10 ? str.substring(0, 55) + "..." : str;
  }
  function handleClick() {}
  const desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`;
  return (
    <>
      <Button
        variant="light"
        onClick={handleClick}
        style={{
          padding: "0px 0px 0px 0px",
        }}
      >
        <div
          style={{
            border: "1px solid",
            width: "400px",
            minHeight: "100px",
            maxHeight: "150px",
            textAlign: "left",
            alignContent: "flex-start",
          }}
        >
          <h6>{name}</h6>
          <h6>{id}</h6>
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {truncate(desc)}
          </span>
        </div>
      </Button>
    </>
  );
}
