package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load("//third_party/javascript/angular2_material:build_defs.bzl", "MATERIAL_SASS_INCLUDE_PATHS")
load("//third_party/sassc:sass.bzl", "sass_binary", "sass_library")

sass_binary(
    name = "material_theme_css",
    src = "_material-theme.scss",
    include_paths = MATERIAL_SASS_INCLUDE_PATHS,
    output_name = "material-theme.css",
    deps = ["//third_party/javascript/angular2_material:theming"],
)

sass_binary(
    name = "global_css",
    src = "global.scss",
    output_name = "global.css",
    deps = [
        "resets_sass",
        "variables_sass",
    ],
)

sass_library(
    name = "variables_sass",
    srcs = ["_variables.scss"],
)

sass_library(
    name = "resets_sass",
    srcs = ["_resets.scss"],
)
