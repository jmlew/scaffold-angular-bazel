package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load("//javascript/angular2:build_defs.bzl", "ng_module")
load("//third_party/sassc:sass.bzl", "sass_binary")

sass_binary(
    name = "home_css",
    src = "home.scss",
    output_name = "home.css",
    deps = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:variables_sass"],
)

ng_module(
    name = "home",
    srcs = [
        "home.ts",
        "home_module.ts",
    ],
    assets = [
        ":home_css",
        "home.ng.html",
    ],
    deps = [
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client:material_design",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/baz",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/routes",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:flex-layout",
        "//third_party/javascript/angular2:router",
    ],
)

ng_module(
    name = "home_tests",
    testonly = True,
    srcs = ["home_test.ts"],
    deps = [
        ":home",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:core_testing",
    ],
)
