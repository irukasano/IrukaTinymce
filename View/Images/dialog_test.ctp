<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>Upload an image</title>
    <?php 
        $baseurl = $this->Html->url('/', true);
        $baseurl = $baseurl . "iruka_tinymce/js/tinymce/plugins/jbimages";
    ?>
  </head>
  <body>
    <div style="margin:5px;">
      <form class="form-inline" id="upl" name="upl" action="<?php 
        echo $this->Html->url(array(
            'plugin' => 'iruka_tinymce',
            'controller' => 'images',
            'action' => 'upload',
        ));
      ?>" method="post" enctype="multipart/form-data" target="upload_target" >

        <p id="upload_form_container">
          <input id="uploader" name="data[userfile]" type="file" class="jbFileBox">
          <input type="submit" value="send">
        </p>
      </form>
    </div>
  </body>
</html>

