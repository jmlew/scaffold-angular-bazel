package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load("//javascript/angular2:build_defs.bzl", "ng_module")
load("//third_party/sassc:sass.bzl", "sass_binary")

sass_binary(
    name = "sidenav_css",
    src = "sidenav.scss",
    output_name = "sidenav.css",
    deps = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:variables_sass"],
)

ng_module(
    name = "sidenav",
    srcs = [
        "sidenav.ts",
        "sidenav_module.ts",
    ],
    assets = [
        ":sidenav_css",
        "sidenav.ng.html",
    ],
    deps = [
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client:material_design",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/routes",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:flex-layout",
        "//third_party/javascript/angular2:router",
    ],
)

ng_module(
    name = "sidenav_tests",
    testonly = True,
    srcs = ["sidenav_test.ts"],
    deps = [
        ":sidenav",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:core_testing",
    ],
)
