namespace('my.namespace', function() {
    function myPrivateOutputFunction(text) {
            console.log(text);
        }

    var myPrivateVariable = 'Hello ';

    fun('test', function(name) {
            myPrivateOutputFunction(myPrivateVariable + name);
    });
});

namespace('my', function() {
    namespace('namespace', function() {
            clazz('MyInternalClazz', function() {
                        fun('test', function() {
                                        my.namespace.test('new syntax for OOP!');
                                    });
                    });
        });
});

var instance = new my.namespace.MyInternalClazz;
instance.test();

