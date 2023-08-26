import { RadioButton } from "react-native-paper";
import { queryServer } from "../mock-server/mock-server";
import { User } from "../Types/types";
import { Text } from "react-native-paper";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export default function UserTypeSelector({
  filter,
  setFilter,
  setUsers,
}: Props) {
  const launchSearch = (filter: string) => {
    setFilter(filter);
    // This line simulates my call to the backend
    const searchResult: User[] = queryServer(filter);
    setUsers(searchResult);
  };

  return (
    <>
      <Text variant="headlineMedium">User Types</Text>
      <RadioButton.Group
        onValueChange={(newValue) => launchSearch(newValue)}
        value={filter}
      >
        <RadioButton.Item
          testID="adminButton"
          label="Admin"
          value="Admin"
          style={{
            flexDirection: "row-reverse",
            alignSelf: "flex-start",
          }}
        />
        <RadioButton.Item
          testID="managerButton"
          label="Manager"
          value="Manager"
          style={{
            flexDirection: "row-reverse",
            alignSelf: "flex-start",
          }}
        />
      </RadioButton.Group>
    </>
  );
}
