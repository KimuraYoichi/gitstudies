# Vagrant事始め
windows 環境に、仮想マシンを導入して、その上にパッケージ化されているOSのイメージファイルで様々な環境を作り上げていきます。

## まず必要なソフトの導入

1. 仮想マシンの導入
  Virtualbox　を導入します。

2. 仮想マシンを簡単に立ち上げるツールの導入
  Vagrant を導入します。

3. ここからはwindowsのコマンド画面で実施します。

4. 次に仮想マシンのテンプレートboxを取得する。
`vagrant box add precise32 http://files.vagrantup.com/precise32.box`

5. 取得できたかの確認
`vagrant box list`
  以下のレスポンスがあれば大丈夫
`precise32 (virtualbox, 0)`

6. ここからは立ち上がったVMとsshで会話する必要があるのでwindowsdsでbashコンソールを使うことにします。
そのためにGitを導入してそれに付属しているbashコンソールを使います。（Gitをインストールする）

7. 仮想マシンを立ち上げるディレクトリを作る。
`mkdir precise32`
そこに移動して
`cd precise32`

8. 仮想マシンの環境を作ります。
`vagrant init precise32`

9. 仮想マシンの立ち上げ
 `vagratn up`

10. 仮想マシンの状態を知るために
`$ vagrant status`
次のようなレスポンスがあれば稼働しています。
`Current machine states: default running (virtualbox)`

11. 仮想マシンにつなぎます。
`$ vagrant ssh`
次のようなレスポンスがあれば、仮想環境にコネクトでき操作できます。
`Welcome to your Vagrant-built virtual machine.`
`Last login: Wed Aug  5 05:49:18 2015 from 10.0.2.2`
`vagrant@precise32:~$`

------------------------
