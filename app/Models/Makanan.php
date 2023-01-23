<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Makanan extends Model
{
    use HasFactory;

    protected $table = "makanan";

    protected $filable = [
        "nama_makanan",
        "harga_makanan",
        "rating_makanan"
    ];
}
