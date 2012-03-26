Small JavaScript library for better OOP syntax
=============

This is small JavaScript lib that provides simple syntax for Classes & Packages in JavaScript language. Current implementation is for MooTools OOP, but it can be very easilly modified to support any other OOP library (see _ClassDecl definition) 

Example
=============

    namespace('my.namespace', function() {
        function myPrivateOutputFunction(text) {
        console.log(text);
        }

        var myPrivateVariable = 'Hello ';

        fun('test', function(name) {
            myPrivateOutputFunction(myPrivateVariable + name);
            })
        };
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


