import Header from "../components/Header";
import ListBox from "../components/ListBox";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="grid h-full w-full grid-rows-3 p-6">
      <Header />
      <ListBox />
    </div>
  );
};

export default Home;
