<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    protected $fillable = [
        'refId',
        'menu_item_id',
        'quantity',
    ];


    public function placeOrder()
    {
        return $this->belongsTo(PlacedOrders::class, 'refId', 'refId');
    }

    public function orderDesc()
    {
        return $this->belongsTo(MenuItems::class, 'menu_item_id');
    }
}
