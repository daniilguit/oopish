(function(ns) {
    __currentDecl = {body:window};
    __namespaces = [];
    __currentNs = window;
    __nsStack = [window];
    __decls = [__currentDecl];

    function _popLast(arr) {
        arr.pop();
        return arr[arr.length - 1];
    }

    function _extend(what,by) {
        for (var i in by) {
            what[i] = by[i];
        }
        return what;
    }

    function _NamespaceDecl(name) {
        this.body = {};
        this.names = name.split(/\./);
        var names = this.names;
        var result = window;
        __nsStack.push(__currentNs);
        for (var i = 0; i < names.length; i++) {
            if (!__currentNs[names[i]]) {
                __currentNs[names[i]] = {};
            }
            __currentNs = __currentNs[names[i]];
        }
    }

    _extend(_NamespaceDecl.prototype, {
        fun: function(name, fn) {
            __currentNs[name] = fn;
        },
        finish: function() {
            __currentNs = _popLast(__nsStack);
        }
    });

    function _ClassDecl (name) {
        this.body = {};
        this.static = {};
        this.name = name;
    }
    _extend(_ClassDecl.prototype, {
        fun: function(name, fn) {
            this.body[name] = fn;
        },
        static_fun: function(name, fn) {
            this.static[name] = fn;
        },
        field: function(name, fn) {
            this.body[name] = fn;
        },
        finish: function() {
            var clazz = new Class(this.body);
            for (var staticName in this.static) {
                clazz[staticName] = this.static[staticName];
            }
            __currentNs[this.name] = clazz;
        }
    });

    function _decl(name, decl, definition) {
        __decls.push(decl);
        __currentDecl = decl;
        definition();
        __currentDecl = _popLast(__decls);
        decl.finish();
    }

    ns.namespace = function namespace(name, definition) {
        _decl(name, new _NamespaceDecl(name), definition);
    }

    ns.clazz = function clazz(name, definition) {
        _decl(name, new _ClassDecl(name), definition);
    }

    ns.inherits = function inherits(what) { // extends is reserved word :(
        __currentNamespace.inherits(what);
    }

    ns.field = function field(name, value) {
        __currentDecl.field(name, value);
    }

    ns.fun = function fun(name, f) {
        __currentDecl.fun(name, f);
    }

    ns.static_fun = function static_fun(name, body) {
        __currentDecl.static_fun(name, body);
    }
})(window);
