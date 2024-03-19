<?php 
namespace App\Services ;
class UploadeImage
{
    public function uploadeImag($request,$src)
    {
        if ($request->hasFile("image")) {
            return $request->file("image")->store($src, "public");
        }
    }
}
