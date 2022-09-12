    const {fetchData} = require('../../api/sampleApi')
     const mockAlbums = require('../mock/mockAxios')
     
     jest.mock("axios")



    // beforeAll(() =>{
    //     console.log("BEFORE ALL");
    // })

    // beforeEach(() =>{
    //     console.log("BEFORE EACH");
    // })

    // afterEach(() =>{
    //     console.log("AFTER EACH EACH");
    // })

    // afterAll(() =>{
    //     console.log("BEFORE ALL");
    // })

    describe("verify api response", () => {
        it("mock axios", async () => {
            // jest.spyOn(axios,"get").mockReturnValueOnce({
                mockAlbums();
             const dataValue = await fetchData();
             expect(dataValue[0].title).toBe("Good Morning")
         });
    // it('should return correct todo',async () => {
    //     const todo = await fetchData(1);
    //     expect(todo.title).toBe("Good Morning")
    // })
    });



