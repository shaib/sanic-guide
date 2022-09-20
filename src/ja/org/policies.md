# ポリシー

## バージョン進行

Sanicは[カレンダーバージョン進行](https://calver.org/)、通称"calver"を使用しています。 より明確にするため、次のパターンを使用します:

```
YY.MM.MICRO
```

基本的に、バージョンは`YY.MM`形式で参照されます。 `MICRO`番号は`0`から順番に増えるパッチバージョンを表します。

## リリーススケジュール

1年につき4回(3,6,9,12月)のリリーススケジュールがあります。 したがって、年間でリリースされるバージョンは、`YY.3`, `YY.6`, `YY.9`, `YY.12`の4つです。

このリリーススケジュールでは以下のものを提供します。

- 予測可能なリリース間隔、
- 機能を定期的にリリースできる比較的短い開発ウィンドウ、
- コントロールされた[非推奨通知](#deprecation)、そして、
- 毎年のLTSとの一貫した安定性。

そして、年間リリースサイクルは私たちの経営モデル[S.C.O.P.E.](./scope.md)と組み合わせて使用されます。

### 長期サポートと暫定リリース

Sanicは毎年12月に長期サポートリリース(通称LTS)をリリースします。 LTSリリースはバグ修正やセキュリティアップデートを**24ヶ月間**サポートします。 年間を通じて中間リリースは3か月ごとに行われ、次のリリースまでサポートされます。

| バージョン      | LTS        | サポート状況                    |
| ---------- | ---------- | ------------------------- |
| 22.6       |            | :white_check_mark:      |
| 22.3       |            | :x:                       |
| 2021年12月まで | 2022年12月まで | :white_check_mark:      |
| 21.9       |            | :x:                       |
| 21.6       |            | :x:                       |
| 21.3       |            | :x:                       |
| 20.12      | 2022年12月まで | :ballot_box_with_check: |
| 20.9       |            | :x:                       |
| 20.6       |            | :x:                       |
| 20.3       |            | :x:                       |
| 19.12      |            | :x:                       |
| 19.9       |            | :x:                       |
| 19.6       |            | :x:                       |
| 19.3       |            | :x:                       |
| 18.12      |            | :x:                       |
| 0.8.3      |            | :x:                       |
| 0.7.0      |            | :x:                       |
| 0.6.0      |            | :x:                       |
| 0.5.4      |            | :x:                       |
| 0.4.1      |            | :x:                       |
| 0.3.1      |            | :x:                       |
| 0.2.0      |            | :x:                       |
| 0.1.9      |            | :x:                       |

:ballot_box_with_check: = セキュリティ/バグ修正のみ :white_check_mark: = フルサポート

## 非推奨

機能が非推奨になる前、またはAPIに破壊的更新が導入される前に、その機能は発表され、2つのリリースサイクルを通じて非推奨の警告とともに表示されます。 LTSリリースでは非推奨になりません。

正当な理由がある場合、これらのガイドラインの範囲外で重大な変更または機能の削除が行われる可能性があります。 これらの状況は稀なはずです。 たとえば、主要なセキュリティ問題を削減するための代替手段が利用できない場合などに発生する可能性があります。