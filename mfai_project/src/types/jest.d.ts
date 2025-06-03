import '@testing-library/jest-dom';
import { JestMock } from "jest-mock";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveStyle(style: Record<string, string | number>): R;
      toHaveClass(className: string): R;
      toHaveAttribute(attr: string, value?: string): R;
      toHaveTextContent(text: string | RegExp): R;
      toBeVisible(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeRequired(): R;
      toBeInvalid(): R;
      toBeValid(): R;
      toHaveFocus(): R;
      toHaveValue(value: string | string[] | number): R;
      toBeChecked(): R;
      toBePartiallyChecked(): R;
      toHaveDescription(text: string | RegExp): R;
      toHaveAccessibleName(name: string | RegExp): R;
      toHaveAccessibleDescription(description: string | RegExp): R;
      toHaveRole(role: string, options?: { hidden?: boolean }): R;
      toBeEmptyDOMElement(): R;
      toContainElement(element: HTMLElement | null): R;
      toContainHTML(htmlText: string): R;
      toHaveDisplayValue(value: string | string[] | RegExp): R;
      toHaveFormValues(expectedValues: Record<string, string | string[] | number>): R;
      toBeInTheDOM(): R;
    }
    interface Mock<T = unknown> extends JestMock<T> {
      mockClear(): void;
      mockReset(): void;
      mockRestore(): void;
      mockImplementation(fn: (...args: unknown[]) => unknown): this;
      mockImplementationOnce(fn: (...args: unknown[]) => unknown): this;
      mockReturnThis(): this;
      mockReturnValue(value: unknown): this;
      mockReturnValueOnce(value: unknown): this;
      mockResolvedValue(value: unknown): this;
      mockResolvedValueOnce(value: unknown): this;
      mockRejectedValue(value: unknown): this;
      mockRejectedValueOnce(value: unknown): this;
    }
  }
} 