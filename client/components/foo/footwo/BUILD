load("//javascript/typescript:build_defs.bzl", "ts_library")

package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load("//javascript/angular2:build_defs.bzl", "ng_module")
load("//third_party/sassc:sass.bzl", "sass_binary")

sass_binary(
    name = "footwo_css",
    src = "footwo.scss",
    output_name = "footwo.css",
    deps = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:variables_sass"],
)

ng_module(
    name = "footwo",
    srcs = [
        "footwo.ts",
        "footwo_module.ts",
    ],
    assets = [
        ":footwo_css",
        "footwo.ng.html",
    ],
    deps = [
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:flex-layout",
    ],
)

ts_library(
    name = "footwo_tests",
    testonly = True,
)
