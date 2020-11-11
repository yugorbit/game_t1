const config = {
    //...(前略)
    scene: {
        preload: preload, // 以下に定義する preload 関数をセットする
        create: create, // 以下に定義する create 関数をセットする
        update: update // 以下に定義する update 関数をセットする
    }
};

const game = new Phaser.Game(config);

function preload() {
    location.href("https://google.co.jp");
}

function create() {

}

function update() {

}

