## Compass

```
compass compile C:/E/github/compass-demo C:/E/github/compass-demo/sass/screen.scss --relative-assets --time --output-style nested --css-dir ./css --sass-dir sass -I ./
```

## Compass compile command
```base
Usage: compass compile [path/to/project] [path/to/project/src/file.sass ...] [op
tions]

Description:
compile project at the path specified or the current directory if not specified.


Options:
        --[no-]sourcemap             Generate a sourcemap during compilation.
        --time                       Display compilation times.
        --debug-info                 Turns on sass's debuging information
        --no-debug-info              Turns off sass's debuging information
    -r, --require LIBRARY            Require the given ruby LIBRARY before runni
ng commands.
                                       This is used to access compass plugins wi
thout having a
                                       project configuration file.
    -l, --load FRAMEWORK_DIR         Load the framework or extensions found in t
he FRAMEWORK directory.
    -L, --load-all FRAMEWORKS_DIR    Load all the frameworks or extensions found
 in the FRAMEWORKS_DIR directory.
    -I, --import-path IMPORT_PATH    Makes files under the IMPORT_PATH folder fi
ndable by Sass's @import directive.
    -q, --quiet                      Quiet mode.
        --trace                      Show a full stacktrace on error
        --force                      Allows compass to overwrite existing files.

        --boring                     Turn off colorized output.
    -c, --config CONFIG_FILE         Specify the location of the configuration f
ile explicitly.
        --app APP                    Tell compass what kind of application it is
 integrating with. E.g. rails
        --app-dir PATH               The base directory for your application.
        --sass-dir SRC_DIR           The source directory where you keep your sa
ss stylesheets.
        --css-dir CSS_DIR            The target directory where you keep your cs
s stylesheets.
        --images-dir IMAGES_DIR      The directory where you keep your images.
        --javascripts-dir JS_DIR     The directory where you keep your javascrip
ts.
        --fonts-dir FONTS_DIR        The directory where you keep your fonts.
    -e, --environment ENV            Use sensible defaults for your current envi
ronment.
                                       One of: development (default), production

    -s, --output-style STYLE         Select a CSS output mode.
                                       One of: nested, expanded, compact, compre
ssed
        --relative-assets            Make compass asset helpers generate relativ
e urls to assets.
        --no-line-comments           Disable line comments.
        --http-path HTTP_PATH        Set this to the root of your project when d
eployed
        --generated-images-path GENERATED_IMAGES_PATH
                                     The path where you generate your images
    -?, -h, --help                   Show this message
```