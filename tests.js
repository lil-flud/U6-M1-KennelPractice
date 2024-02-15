describe("Kennel", () => {
  it("starts off with a default", () => {
    const defaultKennel = new Kennel();
    expect(defaultKennel.name).toBe("");
    expect(defaultKennel.dogs.length).toBe(0);
    expect(defaultKennel.nightlyCost).toBe(0);
    
  });
  it("can take parameters", () => {
    const DoggyDaycare = new Kennel("DoggyDaycare", ["Bella", "Millie"], 14);
    expect(DoggyDaycare.name).toBe("DoggyDaycare");
    expect(DoggyDaycare.dogs[0]).toBe("Bella");
    expect(DoggyDaycare.nightlyCost).toBe(14);
  });
  it("can board dogs", () => {
    const DoggyDaycare = new Kennel("DoggyDaycare", ["Bella", "Millie"], 14);
    expect(DoggyDaycare.dogs.length).toBe(2);
    DoggyDaycare.boardDog("Lakota");
    expect(DoggyDaycare.dogs.length).toBe(3);
  });
  
  it("allows dogs to be picked up", () => {
    const DoggyDaycare = new Kennel("DoggyDaycare", ["Bella", "Millie"], 14);
    expect(DoggyDaycare.dogs.length).toBe(2);
    DoggyDaycare.boardDog("Lakota");
    expect(DoggyDaycare.dogs.length).toBe(3);
    expect(DoggyDaycare.dogs[2]).toBe("Lakota");
    DoggyDaycare.pickUpDog("Lakota");
    expect(DoggyDaycare.dogs.length).toBe(2);
  });
});