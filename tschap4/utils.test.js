const utils = require("./utils")
// @ponicode
describe("utils.printDetails", () => {
    test("0", () => {
        let callFunction = () => {
            utils.printDetails({ price: 258.00, name: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.printDetails({ price: 258.00, name: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.printDetails({ price: 977.00, name: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.printDetails({ price: 392.00, name: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.printDetails({ price: 977.00, name: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.printDetails(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
