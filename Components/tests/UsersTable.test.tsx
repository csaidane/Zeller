import { screen, render } from "@testing-library/react-native";
import UsersTable from "../UsersTable";

const mockUsers = [
  { id: "1", name: "Random one", role: "Admin" },
  { id: "2", name: "Ozzy Ozzy", role: "Admin" },
  { id: "3", name: "Jonh Doe", role: "Admin" },
];

const mockUser = [{ id: "1", name: "Random two", role: "Manager" }];

describe("UsersTable component", () => {
  it("UI: a single user", async () => {
    render(<UsersTable filter="Admin" users={mockUser} />);
    const user = screen.getByText(/Random two/i);
    expect(user).toBeTruthy();
    const managers = screen.queryAllByText(/manager/i);
    expect(managers).toHaveLength(1);
  });

  it("UI: displays multiple users", async () => {
    render(<UsersTable filter="Admin" users={mockUsers} />);
    const user1 = screen.getByText(/Random one/i);
    expect(user1).toBeTruthy();

    const user2 = screen.getByText(/Ozzy Ozzy/i);
    expect(user2).toBeTruthy();

    const user3 = screen.getByText(/Jonh Doe/i);
    expect(user3).toBeTruthy();

    const admins = screen.getAllByText(/admin/i);
    expect(admins).toHaveLength(4);
    const managers = screen.queryByText(/manager/i);
    expect(managers).toBe(null);
  });
});
