<?php

class ImagesController extends IrukaTinymceAppController {
    public $uses = array(
        //'IrukaForum.IfTopic',
    );

    public function beforeFilter()
    {
        parent::beforeFilter();

        $this->Auth->allow('show');
    }

    public function blank()
    {
        $this->layout = false;
        Configure::write('debug', 0);
    }

    public function dialog()
    {
        $this->layout = false;
        Configure::write('debug', 0);
    }

    public function dialog_test()
    {
        $this->layout = false;
        Configure::write('debug', 0);
    }

    // 画像アップロード -----------------------------------------------------------
    public function upload()
    {
        $this->layout = false;
        // TODO:
        Configure::write('debug', 2);

        $messages = array();
        $ui = $this->save_uploaded_file($this->request->data, 'userfile', $messages);
        if ( $ui )
        {
            // File Save
            /*
            $data['User']['picture_filepath'] = $ui['filepath'];
            $data['User']['picture_type'] = $ui['type'];
            $data['User']['picture_filename'] = $ui['filename'];
            */
            $result = array(
                'result' => 'アップロードに成功しました．',
                'resultcode' => 'ok',
                'file_name' => $ui['url'],
                'messages' => null,
            );
        } else {
            $result = array(
                'result' => 'アップロードに失敗しました．',
                'resultcode' => 'failed',
                'file_name' => null,
                'messages' => $messages,
            );
        }
        $this->set('result', $result);
    }

    protected function has_uploaded_file($data, $key, &$messages)
    {
        if ( !isset($data[$key]) || empty($data[$key]))
        {
            array_push($messages, 'ファイルが指定されていません．');
            return false;
        }

        if ( $data[$key]['error']==UPLOAD_ERR_NO_FILE)
        {
            array_push($messages, 'ファイルが指定されていません．(UPLOAD_ERR_NO_FILE)');
            return false;
        }

        return true;
    }

    protected function validate_uploaded_file($data, $key, &$messages)
    {
        // ファイルサイズ
        $size = $data[$key]['size'];
        $max_size = Configure::read('iruka_tinymce_setting.picture.max_file_size');
        if ( $size > $max_size)
        {
            $ksize = $max_size / 1024 ;
            array_push($messages, sprintf('画像サイズが大きすぎます．%s KB以下にしてください', $ksize));
            return false;
        }

        // ファイルタイプ
        // type = 'image/gif' etc..
        $type = $data[$key]['type'];
        $typer = explode("/", $type);
        if ( count($typer)!=2){
            array_push($messages, '画像タイプを取得できませんでした．');
            return false;
        }
        
        $type = strtolower($typer[1]);
        $allow_upload_type = Configure::read('iruka_tinymce_setting.picture.allow_upload_type');
        if ( ! in_array($type, $allow_upload_type))
        {
            array_push($messages, sprintf('アップロードする画像は %s のいずれかにしてください',
                implode(',', $allow_upload_type)));
            return false;
        }

        return array(
            'error' => $data[$key]['error'],
            'type' => $type,
            'size' => $data[$key]['size'],
            'name' => $data[$key]['name'],
            'tmp_name' => $data[$key]['tmp_name'],
        );
    }

    // return array(new_width, new_height);
    protected function calc_new_size($filename)
    {
        $auto_resize = Configure::read('iruka_tinymce_setting.picture.auto_resize');
        $max_width = Configure::read('iruka_tinymce_setting.picture.max_width');
        $max_height = Configure::read('iruka_tinymce_setting.picture.max_height');

        list($width, $height, $type, $attr) = getimagesize($filename);

        if ( !$auto_resize ){
            return array(
                'do_resize' => false,
                'width' => $width, 
                'height' => $height,
            );
        }

        //see: http://qiita.com/redamoon/items/60eb6e899161d516d9f3

        $do_resize = true;
        $newwidth = 0; // 新しい横幅
        $newheight = 0; // 新しい縦幅

        // 両方オーバーしていた場合 
        if ($max_height < $height && $max_width < $width)  { 
            if ($max_width < $max_height) { 
                $newwidth = $max_width; 
                $newheight = $height * ($max_width / $width); 
            } else if ($max_height < $max_width) { 
                $newwidth = $width * ($max_height / $height); 
                $newheight = $max_height; 
            } else { 
                if ($width < $height) { 
                    $newwidth = $width * ($max_height / $height); 
                    $newheight = $max_height; 
                } else if($height < $width) { 
                    $newwidth = $max_width; 
                    $newheight = $height * ($max_width / $width); 
                }
            }
        } else if ($height < $h && $width < $w) { // 両方オーバーしていない場合 
            $do_resize = false;
            $newwidth = $width; 
            $newheight = $height; 
        } else if ($h < $height && $width <= $w) { 
            // 縦がオーバー、横は新しい横より短い場合 
            // 縦がオーバー、横は同じ長さの場合
            $newwidth = $width * ($max_height / $height); 
            $newheight = $max_height; 
        } else if ($height <= $h && $w < $width) { 
            // 縦が新しい縦より短く、横はオーバーしている場合 
            // 縦は同じ長さ、横はオーバーしている場合 
            $newwidth = $max_width; 
            $newheight = $height * ($max_width / $width); 
        } else if ($height == $max_height && $width < $max_width) { 
            // 横が新しい横より短く、縦は同じ長さの場合 
            $newwidth = $width * ($max_height / $height); 
            $newheight = $max_height; 
        } else if ($height < $h && $width == $w) { 
            // 縦が新しい縦より短く、横は同じ長さの場合 
            $newwidth = $max_width; 
            $newheight = $height * ($max_width / $width); 
        } else { 
            // 縦も横も、新しい長さと同じ長さの場合 
            // または、縦と横が同じ長さで、かつ最大サイズを超えない場合 
            $do_resize = false;
            $newwidth = $width; 
            $newheight = $height; 
        }

        return array(
            'do_resize' => $do_resize,
            'width' => $newwidth,
            'height' => $newheight,
            'original_width' => $width,
            'original_height' => $height,
        );
    }

    protected function resize_image_file($filename, $filetype, $resize, &$messages)
    {
        // see::http://blog.shuffleee.com/1772/
        $new_width = $resize['width'];
        $new_height = $resize['height'];
        $original_width= $resize['original_width'];
        $original_height = $resize['original_height'];
        if ($filetype === "jpg" || $filetype === "jpeg") {
            $original_image = ImageCreateFromJPEG($filename); //JPEGファイルを読み込む
            $new_image = ImageCreateTrueColor($new_width, $new_height); // 画像作成
        } elseif ($filetype === "gif") {
            $original_image = ImageCreateFromGIF($filename); //GIFファイルを読み込む
            $new_image = ImageCreateTrueColor($new_width, $new_height); // 画像作成

            /* ----- 透過問題解決 ------ */
            $alpha = imagecolortransparent($original_image);  // 元画像から透過色を取得する
            imagefill($new_image, 0, 0, $alpha);       // その色でキャンバスを塗りつぶす
            imagecolortransparent($new_image, $alpha); // 塗りつぶした色を透過色として指定する
        } elseif ($filetype === "png") {
            $original_image = ImageCreateFromPNG($filename); //PNGファイルを読み込む
            $new_image = ImageCreateTrueColor($new_width, $new_height); // 画像作成

            /* ----- 透過問題解決 ------ */
            imagealphablending($new_image, false);  // アルファブレンディングをoffにする
            imagesavealpha($new_image, true);       // 完全なアルファチャネル情報を保存するフラグをonにする
        } else {
            // 何も当てはまらなかった場合の処理は書いてませんので注意！
            return false;
        }

        // 元画像から再サンプリング
        ImageCopyResampled($new_image,$original_image,0,0,0,0,$new_width,$new_height,$original_width,$original_height);

        // 画像をファイル保存
        $new_filename = $filename . ".resize";
        if ($filetype === "jpg" || $filetype === "jpeg") {
            ImageJPEG($new_image, $new_filename);
        } elseif ($filetype === "gif") {
            ImageGIF($new_image, $new_filename);
        } elseif ($filetype === "png") {
            ImagePNG($new_image, $new_filename);
        }

        // メモリを開放する
        imagedestroy($new_image);
        imagedestroy($original_image);
        //unlink($filename);
        rename($new_filename, $filename);
        
        return $filename;
    }

    protected function save_uploaded_file($data, $key, &$messages)
    {
        if ( ! $this->has_uploaded_file($data, $key, $messages))
        {
            return false;
        }

        if ( ! $data[$key] = $this->validate_uploaded_file($data, $key, $messages))
        {
            return false;
        }

        // 一時ファイルを取得
        $tmp_file = $data[$key]['tmp_name'];
        $resize = $this->calc_new_size($tmp_file);

        // リサイズ
        if ( $resize['do_resize']){
            $tmp_file = $this->resize_image_file($tmp_file, $data[$key]['type'], $resize, $messages);
            if ( !$tmp_file){
                return false;
            }
        }

        App::uses('String', 'Utility');
        $image_id = String::uuid();
        $dkey = date('Ymd');

        $filedir = Configure::read('iruka_tinymce_setting.picture.savedir').DS.$dkey;

        if ( ! file_exists($filedir) || ! is_dir($filedir))
        {
            mkdir($filedir, 0755, true);
        }
        $filepath = $filedir . DS . $image_id;

        if (! move_uploaded_file($tmp_file, $filepath))
        {
            array_push($messages, 'ファイルをコピーできませんでした．');
            return false;
        }

        return array(
            'filepath' => $filepath,
            'type' => $data[$key]['type'],
            'filename' => $data[$key]['name'],
            'url' => Router::url(array(
                'plugin' => 'iruka_tinymce',
                'controller' => 'images',
                'action' => 'show',
                $dkey,
                $image_id,
            ), true),
        );
    }


    // 画像表示 -------------------------------------------------------------------
    public function show($key=null,$image_id=null)
    {
        $this->redirect404Unless($image_id&&$key);

        $this->autoRender = false;
        Configure::write('debug', 0);

        $filepath = Configure::read('iruka_tinymce_setting.picture.savedir').
            DS . $key .
            DS . $image_id;

        if ( $filepath && file_exists($filepath))
        {
            $this->show_picture(
                $filepath
            );
        } else {
            $this->show_picture(
                Configure::read('iruka_tinymce_setting.picture.user_no_image')
            );
        }

    }

    protected function show_picture($filepath)
    {
        $modifiedSince = $this->request->header("If-Modified-Since");
        $modified = gmdate("D, d M Y H:i:s e", filemtime($filepath));

        $image_type = exif_imagetype($filepath);
        if ( !$image_type ){
            header('HTTP/1.1 404 Not Found');
            exit;
        }

        if ( $modifiedSince != $modified)
        {
            $filesize = filesize($filepath);
            $fp = fopen($filepath, 'rb');
            $picture = fread($fp, $filesize);
            fclose($fp);

            header(sprintf("Content-type: %s;", image_type_to_mime_type($image_type)));
            header(sprintf("Content-Length: %s;", $filesize));
            //header(sprintf('Content-disposition: inline; filename="%s"', $filename));
            header(sprintf('Last-Modified: %s', $modified));
            header('Cache-Control: max-age=0');
            print($picture);
        } else {
            header('HTTP/1.1 304 Not Modified');
        }
        exit;
    }



}

