package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load("//javascript/angular2:build_defs.bzl", "ng_module")
load("//third_party/sassc:sass.bzl", "sass_binary")

ng_module(
    name = "app",
    srcs = [
        "app.ts",
        "app_module.ts",
    ],
    assets = [
        ":app_css",
        "app.ng.html",
    ],
    deps = [
        ":app_routing_module",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client:material_design",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/header",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/page_not_found",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/sidenav",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/baz",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/routes",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:flex-layout",
        "//third_party/javascript/angular2:material",
        "//third_party/javascript/angular2:platform_browser",
    ],
)

ng_module(
    name = "app_routing_module",
    srcs = [
        "app_routing_module.ts",
    ],
    deps = [
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/bar",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/home",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/page_not_found",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/services/routes",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:router",
    ],
)

sass_binary(
    name = "app_css",
    src = "app.scss",
    output_name = "app.css",
    deps = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:variables_sass"],
)
