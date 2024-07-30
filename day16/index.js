// Activity1

function reverseString(str) {
    if (str === "" || str.length === 1) {

        return str
    }

    return reverseString(str)

}