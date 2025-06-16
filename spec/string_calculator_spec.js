describe("Help ALF - findSpaceship", function () {
    it("returns 'Spaceship lost forever.' if map is empty", function () {
        expect(findSpaceship("")).toBe("Spaceship lost forever.");
    });

    it("returns 'Spaceship lost forever.' if map contains no 'X'", function () {
        const map = "...\n...\n...";
        expect(findSpaceship(map)).toBe("Spaceship lost forever.");
    });

    it("finds the spaceship at bottom-left corner [0, 0]", function () {
        const map = "...\n...\nX..";
        expect(findSpaceship(map)).toEqual([0, 0]);
    });


  

});
