C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for p in index terms privacy; do f=$p; [ $p = index ] && f=index.html || f=$p/index.html; "$C" --headless=new --disable-gpu --hide-scrollbars --window-size=1100,1300 --allow-file-access-from-files --screenshot=$1/$p.png "file://$1/$f" >/dev/null 2>&1; done
