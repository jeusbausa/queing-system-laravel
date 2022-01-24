<?php

use App\Events\OrdersEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/menus', ['\App\Http\Controllers\MenuItemsController', 'index']);
Route::post('/place-order', ['\App\Http\Controllers\PlacedOrdersController', 'create']);
Route::get('/orders', ['\App\Http\Controllers\PlacedOrdersController', 'index']);
Route::get('/test-broadcast', function () {
    broadcast(new OrdersEvent('test lang'));
});
Route::fallback(function () {
    return response(['code' => 404, 'message' => 'Route not found!'], 404);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
