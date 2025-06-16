describe("Help ALF - findSpaceship", function () {
  it("returns 'Spaceship lost forever.' if map is empty", function () {
    expect(findSpaceship("")).toBe("Spaceship lost forever.");
  });
});
