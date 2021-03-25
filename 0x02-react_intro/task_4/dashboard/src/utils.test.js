import { getFullYear,getFooterCopy, getLatesNotification} from "./utils";

it("should return the current year", () => {
    expect(getFullYear()).toBe(2021);
});

it("should return the correct string when the argument is true", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
});

it("should return the correct string when the argument is false", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

it("should return the right string for the function getLatesNotifications", () => {
    expect(getLatesNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});