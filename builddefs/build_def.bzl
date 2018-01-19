"""Common build defs for app."""

load(
    "//javascript/closure:builddefs.bzl",
    "CLOSURE_COMPILER_FLAGS_FULL",
    "CLOSURE_EXTERNS",
)

APP_EXTERNS = CLOSURE_EXTERNS

APP_COMPILER_FLAGS = CLOSURE_COMPILER_FLAGS_FULL + [
    "--hide_warnings_for=third_party/javascript",
    "--inject_library=es6/map",  #  Add polyfills to support browsers like IE.
]
