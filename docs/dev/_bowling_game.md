---
markdown:
  image_dir: /docs/assets
  path: bowling_game.md
  ignore_from_front_matter: true
  absolute_image_path: false
---

## 基本仕様
+ 1投目で10ピンすべて倒したら、ストライク
+ スペアは、2投目で10ピンすべて倒したということ
+ 1投目が0点で2投目で10ピン倒してもスペア
+ ガターは、1投目に横のガターに落ちて1ピンも倒せないこと
+ ボウリングでの最高得点は300点で、パーフェクトと言う

## ユースケース
```puml
@startuml
left to right direction
skinparam packageStyle rectangle
actor Player
rectangle Bowling {
  Player -- (Strike)
  Player -- (Spare)
  Player -- (Gutter)
}
@enduml
```

### ユースケース１：ストライク
![](./images/strike.png)
```javascript {cmd="node"}
```

### ユースケース２：スペア
![](./images/spare.png)
```javascript {cmd="node"}
```

### ユースケース３：ガター
![](./images/gutter.png)
```javascript {cmd="node"}
```

### ユースケース４：パーフェクト
![](./images/perfect.png)
```javascript {cmd="node"}
```


### ユースケース５：サンプルゲーム
![](./images/score.png)
```javascript {cmd="node"}
```

## コアモデル
```puml
@startuml
class Game

@enduml
```

## 参照
+ [ボウリング](https://ja.wikipedia.org/wiki/%E3%83%9C%E3%82%A6%E3%83%AA%E3%83%B3%E3%82%B0)