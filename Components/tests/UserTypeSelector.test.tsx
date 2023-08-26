import { screen, render, fireEvent } from "@testing-library/react-native";
import UserTypeSelector from "../UserTypeSelector";
import { queryServer } from "../../mock-server/mock-server";

jest.mock("../../mock-server/mock-server", () => ({
  ...jest.requireActual("../../mock-server/mock-server"),
  queryServer: jest.fn(),
}));
const mockQueryServer = queryServer as unknown as jest.Mock<typeof queryServer>;

describe("UsersTypeSelector component", () => {
  it("UI: displays both buttons and both labels", async () => {
    render(
      <UserTypeSelector
        filter="Admin"
        setFilter={jest.fn()}
        setUsers={jest.fn()}
      />
    );
    const adminLabel = screen.getByText(/admin/i);
    expect(adminLabel).toBeTruthy();

    const managerLabel = screen.getByText(/manager/i);
    expect(managerLabel).toBeTruthy();

    const adminButton = screen.getByTestId("adminButton");
    expect(adminButton).toBeTruthy();

    const managerButton = screen.getByTestId("managerButton");
    expect(managerButton).toBeTruthy();
  });

  it("behaviour: successfully calls the back-end on press", async () => {
    const spyOnSetUsers = jest.fn();
    render(
      <UserTypeSelector
        filter="Admin"
        setFilter={jest.fn()}
        setUsers={spyOnSetUsers}
      />
    );
    const adminButton = screen.getByTestId("adminButton");
    fireEvent.press(adminButton);
    expect(mockQueryServer).toBeCalledWith("Admin");

    const managerButton = screen.getByTestId("managerButton");
    fireEvent.press(managerButton);
    expect(mockQueryServer).toBeCalledWith("Manager");

    expect(mockQueryServer).toHaveBeenCalledTimes(2);
    expect(spyOnSetUsers).toBeCalledTimes(2);
  });
});
