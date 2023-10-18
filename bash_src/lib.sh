LIB_SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

onwindow_fn() {
    echo "hello from onwindow_fn $(pwd) - LIB_SCRIPT_DIR $LIB_SCRIPT_DIR"
}

onbody_fn() {
    echo "onbody_fn   $(pwd)"
    echo "onbody_fn   LIB_SCRIPT_DIR=$LIB_SCRIPT_DIR"
    $LIB_SCRIPT_DIR/gnostr-git-sh-setup
    $LIB_SCRIPT_DIR/gnostr-git-instaweb ##--start ##\
    ## restart the server every time the app starts?
}

hello_fn() {
    echo "hello from hello_fn    $(pwd) - LIB_SCRIPT_DIR $LIB_SCRIPT_DIR"
}

hello_fn2() {
    echo "hello from hello_fn2   $(pwd) - LIB_SCRIPT_DIR $LIB_SCRIPT_DIR"
}
