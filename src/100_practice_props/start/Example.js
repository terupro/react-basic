import Profile from "./components/Profile";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK" },
  { name: "John Doe", age: 20, country: "Japan" },
];

const Example = () => {
  return (
    <div>
      {profile.map((data) => {
        return (
          <Profile name={data.name} age={data.age} country={data.country} />
        );
      })}
    </div>
  );
};

export default Example;
