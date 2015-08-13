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
## web page を表示してみます。

1. apache の導入    
`sudo apt-get install apache2`

2. private_network の設定
vi(editeor)で Vagrantfile　を開いて、下記のラインがコメントとなっているのでコメントを外す。　　　　
`config.vm.network "private_network", ip:"192,168.33.1.10"`

3. その後、Apache2 をリロードする。    
`sudo /etc/init.d/apache2 restart`

4. Browser で、192.168.33.10 にアクセスすると、下記のメッセージがでる。    
`It works!`    
`This is the default web page for this server.`    
`The web server software is running but no content has been added, yet`

5. 上記のメッセージを変えたければ    
`vi /var/www/index.html`    
で、中身を編集して、apace2 をリロードすれば変えることが出来る。
