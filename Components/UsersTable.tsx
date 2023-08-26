import { StyleSheet, View } from "react-native";
import { Text, Avatar } from "react-native-paper";
import { User } from "../Types/types";
import { ScrollView } from "react-native";

interface Props {
  users: User[];
  filter: string;
}

export default function UsersTable({ users, filter }: Props) {
  return (
    <>
      <Text variant="headlineMedium" style={{ marginBottom: 8, marginTop: 8 }}>
        {`${filter} Users`}
      </Text>
      {users.map((user) => {
        return (
          <View style={styles.userTable} key={user.id}>
            <Avatar.Text
              size={32}
              label={user.name.charAt(0)}
              style={{ marginTop: 8, marginRight: 8 }}
            />
            <View>
              <Text variant="titleLarge">{user.name}</Text>
              <Text variant="bodyMedium">{user.role}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  userTable: {
    flexDirection: "row",
    marginBottom: 8,
  },
});
