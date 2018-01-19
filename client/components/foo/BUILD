load("//javascript/typescript:build_defs.bzl", "ts_library")

package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load("//javascript/angular2:build_defs.bzl", "ng_module")
load("//third_party/sassc:sass.bzl", "sass_binary")

sass_binary(
    name = "foo_css",
    src = "foo.scss",
    output_name = "foo.css",
    deps = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:variables_sass"],
)

ng_module(
    name = "foo",
    srcs = [
        "foo.ts",
        "foo_module.ts",
        "foo_routing_module.ts",
    ],
    assets = [
        ":foo_css",
        "foo.ng.html",
    ],
    deps = [
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client:material_design",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo/fooone",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo/footwo",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/baz",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/routes",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:flex-layout",
        "//third_party/javascript/angular2:router",
        "//third_party/javascript/node_modules/rxjs",
    ],
)

ts_library(
    name = "foo_tests",
    testonly = True,
)
