# MarkDown記法の使い方
- ctrl + shift + M
  Preview 画面を開く

- Markdownプレビューを右クリック
  HTMLを出力することが可能
--------------------------
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6
---------------------
- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3
----------------------------
1. 番号付きリスト1
    1. 番号付きリスト1_1
    1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3
---------------------------------
> お世話になります。xxxです。

> ご連絡いただいた、バグの件ですが、仕様です。

2重引用


> お世話になります。xxxです。
>
> ご連絡いただいた、バグの件ですが、仕様です。
>> お世話になります。 yyyです。
>> あの新機能バグって


-------------------------------------------
インストールコマンドは `gem install hoge` です
-------------------------------------------
normal *italic* normal


normal _italic_ normal

normal **bold** normal

normal __bold__ normal

normal ***bold*** normal

normal ___bold___ normal

[Google先生](https://www.google.co.jp/)

~~取り消し線~~

~~~ruby
　class Hoge
　  def hoge
　    print 'hoge'
　  end
　end
　~~~

|header1|header2|header3|
|:--|--:|:--:|
|align left|align right|align center|
|a|b|c|

## <i class="fa fa-cube" style="font-size:1em;"></i> menu
* [to header1](#header1)
* [to header2](#header2)

<!-- some long code -->

[return to menu](#menu)
### header1
### header2
