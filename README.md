IrukaTinymce - Tinymce4 for cakephp2 plugin with file upload
=

����� Tinymce4 �Ƀt�@�C���i�摜�j�A�b�v���[�h�@�\����ǉ��������̂��ACakephp2 �p plugin �ɂ������̂ł��B

�Ώ�
-

Cakephp2


����
-

* Tinymce4�A����шȉ���Tinymce plugin �ꎮ�� Cakephp2 �p plugin �Ƃ��Ă܂Ƃ߂Ă���܂��B
* Tinymce Smileys plugin(http://www.tinymce.com/download/plugins_view.php?id=31)
* �X�}�C���[�̉摜�� http://zaazu.com/ ���
* Justboil.me Tinymce image upload plugin(https://github.com/vikdiesel/justboil.me) �� Cakephp2 �p plugin �ɏ�������

Demo
-

![optimized](http://irukasano.github.io/images/iruka_tinymce_demo1.gif)


Install and Setup
-

* ���|�W�g���� `rootdir/plugins/IrukaTinymce` �܂��� `rootdir/app/Plugin/IrukaTinymce` �f�B���N�g���ɃN���[���A�܂��̓_�E�����[�h����ZIP�t�@�C�����𓀂��܂��B

* Plugin��ǂݍ��݂܂��B

		//`app/Config/bootstrap.php`
		
		CakePlugin::loadAll(array(
		    'DebugKit',
		    'IrukaTinymce',
		));

* IrukaTinymce �p�̐ݒ�����`���܂�

		//`app/Config/iruka_tinymce.php`
		
		$config = array(
		    "iruka_tinymce_setting" => array(
		        "picture" => array(
		            
		            // �t�@�C���A�b�v���[�h�̕����t�@�C���ۑ��p�f�B���N�g��
		            "savedir" => dirname(__FILE__).DS."..".DS."..".DS."files".DS."Images",
		            
		            // �摜�Ȃ��̏ꍇ�̉摜�����p�X
		            "user_no_image" => dirname(__FILE__).DS."..".DS."webroot".DS."img".DS."pic_noimage.jpg",
		            
		            // �ő�A�b�v���[�h�t�@�C���T�C�Y
		            "max_file_size" => 2*1024*1024,
		            
		            // ���摜�^�C�v
		            "allow_upload_type" => array(
		                "gif", "jpg", "jpeg", "png",
		            ),
		            
		            // �摜�������T�C�Y
		            "auto_resize" => true,
		            
		            // �������T�C�Y���̍ő�摜��
		            "max_width" => 300,
		            
		            // �������T�C�Y���̍ő�摜����
		            "max_height" => 300,
		        ),
		    ),
		);

* IrukaTinymce �p�̐ݒ����ǂݍ��݂܂�

		//`app/Controller/AppController.php`
		
		public function beforeFilter() {
		      :
		    Configure::load('iruka_tinymce');
		      :
		}

* Linux �̏ꍇ�Awebroot �f�B���N�g���� IrukaTinymce �ւ̃V���{���b�N�����N���͂�܂�

		cd app/webroot
		ln -s rootdir/plugins/IrukaTinymce/webroot iruka_tinymce

* Tinymce ��g�ݍ��݂�����ʂŁA�ȉ��̃R�[�h��}�����܂��B

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

���̃��W���[���� MIT �̌��Ɍ��J���܂��B
�ڂ����� LICENSE �t�@�C�����Q�Ƃ��������B

Author
-

[irukasano](https://github.com/irukasano)
http://www.iruka-system.co.jp

