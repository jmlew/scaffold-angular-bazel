package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load("//javascript/angular2:build_defs.bzl", "ng_module")
load("//third_party/sassc:sass.bzl", "sass_binary")

sass_binary(
    name = "header_css",
    src = "header.scss",
    output_name = "header.css",
    deps = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:variables_sass"],
)

ng_module(
    name = "header",
    srcs = [
        "header.ts",
        "header_module.ts",
    ],
    assets = [
        ":header_css",
        "header.ng.html",
    ],
    deps = [
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client:material_design",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/baz",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/routes",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:flex-layout",
        "//third_party/javascript/angular2:material",
        "//third_party/javascript/angular2:router",
        "//third_party/javascript/node_modules/rxjs",
    ],
)

ng_module(
    name = "header_tests",
    testonly = True,
    srcs = ["header_test.ts"],
    deps = [
        ":header",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:core_testing",
    ],
)
