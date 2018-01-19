# Description:
#   Scaffolding sample app using SASS and advanced routing.
package(default_visibility = ["//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic:internal"])

load(
    "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/builddefs:build_def.bzl",
    "APP_EXTERNS",
    "APP_COMPILER_FLAGS",
)
load(
    "//javascript/typescript:build_defs.bzl",
    "ts_development_sources",
    "ts_devserver",
    "ts_config",
)
load(
    "//javascript/angular2:build_defs.bzl",
    "ng_service_worker_manifest",
    "ng_module",
)

# This rule produces a tsconfig.json file for editors/IDEs to understand
# the compiler options and project dependencies.
# It is first 'blaze run' to write symlinks into the client directory, which are
# checked into Piper.
# Later, other engineers will 'blaze build' or 'blaze test' this target to
# create or update the generated files that back the symlinks.
ts_config(
    name = "tsconfig",
    deps = [
        ":app_lib",
        ":init_tests",
        ":material_design",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/bar:bar_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo:foo_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo/fooone:fooone_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo/footwo:footwo_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/header:header_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/home:home_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/sidenav:sidenav_tests",
    ],
)

ng_module(
    name = "app_lib",
    srcs = [
        "main.ts",
    ],
    deps = [
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components:app",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:platform_browser",
    ],
)

ng_module(
    name = "material_design",
    srcs = [
        "material_design_module.ts",
    ],
    assets = ["index.html"],
    deps = [
        "//third_party/javascript/angular2:common",
        "//third_party/javascript/angular2:core",
        "//third_party/javascript/angular2:forms",
        "//third_party/javascript/angular2:material",
    ],
)

ts_development_sources(
    name = "dev_sources",
    deps = [
        ":app_lib",
        ":material_design",
    ],
)

ts_devserver(
    name = "devserver",
    data = [
        ":tsconfig",  # Only here so it gets rebuilt automatically.
    ],
    manifest = ":dev_sources",
    serving_path = "/app_bundle.js",
    static_files = [
        "index.html",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:global_css",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:material_theme_css",
    ] + glob(["images/*"]),
)

############################
# PRODUCTION SERVING RULES #
############################

# Create JS bundles for every supported locale.
js_binary(
    name = "app_bundle",
    defs = APP_COMPILER_FLAGS,
    externs_list = APP_EXTERNS,
    deps = [":app_lib"],
)

filegroup(
    name = "production_files",
    srcs = glob([
        "*.html",
        "styles/*.css",
        "images/*",
    ]) + [
        ":app_bundle",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:global_css",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:material_theme_css",
    ],
)

# IN PROGRESS: service worker support for Angular apps
# Follow b/35763474
ng_service_worker_manifest(
    name = "service_worker",
    manifest = ":ngsw-manifest.tpl.json",
    deps = [":production_files"],
)

# A trivial server for the example.
# Your application should use a real server instead.
sh_binary(
    name = "server",
    srcs = ["server.sh"],
    bash_version = "4",
    data = [
        "server.py",
        ":production_files",
        ":service_worker",
    ],
    deps = ["//util/shell/gbash"],
)

#################
# TESTING RULES #
#################

ng_module(
    name = "init_tests",
    testonly = 1,
    srcs = [
        "init_tests.ts",
    ],
    deps = [
        "//third_party/javascript/angular2:core_testing",
        "//third_party/javascript/angular2:platform_browser_dynamic_testing",
    ],
)

ts_development_sources(
    name = "dev_sources_for_test",
    testonly = 1,
    runtime_deps = [
        # Need this for global test providers to be initialized.
        ":init_tests",
    ],
    deps = [
        ":init_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/bar:bar_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo:foo_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo/fooone:fooone_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/foo/footwo:footwo_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/header:header_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/home:home_tests",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components/sidenav:sidenav_tests",
    ],
)

load("//testing/karma/builddefs:karma_web_test_suite.bzl", "karma_web_test_suite")

# Run iblaze run //experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client:unit_tests_local for
# automatic local test runs.
karma_web_test_suite(
    name = "unit_tests",
    browsers = ["//testing/web/browsers:chrome-linux"],
    data = [
        ":tsconfig",  # Only here so it gets rebuilt automatically.
    ],
    html_files = [
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:global.css",
        "//experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/styles:material-theme.css",
    ],
    manifest = ":dev_sources_for_test",
)
