import Button from "@/components/buttons/buttons";
import { render } from "@testing-library/react";

describe("button", () => {
  it("renders a button with text", () => {
    const renderInstance = render(<Button onClick={() => {}}>Button</Button>);
    expect(renderInstance).toBeTruthy();
  });
});
