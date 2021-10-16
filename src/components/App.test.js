const rewire = require("rewire")
const App = rewire("./App")
const createApolloClient = App.__get__("createApolloClient")
// @ponicode
describe("createApolloClient", () => {
    test("0", () => {
        let callFunction = () => {
            createApolloClient("oAuthToken")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createApolloClient("u7djsl186ksk99-DsklLk89")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createApolloClient(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
