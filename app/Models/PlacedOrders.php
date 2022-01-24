<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Orders;

class PlacedOrders extends Model
{
    use HasFactory;


    protected $fillable = ['refId', 'orderNo'];

    public function orders()
    {

        return $this->hasMany(Orders::class, 'refId', 'refId');
    }
}
