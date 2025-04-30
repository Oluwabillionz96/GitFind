import Card from "./Card";

const TopProfileCard = ({ data }) => {
  let date = new Date(data?.created_at);
  date = date.toDateString().split(" ");
  date = date.splice(1, date.length - 1);
  date = `${date.slice(0, 1)} ${date.slice(2, 3)}`;

  return (
    <>
      <Card data={data} date={date} />
    </>
  );
};

export default TopProfileCard;
