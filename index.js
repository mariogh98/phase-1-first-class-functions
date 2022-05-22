function receivesAFunction(Spy) {
    Spy();
}

function returnsANamedFunction() {
    return function namedFunction() {

    }
}

function returnsAnAnonymousFunction () {
    return function() {
    }
}