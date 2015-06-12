IrukaTinymce - Tinymce4 for cakephp2 plugin with file upload
=

これは Tinymce4 にファイル（画像）アップロード機能等を追加したものを、Cakephp2 用 plugin にしたものです。

対象
-

Cakephp2


特徴
-

* Tinymce4、および以下のTinymce plugin 一式を Cakephp2 用 plugin としてまとめてあります。
* Tinymce Smileys plugin(http://www.tinymce.com/download/plugins_view.php?id=31)
* スマイリーの画像は http://zaazu.com/ より
* Justboil.me Tinymce image upload plugin(https://github.com/vikdiesel/justboil.me) を Cakephp2 用 plugin に書き換え

Demo
-

![optimized](http://irukasano.github.io/images/iruka_tinymce_demo1.gif)


Install and Setup
-

* リポジトリを `rootdir/plugins/IrukaTinymce` または `rootdir/app/Plugin/IrukaTinymce` ディレクトリにクローン、またはダウンロードしたZIPファイルを解凍します。

* Pluginを読み込みます。

		//`app/Config/bootstrap.php`
		
		CakePlugin::loadAll(array(
		    'DebugKit',
		    'IrukaTinymce',
		));

* IrukaTinymce 用の設定情報を定義します

		//`app/Config/iruka_tinymce.php`
		
		$config = array(
		    "iruka_tinymce_setting" => array(
		        "picture" => array(
		            
		            // ファイルアップロードの物理ファイル保存用ディレクトリ
		            "savedir" => dirname(__FILE__).DS."..".DS."..".DS."files".DS."Images",
		            
		            // 画像なしの場合の画像物理パス
		            "user_no_image" => dirname(__FILE__).DS."..".DS."webroot".DS."img".DS."pic_noimage.jpg",
		            
		            // 最大アップロードファイルサイズ
		            "max_file_size" => 2*1024*1024,
		            
		            // 許可画像タイプ
		            "allow_upload_type" => array(
		                "gif", "jpg", "jpeg", "png",
		            ),
		            
		            // 画像自動リサイズ
		            "auto_resize" => true,
		            
		            // 自動リサイズ時の最大画像幅
		            "max_width" => 300,
		            
		            // 自動リサイズ時の最大画像高さ
		            "max_height" => 300,
		        ),
		    ),
		);

* IrukaTinymce 用の設定情報を読み込みます

		//`app/Controller/AppController.php`
		
		public function beforeFilter() {
		      :
		    Configure::load('iruka_tinymce');
		      :
		}

* Linux の場合、webroot ディレクトリに IrukaTinymce へのシンボリックリンクをはります

		cd app/webroot
		ln -s rootdir/plugins/IrukaTinymce/webroot iruka_tinymce

* Tinymce を組み込みたい画面で、以下のコードを挿入します。

		if ( CakePlugin::loaded('IrukaTinymce') ) {
		    $this->Html->script('/iruka_tinymce/js/tinymce/tinymce.min.js', array('inline' => false));
		    $this->Html->script('/iruka_tinymce/js/tinymce/langs/ja.js', array('inline' => false));
		    $this->Html->script('/iruka_tinymce/js/app/tinymce_setting.js', array('inline' => false));
		}

		$(document).ready(function(){
		    // tinymce not support HTML5 required attribute.
		    $("#TargetTinymceTextarea").removeAttr("required");
		    var setting = $.extend({},
		        tinymce_setting,
		        {
		            selector: "#TargetTinymceTextarea",
		            setup: function(editor){
		                editor.on('submit',function(e){
		                    //editor.triggerSave();
		                    //console.log($("#TargetTinymceTextarea").val());
		                });
		            }
		        }
		    );
		    tinymce.init(setting);
		});



Licence
-

このモジュールは MIT の元に公開します。
詳しくは LICENSE ファイルを参照ください。

Author
-

[irukasano](https://github.com/irukasano)
http://www.iruka-system.co.jp

