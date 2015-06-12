<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>Upload an image</title>
    <?php 
        $baseurl = $this->Html->url('/', true);
        $baseurl = $baseurl . "iruka_tinymce/js/tinymce/plugins/jbimages";
    ?>
    <script type="text/javascript" src="<?php echo $baseurl ?>/js/dialog-v4.js?ver=20150421"></script>
    <link href="<?php echo $baseurl ?>/css/dialog-v4.css?ver=20150421" rel="stylesheet" type="text/css">
  </head>
  <body>
    <div style="margin:5px;">
      <form class="form-inline" id="upl" name="upl" action="<?php 
        echo $this->Html->url(array(
            'plugin' => 'iruka_tinymce',
            'controller' => 'images',
            'action' => 'upload',
        ));
      ?>" method="post" enctype="multipart/form-data" target="upload_target" 
      onsubmit="jbImagesDialog.inProgress();">

        <div id="upload_in_progress" class="upload_infobar">
          <img src="<?php echo $baseurl ?>/img/spinner.gif" width="16" height="16" class="spinner">アップロード中..&hellip; 
          <div id="upload_additional_info"></div>
        </div>

        <div id="upload_infobar" class="upload_infobar"></div>  

        <p id="upload_form_container">
          <input id="uploader" name="data[userfile]" type="file" class="jbFileBox" onChange="document.upl.submit(); jbImagesDialog.inProgress();">
        </p>
        <?php
          $allow_ext = Configure::read("iruka_tinymce_setting.picture.allow_upload_type");
          $allow_size = Configure::read("iruka_tinymce_setting.picture.max_file_size");
          $auto_resize = Configure::read("iruka_tinymce_setting.picture.auto_resize");
          $max_width = Configure::read("iruka_tinymce_setting.picture.max_width");
          $max_height = Configure::read("iruka_tinymce_setting.picture.max_height");
        ?>
        <ul>
          <li>最大サイズ：<?php echo $allow_size / 1024 ?> KB </li>
          <li>種類：<?php echo implode(",", $allow_ext) ?></li>
          <?php if ( $auto_resize): ?>
          <li>画像は自動的に、横 <?php echo $max_width ?>、縦<?php echo $max_height ?> にリサイズされます</li>
          <?php endif; ?>
        </ul>
      </form>
    </div>

    <iframe id="upload_target" name="upload_target" src="<?php 
        echo $this->Html->url(array(
            'plugin' => 'iruka_tinymce',
            'controller' => 'images',
            'action' => 'blank',
        ));
    ?>"></iframe>

  </body>
</html>

