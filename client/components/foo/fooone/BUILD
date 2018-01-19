load("//javascript/typescript:build_defs.bzl", "ts_library")

package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load("//javascript/angular2:build_defs.bzl", "ng_module")
load("//third_party/sassc:sass.bzl", "sass_binary")

sass_binary(
    name = "fooone_css",
    src = "fooone.scss",
    output_name = "fooone.css",
    deps = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:variables_sass"],
)

ng_module(
    name = "fooone",
    srcs = [
        "fooone.ts",
        "fooone_module.ts",
    ],
    assets = [
        ":fooone_css",
        "fooone.ng.html",
    ],
    deps = [
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:flex-layout",
    ],
)

ts_library(
    name = "fooone_tests",
    testonly = True,
)
