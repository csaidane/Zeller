import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Text, Divider, Card } from "react-native-paper";
import UserTypeSelector from "./Components/UserTypeSelector";
import UsersTable from "./Components/UsersTable";
import { User } from "./Types/types";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState<string>("");

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <UserTypeSelector
              filter={filter}
              setFilter={setFilter}
              setUsers={setUsers}
            />
          </Card.Content>
          <Divider />
          <View>
            <Card.Content>
              <UsersTable filter={filter} users={users} />
            </Card.Content>
          </View>
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  card: {
    minHeight: "50%",
  },
});
