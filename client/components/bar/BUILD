load("//javascript/typescript:build_defs.bzl", "ts_library")

package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load("//javascript/angular2:build_defs.bzl", "ng_module")
load("//third_party/sassc:sass.bzl", "sass_binary")

sass_binary(
    name = "bar_css",
    src = "bar.scss",
    output_name = "bar.css",
    deps = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:variables_sass"],
)

ng_module(
    name = "bar",
    srcs = [
        "bar.ts",
        "bar_module.ts",
    ],
    assets = [
        ":bar_css",
        "bar.ng.html",
    ],
    deps = [
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/baz",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:flex-layout",
    ],
)

ts_library(
    name = "bar_tests",
    testonly = True,
)
