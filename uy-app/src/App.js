export default App;

import ReactSearchBox from "react-search-box";

export default function App() {
  return (
    <div>
      <h1>Unspam Yourself!</h1>
      <ReactSearchBox
        placeholder="Search for an org"
        data={[
          {
            key: "Make a wish foundation",
            value: "Make a Wish Foundation"
          },
          {
            key: "World Wildlife Fund",
            value: "World Wildlife Fund"
          },
          {
            key: "Wounded Warrior Project",
            value: "Wounded Warrior Project"
          }
        ]}
        onSelect={(record: any) => console.log(record)}
        onFocus={() => {
          console.log("This function is called when is focussed");
        }}
        onChange={(value) => console.log(value)}
        autoFocus
        leftIcon={<>🔎</>}
        iconBoxSize="48px"
      />
    </div>
  );
}
