import { lbtt } from "./lbtt";

describe("lbtt", () => {
  it("should return a number", () => {
    expect(typeof lbtt()).toBe("number");
  });
  it("should return 0 if given a value of zero", () => {
    expect(lbtt(0)).toBe(0);
  });
  it("should return 0 if given a value less than 145000", () => {
    expect(lbtt(10)).toBe(0);
    expect(lbtt(100)).toBe(0);
    expect(lbtt(145000)).toBe(0);
  });
  it("should calculte the tax for specific values", () => {
    expect(lbtt(145001)).toBe(0.02);
    expect(lbtt(250000)).toBe(2100);
    expect(lbtt(250001)).toBe(2100.05);
    expect(lbtt(325000)).toBe(5850);
    expect(lbtt(325001)).toBe(5850.1);
    expect(lbtt(750000)).toBe(48350);
    expect(lbtt(750001)).toBe(48350.12);
    expect(lbtt(999999)).toBe(78349.88);
  });
  it("should only return to 2 decimal places", () => {
    expect(lbtt(1234567890)).toBe(148106496.8);
  });
});
